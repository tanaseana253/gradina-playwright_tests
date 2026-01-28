pipeline {
  agent any

  environment {
    BASE_URL = credentials('BASE_URL')
    TEST_EMAIL = credentials('TEST_EMAIL')
    TEST_PASSWORD = credentials('TEST_PASSWORD')

    // Pune browser-ele Playwright în workspace
    PLAYWRIGHT_BROWSERS_PATH = "${WORKSPACE}\\pw-browsers"
  }

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Show Jenkinsfile') {
      steps { bat 'type Jenkinsfile' }
    }

    stage('Install') {
      steps {
        bat 'echo WORKSPACE=%WORKSPACE%'
        bat 'echo PLAYWRIGHT_BROWSERS_PATH=%PLAYWRIGHT_BROWSERS_PATH%'

        bat 'npm ci'

        bat 'echo Installing Playwright browser (chromium)...'
        bat 'npx playwright install chromium'

        bat 'echo Installed browsers:'
        bat 'dir "%PLAYWRIGHT_BROWSERS_PATH%" /s'
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