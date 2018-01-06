pipeline {
  agent any
  stages {
    stage('hans') {
      steps {
        mail(subject: 'hans', body: 'lebbel', from: 'peter')
      }
    }
    stage('wurst') {
      steps {
        echo 'hello world'
      }
    }
    stage('pan') {
      steps {
        echo 'huaaaa'
      }
    }
  }
}