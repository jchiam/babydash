#!groovy

pipeline {
    agent any

    stages {
        stage('Build & Deploy') {
            steps {
                slackSend teamDomain: 'jonbecca', channel: '#surpriseee', color: 'good', message: "Build <$BUILD_URL|$JOB_NAME-$BUILD_NUMBER> started!", tokenCredentialId: 'jonbecca-slack-token'
                sh 'make build-deploy'
            }
        }
    }

    post {
        success {
            dir('_build') {
                deleteDir()
            }
            slackSend teamDomain: 'jonbecca', channel: '#surpriseee', color: 'good', message: "Build <$BUILD_URL|$JOB_NAME-$BUILD_NUMBER> succeeded!\nPlease verify at $PRODUCTION_URL", tokenCredentialId: 'jonbecca-slack-token'
        }
        failure {
            slackSend teamDomain: 'jonbecca', channel: '#surpriseee', color: 'danger', message: "Build <$BUILD_URL|$BUILD_NUMBER> failed.", tokenCredentialId: 'jonbecca-slack-token'
        }
        unstable {
            slackSend teamDomain: 'jonbecca', channel: '#surpriseee', color: 'warning', message: "Build <$BUILD_URL|$BUILD_NUMBER> is unstable.", tokenCredentialId: 'jonbecca-slack-token'
        }
    }
}
