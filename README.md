# Sistema de Adopciones - Backend III

Este proyecto consiste en un módulo funcional de adopciones desarrollado de manera profesional bajo una arquitectura de capas, incluyendo la cobertura total de pruebas funcionales y configuraciones optimizadas para su empaquetado en contenedores Docker.

## URLs del Proyecto
* **Repositorio de la Entrega:** https://github.com/cHaRs05/proyecto-backend3.git
* **URL Pública de la Imagen DockerHub:** https://hub.docker.com/r/charssss/adopciones-backend

## Pruebas Funcionales
La suite de pruebas automatizadas utiliza un Mock en memoria para aislar dependencias externas y valida el comportamiento del router `adoption.router.js` frente a casos de éxito, errores y validación de campos obligatorios.

Para ejecutar las pruebas localmente:
```bash
npm test