pipeline {
    agent any

    stages {
        stage('Instalar dependencias') {
            steps {
                dir('game-project') {
                    sh 'npm install'
                }
            }
        }

        stage('Pruebas unitarias') {
            steps {
                dir('game-project') {
                    sh 'npm run test'
                }
            }
        }

        stage('Compilar el proyecto') {
            steps {
                dir('game-project') {
                    sh 'npm run build'
                }
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
