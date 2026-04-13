FROM maven:3.9-eclipse-temurin-21-alpine AS builder

WORKDIR /app

COPY target/demo-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

CMD [ "java","-jar","app.jar" ]