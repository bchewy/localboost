provider "aws" {
  region  = "us-east-2" #ohio final boss
}

resource "aws_ecr_repository" "my_first_ecr_repo" {
  name = "localboost_ecr" # Naming my repository
}