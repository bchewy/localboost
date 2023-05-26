# Containers
This short wiki guide explains how the container is first packaged into
a container, then deployed into AWS ECS, with the use of IaC tools like Terraform.

### Requirements
Ensure you have both a AWS access & secret key, you can get one from the IAM service.

### Depoying locally
`docker-compose up` deploys the docker container on your local machine, you can then access the server http://localhost:3000 on your browser. You can add the `-d` flag to detach it