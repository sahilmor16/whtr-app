pipeline {
  agent any

  environment {
    IMAGE = "sahilmor16/whtr-app"
  }

  stages {

    stage('Checkout') {
      steps {
        git branch: 'main',
            url: 'https://github.com/sahilmor16/whtr-app.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t $IMAGE:$BUILD_NUMBER .'
        sh 'docker tag $IMAGE:$BUILD_NUMBER $IMAGE:latest'
      }
    }

    stage('Push to Docker Hub') {
      steps {
        withDockerRegistry(url: 'https://index.docker.io/v1/', credentialsId: 'dockerhub-creds') {
          sh 'docker push $IMAGE:$BUILD_NUMBER'
          sh 'docker push $IMAGE:latest'
        }
      }
    }

    stage('Deploy via Ansible') {
        steps {
            sh 'ansible-playbook -i inventory.ini deploy.yml'
        }
  }
}
