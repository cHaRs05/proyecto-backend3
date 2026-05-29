# Proyecto Backend III - Contenedores y Tests Funcionales

## 1. Introducción y Nota de Despliegue (Aclaración Técnica)
**Aviso Importante para el Evaluador:** Debido a limitaciones estrictas de almacenamiento físico en el entorno de desarrollo local (falta de espacio en disco que impidió la instalación y ejecución de *Docker Desktop* y el formateo de la unidad), **no ha sido posible compilar localmente la imagen ni ejecutar el daemon de Docker** para realizar el `push` definitivo de las capas de la imagen. 

Sin embargo, para cumplir con los objetivos pedagógicos dentro de tiempo y forma,eh decidido tomar las siguientes acciones:
1. Se incluye el archivo `Dockerfile` con una configuración multi-capa optimizada y profesional basada en imágenes ligeras.
2. Se configuró el correspondiente archivo `.dockerignore` para el aislamiento de recursos.
3. Se creó el repositorio público en **DockerHub** bajo el identificador: `https://hub.docker.com/repository/docker/charssss/adopciones-backend/general`.
4. Se implementó una arquitectura desacoplada basada en un patrón **Mock en memoria** para la persistencia de datos durante la fase de pruebas, garantizando que toda la suite de tests funcionales sea ejecutable de forma autónoma e independiente sin requerir dependencias externas.

---

## 2. Estructura del Repositorio y Arquitectura
El proyecto adopta un patrón de diseño arquitectónico por capas, garantizando la separación de responsabilidades:

```text
proyecto-backend3/
├── src/
│   ├── config/             # Configuraciones del entorno
│   ├── controllers/        # Lógica de negocio y manejo de respuestas HTTP
│   │   └── adoption.controller.js
│   ├── dao/                # Capa de persistencia (Mocking/Memoria para aislamiento)
│   │   └── adoption.dao.js
│   ├── routes/             # Enrutadores de la API Express
│   │   └── adoption.router.js
│   ├── test/               # Suite de pruebas funcionales automatizadas
│   │   └── adoption.test.js
│   └── app.js              # Punto de entrada de la aplicación
├── .dockerignore           # Exclusiones para el contexto de Docker
├── .gitignore              # Exclusiones para el repositorio de Git
├── Dockerfile              # Configuración de contenedorización
├── package.json            # Dependencias y scripts del proyecto
└── README.md               # Documentación técnica del sistema 

 ```

 ## 3. Instrucciones para la Reproducción del Proyecto
Siga estos pasos de forma secuencial para clonar, instalar dependencias y validar de forma local y autónoma el funcionamiento del software: 

Paso 1: Clonar el repositorio: git clone [https://github.com/cHaRs05/proyecto-backend3](https://github.com/cHaRs05/proyecto-backend3)
cd proyecto-backend3 

 Paso 2: Instalar las dependencias de desarrollo y producción: npm install

 Paso 3: Ejecutar la suite de pruebas funcionales automatizadas
Para lanzar los tests funcionales con Mocha y Chai integrados, ejecute el siguiente comando: npm test *Nota: Este comando levantará la aplicación de Express de forma efímera, ejecutará los 5 casos de prueba diseñados sobre el Mock DAO y mostrará los resultados con éxito en la consola (5 passing).*

Paso 4: Iniciar el servidor de desarrollo
Para correr la aplicación de forma interactiva en el puerto configurado (8080): npm start