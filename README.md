# Simple Task Manager

Simple Task Manager is a web application designed to help users manage their daily tasks efficiently. Built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js), the app provides user-friendly features for managing tasks, tracking their importance, and toggling completion status.

## Features

### User Authentication

- **Signup**: Create a new user account.
- **Login**: Access the application securely with your credentials.

### Task Management

- **Add Task**: Create a new task with a title and description.
- **Delete Task**: Remove unwanted or completed tasks.
- **Update Task**: Modify the title or description of an existing task.
- **Mark as Important**: Highlight tasks as important or remove the mark.
- **Toggle Completion**: Switch tasks between "Complete" and "Incomplete" status.

### Dynamic UI

- All updates reflect in real-time, providing a seamless user experience.

## Tech Stack

### Frontend

- **React.js**: For building the user interface.
- **React Icons**: For providing a visually appealing icon set.

### Backend

- **Node.js**: For creating the server and handling application logic.
- **Express.js**: For building RESTful APIs.

### Database

- **MongoDB**: For storing user and task data.

### Authentication

- **JWT (JSON Web Token)**: For securing user login and managing sessions.

## API Endpoints

| **Method** | **Endpoint**                     | **Description**                    |
| ---------- | -------------------------------- | ---------------------------------- |
| `POST`     | `/api/v1/auth/signin`            | Register a new user                |
| `POST`     | `/api/v1/auth/login`             | Authenticate a user                |
| `GET`      | `/api/v2/allTasks`               | Fetch all tasks for user           |
| `GET`      | `/api/v2/impTasks`               | Fetch all imp tasks for user       |
| `GET`      | `/api/v2/completeTasks`          | Fetch all completed tasks of user  |
| `GET`      | `/api/v2/incompleteTasks`        | Fetch all incomplete tasks of user |
| `POST`     | `/api/v2/createTask`             | Add a new task                     |
| `PUT`      | `/api/v2/updateTask/:id`         | Update a task                      |
| `PUT`      | `/api/v2/updateImpTask/:id`      | Toggle important status            |
| `PUT`      | `/api/v2/updateCompleteTask/:id` | Toggle complete status             |
| `DELETE`   | `/api/v2/deleteTask/:id`         | Delete a task                      |
