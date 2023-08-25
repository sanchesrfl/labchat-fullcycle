# Use a base image  Alpine Linux
FROM alpine:latest

# Instala o OpenJDK 17 
RUN apk add --no-cache openjdk17

# Copia a build do back end
COPY ./target/LABchat-0.0.1-SNAPSHOT.jar  /app/LABchat-0.0.1-SNAPSHOT.jar

# Setta o diretorio de trabalho
WORKDIR /app

# Define comando execução do container
CMD java -jar LABchat-0.0.1-SNAPSHOT.jar

# Expõe a porta do container para o host
EXPOSE 8080