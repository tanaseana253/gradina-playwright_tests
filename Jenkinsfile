pipeline {
  agent any

  environment {
    BASE_URL = credentials('BASE_URL')
    TEST_EMAIL = credentials('TEST_EMAIL')
    TEST_PASSWORD = credentials('TEST_PASSWORD')

    // browser-ele în workspace
    PLAYWRIGHT_BROWSERS_PATH = "${WORKSPACE}\\pw-browsers"
  }

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Install') {
      steps {
        bat '''
          npm ci
          npx playwright install chromium
        '''
      }
    }

    stage('Test') {
      steps {
        bat 'npx playwright test --project=chromium'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
      archiveArtifacts artifacts: 'test-results/**', allowEmptyArchive: true
    }
  }
}