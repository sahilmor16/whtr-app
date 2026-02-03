pipeline {
  agent any

  environment {
    IMAGE = "dockerhubusername/weather-devops"
  }

  stages {

    stage('Checkout') {
      steps {
        git branch: 'main',
            url: 'https://github.com/<your-username>/weather-devops-app.git'
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
        withDockerRegistry(credentialsId: 'dockerhub-creds') {
          sh 'docker push $IMAGE:$BUILD_NUMBER'
          sh 'docker push $IMAGE:latest'
        }
      }
    }
  }
}
