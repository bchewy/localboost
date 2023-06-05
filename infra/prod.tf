terraform {
 required_providers {
     aws = {
         source = "hashicorp/aws"
         version = "4.45.0"  # Changed from: [version = "~>4.19.0"]
     }
 }
}
provider "aws" {
  region  = "ap-southeast-1" #singapore
}



# ==================================================================================================

# CREATING ECS CLUSTER
resource "aws_ecs_cluster" "localboost_cluster" {
  name = "localboost_cluster" # Naming the cluster
}

# ==================================================================================================



# CREATE OUR NETWORK
# Main network VPC
resource "aws_default_vpc" "localboost_vpc" {
}
# Two Subnets within the VPC
resource "aws_default_subnet" "localboost_subnet_a" {
  availability_zone = "ap-southeast-1a"
}
resource "aws_default_subnet" "localboost_subnet_b" {
  availability_zone = "ap-southeast-1b"
}

# ==================================================================================================

# CREATE IAM ROLES ECS
resource "aws_iam_role" "ecsTaskExecRole"{
        name                  = "ecsTaskExecRole"
        assume_role_policy    = "${data.aws_iam_policy_document.assume_role_policy.json}"
}
data "aws_iam_policy_document" "assume_role_policy" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["ecs-tasks.amazonaws.com"]
    }
  }
}


# CREATING SECURITY GROUPS
# LOAD BALANCER SECURITY GROUP
resource "aws_security_group" "localboost_loadbalancer_sg" {
  name        = "localboost_prod_sg"
  description = "Allow inbound traffic"
#   vpc_id      = "${aws_default_vpc.localboost_vpc.id}" # Referencing the default VPC
  ingress {
    from_port   = 80 
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] 
  }

  egress {
    from_port   = 0
    to_port     = 0 
    protocol    = "-1" 
    cidr_blocks = ["0.0.0.0/0"]
  }
}
# ECS SECURITY GROUP
resource "aws_security_group" "localboost_ecs_sg" {
  ingress {
    from_port = 0
    to_port   = 0
    protocol  = "-1"
    security_groups = ["${aws_security_group.localboost_loadbalancer_sg.id}"] # refrerencing the load balancer security group, so that the load balancer can communicate with the ECS cluster
  }

  egress {
    from_port   = 0
    to_port     = 0 
    protocol    = "-1" 
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# ==================================================================================================

# CREATE ECS TASK DEFINITION (LAUNCH CONFIGURATION but for containers. It is like the blueprint that describes how the docker container should launch.)
resource "aws_ecs_task_definition" "localboost_task_definition" {
  family                   = "localboost_task_definition" # Naming our first task
  container_definitions    = <<DEFINITION
  [
    {
      "name": "localboost_task_definition",
      "image": "public.ecr.aws/v4m1i4y3/bchewy:latest",
      "essential": true,
      "portMappings": [
        {
          "containerPort": 80,
          "hostPort": 80
        }
      ],
      "memory": 512,
      "cpu": 256
    }
  ]
  DEFINITION
  requires_compatibilities = ["FARGATE"] # Stating that we are using ECS Fargate
  network_mode             = "awsvpc"    # Using awsvpc as our network mode as this is required for Fargate
  memory                   = 512         # Specifying the memory our container requires
  cpu                      = 256         # Specifying the CPU our container requires
  execution_role_arn       = "${aws_iam_role.ecsTaskExecRole.arn}"
}

# ==================================================================================================

# CREATE ECS SERVICE
resource "aws_ecs_service" "localboost_service" {
  name            = "localboost_service"
  cluster         = "${aws_ecs_cluster.localboost_cluster.id}"
  task_definition = "${aws_ecs_task_definition.localboost_task_definition.arn}"
  desired_count   = 1 # How many containers you would want
  launch_type     = "FARGATE"

  network_configuration {
    subnets = ["${aws_default_subnet.localboost_subnet_a.id}", "${aws_default_subnet.localboost_subnet_b.id}"]
    security_groups = ["${aws_security_group.localboost_ecs_sg.id}"]
    assign_public_ip = true
  }
  load_balancer {
    target_group_arn = "${aws_lb_target_group.localboost_tg.arn}"
    container_name   = "localboost_task_definition" # this is the taks definition name
    container_port   = 80
  }
}

# ==================================================================================================
# CREATE LOAD BALANCER
resource "aws_alb" "localboost_lb" {
  name               = "localboost-lb" # Naming our load balancer
  load_balancer_type = "application"
  subnets = [ # Referencing the default subnets
    "${aws_default_subnet.localboost_subnet_a.id}",
    "${aws_default_subnet.localboost_subnet_b.id}"
  ]
  # Referencing the security group
  security_groups = ["${aws_security_group.localboost_loadbalancer_sg.id}"]
}


# OUTPUT STATUS OF ECS SERVICE
output "localboost_url" {
  value = "DNS FOR ALB: ${aws_alb.localboost_lb.dns_name}"
}

# CREATE TARGET GROUP & LISTENER
resource "aws_lb_target_group" "localboost_tg" {
  name        = "localboost-tg"
  port        = 80
  protocol    = "HTTP"
  target_type = "ip"
  vpc_id      = "${aws_default_vpc.localboost_vpc.id}" # 
  health_check {
    matcher = "200,301,302"
    path = "/"
  }
}

resource "aws_lb_listener" "listener" {
  load_balancer_arn = "${aws_alb.localboost_lb.arn}" 
  port              = "80"
  protocol          = "HTTP"
  default_action {
    type             = "forward"
    target_group_arn = "${aws_lb_target_group.localboost_tg.arn}" 
  }
}
