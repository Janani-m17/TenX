# TenX - Task Management System

## Overview
TenX is a task management system designed to help users efficiently organize, track, and manage their tasks. Built with **React JS** for the frontend and **Spring Boot** for the backend, TenX provides a seamless and secure task management experience. The system incorporates **JWT token authentication** for secure user sessions and **Bcrypt** for password hashing, ensuring data security.

## Features
- **User Authentication & Authorization**  
  - Secure user login and registration using JWT tokens.
  - Passwords are securely hashed using Bcrypt.
  
- **Task Management**  
  - Users can create, update, delete, and view tasks.
  - Tasks are associated with logged-in users for personalized management.

- **Intuitive UI & Responsive Design**  
  - Built with React JS for a smooth and user-friendly experience.
  - Styled components and responsive design for accessibility across devices.

- **Protected Routes**  
  - Uses React Router with authentication-based navigation protection.

---
## Tech Stack
### Frontend (React JS)
- React.js (Vite for fast development)
- React Router for navigation
- Context API for state management
- Axios for API calls
- Protected Routes for secure navigation

### Backend (Spring Boot)
- Spring Boot for backend REST APIs
- Spring Security & JWT for authentication
- Bcrypt for password hashing
- Hibernate & JPA for database interaction

### Database
- MySQL (or PostgreSQL) for data storage

### Prototype


---
## Folder Structure
### Backend (Spring Boot)
```
TenX Backend
│── src
│   ├── main/java/com/springboot/TMS
│   │   ├── config          # Security and JWT configuration
│   │   ├── controller      # REST controllers
│   │   ├── dto             # Data Transfer Objects
│   │   ├── entity          # Database entities
│   │   ├── repository      # Data access layer
│   │   ├── service         # Business logic
│   │   ├── TmsApplication.java  # Main application file
│── pom.xml  # Dependencies
```

### Frontend (React JS)
```
TenX Frontend
│── frontend
│   ├── public
│   ├── src
│   │   ├── Pages          # Main application pages
│   │   ├── assets         # Images and static assets
│   │   ├── components     # Reusable components
│   │   ├── styles         # Styling files
│   │   ├── App.jsx        # Main React component
│   │   ├── Auth.js        # Authentication logic
│   │   ├── ProtectedRoute.jsx  # Route protection
│   │   ├── main.jsx       # Application entry point
│── package.json  # Dependencies
│── vite.config.js  # Vite configuration
```

---
## Installation & Setup
### Backend
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/tenx-backend.git
   cd tenx-backend
   ```
2. Configure the database in `application.properties`.
3. Build and run the application:
   ```sh
   mvn spring-boot:run
   ```

### Frontend
1. Clone the repository:
   ```sh
   git clone https://github.com/TenX/tenx-frontend.git
   cd tenx-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

---
## API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Login user and return JWT |
| GET | `/tasks/my` | Get all tasks for logged-in user |
| POST | `/tasks/create` | Create a new task |
| PUT | `/tasks/update/{id}` | Update a task by ID |
| DELETE | `/tasks/delete/{id}` | Delete a task by ID |

---
## Contributors
