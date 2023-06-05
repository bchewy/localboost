project = "localboost"
app "web" {
    build {
        // Build locally to docker, then get a waypoint endpoint to test!
        use "docker" {
            # https://developer.hashicorp.com/waypoint/integrations/hashicorp/docker/latest/components/builder/docker-builder#parameters.disable_entrypoint
            // disable_entrypoint     = false 
            // buildkit               = false 
        }
        //   use "pack" {}
        //     registry {
        //         use "aws-ecr" {
        //         region     = "ap-southeast-1"
        //         repository = "bchewy"`
        //         tag        = "latest"
        //         }
        //     }

    }
    deploy {
        // use "docker" {}
        use "aws-ecs" {
            region        = "ap-southeast-1" // Sg
            memory        = 512
            ec2_cluster   = true
            cpu           = 512
            architecture  = "arm64"
            count         = 1
        }
    }

}
