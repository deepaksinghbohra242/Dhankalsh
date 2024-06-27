
# Dhankalash : A community based loan system

## Overview

This project consists of a collection of Spring Boot microservices and a front-end application built with React, Redux, and Tailwind CSS. It includes the following components:
- `securityjwt`: Handles authentication and security.
- `contributionsvc`: Manages contributions.
- `loansvc`: Manages loans.
- `membersvc`: Manages member information.
- `frontend`: The user interface built with React, Redux, and Tailwind CSS.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Technologies Used](#technologies-used)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Running the Microservices](#running-the-microservices)
6. [Running the Frontend](#running-the-frontend)
7. [API Documentation](#api-documentation)
8. [Development Workflow](#development-workflow)


## Project Structure

```
microservices-project/
│
├── securityjwt/
│   └── src/
│       └── main/
│           └── java/com/example/securityjwt/
│               └── (Java files for security and authentication)
├── contributionsvc/
│   └── src/
│       └── main/
│           └── java/com/example/contributionsvc/
│               └── (Java files for contributions management)
├── loansvc/
│   └── src/
│       └── main/
│           └── java/com/example/loansvc/
│               └── (Java files for loans management)
├── membersvc/
│   └── src/
│       └── main/
│           └── java/com/example/membersvc/
│               └── (Java files for member management)
├── frontend/
│   └── src/
│       └── components/
│       └── redux/
│       └── styles/
│       └── (React components, Redux state management, and Tailwind CSS styles)
├── README.md
└── (Other project files and configuration)
```

## Technologies Used

### Backend:
- **Spring Boot**: To create RESTful APIs for each microservice.
- **Spring Security with JWT**: For secure authentication and authorization.
- **Spring Data JPA**: For data persistence and database interactions.
- **SQL Database**: For data storage and management.

### Frontend:
- **React**: For building the user interface.
- **Redux**: For state management across the React components.
- **Tailwind CSS**: For styling the application.
- **Axios**: For making API requests to the backend services.

### Development Tools:
- **Visual Studio Code**: For front-end development.
- **IntelliJ IDEA**: For back-end development.
- **Postman**: For API testing and integration.
- **GitHub**: For version control and collaboration.

## Prerequisites

To run this project, you need to have the following installed:
- **Java 17 or higher**
- **Maven 3.6 or higher**
- **Node.js 14 or higher**
- **npm or Yarn**
- **SQL Database** (e.g., MySQL, PostgreSQL)

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/microservices-project.git
cd microservices-project
```

### Set Up Each Microservice

Navigate to each microservice directory (`securityjwt`, `contributionsvc`, `loansvc`, `membersvc`) and follow these steps:

1. **Configure Database**: Set up your database and update the `application.properties` or `application.yml` file with your database credentials.

2. **Build the Project**:
   ```bash
   mvn clean install
   ```

### Set Up the Frontend

Navigate to the `frontend` directory and follow these steps:

1. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Configure Environment Variables**: Create a `.env` file to configure your API endpoints and other environment variables required by your React app.

## Running the Microservices

Each microservice can be started independently by navigating to its directory and running:

```bash
mvn spring-boot:run
```

Alternatively, you can run them from your IDE (IntelliJ IDEA or similar) by right-clicking the main class and selecting `Run`.

Ensure that each microservice is running on a different port to avoid conflicts. Ports can be configured in the `application.properties` or `application.yml` file.

## Running the Frontend

To start the React application, navigate to the `frontend` directory and run:

```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`.

## API Documentation

API endpoints for each microservice can be tested using Postman or any other API testing tool. Detailed API documentation is available within each microservice’s directory, typically in the form of Swagger documentation or README files.

To access Swagger documentation (if configured), navigate to `http://localhost:<port>/swagger-ui.html` for each running microservice.

## Development Workflow

1. **Code Changes**: Make your changes in the respective microservice or frontend.
2. **Testing**: Use Postman to test API endpoints and browser tools for front-end testing.
3. **Commit Changes**: Commit your changes to GitHub using:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin branch-name
   ```
4. **Pull Requests**: Create a pull request for your changes to be reviewed and merged.


