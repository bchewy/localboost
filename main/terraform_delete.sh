#!/bin/bash

# Delete ECS Service
terraform destroy -target=aws_ecs_service.localboost_service -auto-approve

# Delete Load Balancer Listener
terraform destroy -target=aws_lb_listener.listener -auto-approve

# Delete Load Balancer Target Group
terraform destroy -target=aws_lb_target_group.target_group -auto-approve

# Delete Load Balancer
terraform destroy -target=aws_alb.localboost_loadbalancer -auto-approve

# Delete ECS Task Definition
terraform destroy -target=aws_ecs_task_definition.localboost_task -auto-approve

# Delete ECS Cluster
terraform destroy -target=aws_ecs_cluster.localboost_cluster -auto-approve

# Delete ECR Repository
terraform destroy -target=aws_ecr_repository.localboost_ecr -auto-approve

# Delete IAM Resources
terraform destroy -target=aws_iam_role_policy_attachment.ecsTaskExecutionRoleLB_policy -auto-approve
terraform destroy -target=aws_iam_role.ecsTaskExecutionRoleLB -auto-approve

# Delete VPC Resources
terraform destroy -target=aws_security_group.service_security_group -auto-approve
terraform destroy -target=aws_security_group.load_balancer_security_group -auto-approve
terraform destroy -target=aws_default_subnet.default_subnet_c -auto-approve
terraform destroy -target=aws_default_subnet.default_subnet_b -auto-approve
terraform destroy -target=aws_default_subnet.default_subnet_a -auto-approve
terraform destroy -target=aws_default_vpc.default_vpc -auto-approve
