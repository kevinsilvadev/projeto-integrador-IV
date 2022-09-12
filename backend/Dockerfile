FROM openjdk

WORKDIR /app

COPY target/backend-0.0.1-SNAPSHOT.jar  /app/backend.jar

ENTRYPOINT [ "java","-jar","backend.jar" ]

EXPOSE 8080