node {
  stage('SCM') {
    checkout scm
  }
  stage('SonarQube Analysis') {
    tools {
        jdk "jdk8" // the name you have given the JDK installation in Global Tool Configuration
    }
    environment {
        scannerHome = tool 'SonarScanner' // the name you have given the Sonar Scanner (in Global Tool Configuration)
    }
    steps {
        withSonarQubeEnv(installationName: 'SonarQube') {
            bat "${scannerHome}/bin/sonar-scanner -X"
        }
    }
  }
}
