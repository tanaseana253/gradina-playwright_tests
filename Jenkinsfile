pipeline {
  agent any

  environment {
    BASE_URL = credentials('BASE_URL')
    TEST_EMAIL = credentials('TEST_EMAIL')
    TEST_PASSWORD = credentials('TEST_PASSWORD')

    // Pune browser-ele în workspace, nu în systemprofile
    PLAYWRIGHT_BROWSERS_PATH = "${WORKSPACE}\\pw-browsers"
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    // Debug: ca să vezi în log că Jenkins rulează fișierul corect
    stage('Show Jenkinsfile') {
      steps {
        bat 'type Jenkinsfile'
      }
    }

    stage('Install') {
      steps {
        bat '''
          echo WORKSPACE=%WORKSPACE%
          echo PLAYWRIGHT_BROWSERS_PATH=%PLAYWRIGHT_BROWSERS_PATH%

          npm ci

          echo Installing Playwright browser (chromium)...
          npx playwright install chromium

          echo Installed browsers:
          dir "%PLAYWRIGHT_BROWSERS_PATH%" /s
        '''
      }
    }

    stage('Test') {
      steps {
        bat '''
          npx playwright test --project=chromium
        '''
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