## Student Management Application

This repository contains a student management application with a Spring Boot backend and a React frontend.

### Project Structure

* **backend/studentManagement:** Backend API built with Spring Boot
* **frontend/studentManagement:** Frontend application built with React.

### Technologies Used

* Backend: `Spring Boot`, `Java`, `JPA`, `Hibernate`, `MySQL`
* Frontend: `React`, `Material UI`

### Installation and Setup

Set Up MySQL in dockerized container

   ```
    docker run --name mysqldb  -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=studentmanagement -d mysql
   ```
Check if the docker container is running
**Backend:**

1. Install Java 17 or later.
2. Install Maven.
3. Clone this repository.
4. Open a terminal and navigate to the `backend/studentManagement` directory.
5. Run the following command to install dependencies:
    ```
    mvn clean install
    ```
6. Run the application using Spring Boot:
    ```
    mvn spring-boot:run
    ```
7. The application will be available at http://localhost:8080/

**Frontend:**

1. Install Node.js 16 or later.
2. Install yarn or npm.
3. Clone this repository.
4. Open a terminal and navigate to the `frontend/webui` directory.
5. Install dependencies:
    ```
    yarn install
    ```
    or
    ```
    npm install
    ```
6. Start the development server:
    ```
    yarn start
    ```
    or
    ```
    npm start
    ```
7. The application will be available at http://localhost:3000


