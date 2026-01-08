# Student Survey Management System

## Overview
A **full-stack web application** that allows prospective students to submit campus survey feedback and provides administrative capabilities to **view, edit, and delete surveys**.  

This project demonstrates expertise in **Angular frontend development, RESTful Spring Boot backend, database integration, and full CRUD functionality**.  

---

## Key Features
- **Submit Surveys**: Users can fill out a survey form with required fields and optional comments.  
- **View Surveys**: Display all survey entries in a dynamic, responsive table.  
- **Edit & Delete Surveys**: Inline editing with modals and delete confirmation.  
- **Persistent Storage**: All survey data is stored in a MySQL database.  
- **REST API Integration**: Angular frontend communicates with Spring Boot backend via RESTful endpoints.  
- **Form Controls**: Checkboxes, radio buttons, dropdowns, date pickers, and input validation.  
- **Bootstrap Styling**: Responsive design with clean UI layout.  

---

## Technology Stack
| Layer | Technologies |
|-------|--------------|
| Frontend | Angular (Standalone Components), TypeScript, HTML5, CSS3, Bootstrap |
| Backend | Java 17, Spring Boot 3, REST API, JPA/Hibernate, Maven |
| Database | MySQL |
| Tools | Vite Angular runner, npm, Maven, WAR packaging |

---

## API Endpoints

| Method | Endpoint             | Description |
|--------|--------------------|-------------|
| GET    | `/api/surveys`      | Retrieve all surveys |
| POST   | `/api/surveys`      | Create a new survey |
| PUT    | `/api/surveys/{id}` | Update an existing survey |
| DELETE | `/api/surveys/{id}` | Delete a survey entry |

All endpoints return JSON and are consumed using Angular's `HttpClient`.

---

## Database Schema

```sql
USE survey_app;

CREATE TABLE surveys (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    street VARCHAR(100),
    city VARCHAR(50),
    state VARCHAR(50),
    zip VARCHAR(10),
    telephone VARCHAR(20),
    email VARCHAR(100),
    date_of_survey DATE,
    liked_most VARCHAR(255),
    interested_in VARCHAR(50),
    likelihood VARCHAR(20),
    comments TEXT
);
```
> ⚠️ Note: Make sure to update the **username** and **password** in `src/main/resources/application.properties` to match your local MySQL database before running the project.
> ⚠️ Database Configuration:
> 
> The project uses a MySQL database. Before running, open `src/main/resources/application.properties` and update the following fields:
> 
> ```properties
> spring.datasource.username=YOUR_DB_USERNAME
> spring.datasource.password=YOUR_DB_PASSWORD
> ```
> 
> Replace `YOUR_DB_USERNAME` and `YOUR_DB_PASSWORD` with your local database credentials.


## Run Project

### Backend
cd backend
mvn spring-boot:run

### Frontend
cd frontend
ng serve --open

## Author
**Sai Sanjana Kambalapally**
