# 1. Uso una imagen base oficial de Node.js ligera para optimizar espacio y seguridad
FROM node:20-alpine

# 2. Defino el directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copio solo los archivos de dependencias primero para aprovechar el sistema de capas de Docker
COPY package*.json ./

# 4. Instalamos solo las dependencias de producción para mantener la imagen limpia y liviana
RUN npm install --only=production

# 5. Copiamos el resto del código fuente del proyecto al contenedor
COPY src/ ./src/

# 6. Exponemos el puerto en el que corre nuestra app de Express
EXPOSE 8080

# 7. Defino la variable de entorno por defecto para producción
ENV NODE_ENV=production

# 8. Comando para arrancar el servidor cuando el contenedor inicie
CMD ["node", "src/app.js"]