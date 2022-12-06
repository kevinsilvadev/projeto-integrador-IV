FROM 3.8.6-openjdk-11

USER root

WORKDIR /app

COPY . .

RUN mvn clean install

CMD mvn spring-boot:run