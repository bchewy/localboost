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

# CREATING ECR REPOSITORY
resource "aws_ecr_repository" "localboost_ecr" {
  name = "localboost_ecr"
  image_tag_mutability = "MUTABLE"
  image_scanning_configuration {
        scan_on_push = true
  }
}



# CREATING ECS CLUSTER
resource "aws_ecs_cluster" "localboost_cluster" {
  name = "localboost_cluster" # Naming the cluster
}

# CREATING ECS TASK DEFINITION
# The task definition is like the blueprint that describes how the
# docker container should launch. 
resource "aws_ecs_task_definition" "localboost_taskdef" {
  family                   = "localboost_taskdef" # Naming our first task
  container_definitions    = <<DEFINITION
  [
    {
      "name": "localboost_taskdef",
      "image": "442029411374.dkr.ecr.ap-southeast-1.amazonaws.com/localboost_ecr",
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
  execution_role_arn       = "${aws_iam_role.ecsTaskExecutionRoleLBS.arn}"
}

# Create ECS task execution roles in IAM.
resource "aws_iam_role" "ecsTaskExecutionRoleLBS" {
  name               = "ecsTaskExecutionRoleLBS"
  assume_role_policy = "${data.aws_iam_policy_document.assume_role_policy.json}"
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

resource "aws_iam_role_policy_attachment" "ecsTaskExecutionRoleLBS_policy" {
  role       = "${aws_iam_role.ecsTaskExecutionRoleLBS.name}"
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}


# CREATING VPCs
# Providing a reference to our default VPC
resource "aws_default_vpc" "default_vpc" {
}

resource "aws_default_subnet" "default_subnet_a" {
  availability_zone = "ap-southeast-1a"
}

resource "aws_default_subnet" "default_subnet_b" {
  availability_zone = "ap-southeast-1b"
}

resource "aws_default_subnet" "default_subnet_c" {
  availability_zone = "ap-southeast-1c"
}

# CREATING LOAD BALANCER
resource "aws_alb" "application_load_balancer" {
  name               = "loadbalancer" # Naming our load balancer
  load_balancer_type = "application"
  subnets = [ # Referencing the default subnets
    "${aws_default_subnet.default_subnet_a.id}",
    "${aws_default_subnet.default_subnet_b.id}",
    "${aws_default_subnet.default_subnet_c.id}"
  ]
  # Referencing the security group
  security_groups = ["${aws_security_group.load_balancer_security_group.id}"]
}

# CREATING LOAD BALANCER SECURITY GROUP
# Creating a security group for the load balancer:
resource "aws_security_group" "load_balancer_security_group" {
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

resource "aws_lb_target_group" "target_group" {
  name        = "target-group"
  port        = 80
  protocol    = "HTTP"
  target_type = "ip"
  vpc_id      = "${aws_default_vpc.default_vpc.id}" # Referencing the default VPC
  # health_check {
  #   matcher = "200,301,302"
  #   path = "/"
  # }
}

resource "aws_lb_listener" "listener" {
  load_balancer_arn = "${aws_alb.application_load_balancer.arn}" 
  port              = "80"
  protocol          = "HTTP"
  default_action {
    type             = "forward"
    target_group_arn = "${aws_lb_target_group.target_group.arn}" 
  }
}

# security group for service, specifically
resource "aws_security_group" "service_security_group" {
  ingress {
    from_port = 0
    to_port   = 0
    protocol  = "-1"
    security_groups = ["${aws_security_group.load_balancer_security_group.id}"]
  }

  egress {
    from_port   = 0 # Allowing any incoming port
    to_port     = 0 # Allowing any outgoing port
    protocol    = "-1" # Allowing any outgoing protocol 
    cidr_blocks = ["0.0.0.0/0"] # Allowing traffic out to all IP addresses
  }
}


# CREATING ECS SERVICE
resource "aws_ecs_service" "localboost_service" {
  name            = "localboost_service"                             # Naming our first service
  cluster         = "${aws_ecs_cluster.localboost_cluster.id}"             # Referencing our created Cluster
  task_definition = "${aws_ecs_task_definition.localboost_taskdef.arn}" # Referencing the task our service will spin up
  launch_type     = "FARGATE"
  desired_count   = 2 # Setting the number of containers we want deployed to 3

  # Linking back the service to the LB.
  load_balancer {
    target_group_arn = "${aws_lb_target_group.target_group.arn}" # Referencing our target group
    container_name   = "${aws_ecs_task_definition.localboost_taskdef.family}"
    container_port   = 80 # Specifying the container port
  }

  network_configuration {
        subnets         = ["${aws_default_subnet.default_subnet_a.id}", "${aws_default_subnet.default_subnet_b.id}", "${aws_default_subnet.default_subnet_c.id}"]
        assign_public_ip = true
        security_groups  = ["${aws_security_group.service_security_group.id}"] # Set up the security group
  }
}

output "app_url" {
  value = aws_alb.application_load_balancer.dns_name
}