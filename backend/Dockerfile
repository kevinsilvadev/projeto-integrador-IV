FROM maven:4.0.0-openjdk-11

WORKDIR /app

COPY . .

RUN mvn clean install

CMD mvn spring-boot:run