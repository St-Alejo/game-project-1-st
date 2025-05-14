pipeline {
    agent any

    stages {
        stage('Instalar dependencias') {
            steps {
                sh 'npm install'
            }
        }

        stage('Pruebas unitarias') {
            steps {
                sh 'npm run test'
            }
        }

        stage('Compilar el proyecto') {
            steps {
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline ejecutado con éxito.'
        }
        failure {
            echo '❌ Falló la ejecución del pipeline.'
        }
    }
}
