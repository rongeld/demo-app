pipeline {
  agent any
  parameters {
    string(name: "param1", defaultValue: "default", description: "param1 description")
    choice(name: "param2", choices: ["choice1", "choice2"])
    booleanParam(name: "param3", defaultValue: true)
  }
  environment {
    NEW_VERSION = "1.3.0"
    SERVER_CREDENTIALS = credentials('github-creds')
  }
  stages {
    stage('Build') {
      when {
          expression {
            params.param1 == "default"
          }
      }
      steps {
        echo 'Building an app...'
        echo "Building version ${NEW_VERSION}"
      }
    }
     stage('Test') {
       
      steps {
        
        echo 'Testing......'
      }
    }
     stage('Deploy') {
      steps {
        echo 'Deploying to server...'
        echo "Deploying version ${params.param1}"
      }
    }
  }
  post {
    always {
      echo 'Always executed...'
    }
    success {
      echo 'Success executed...'
    }
    failure {
      echo 'Failure executed...'
    }
  }
}