# ToDoApp

ToDoApp is a task management application built using the **MEN stack** (MongoDB, Express.js, Node.js). This API allows users to manage tasks efficiently with features like authentication, CRUD operations, and robust error handling.

## Features
- User authentication (Register/Login with JWT)
- Create, read, update, and delete tasks
- Secure API endpoints with token-based authentication
- Scalable database design

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Tools:** Postman, GitHub

## API Documentation

### Authentication
- **Type:** Bearer Token (JWT)
- **Header:** `Authorization: Bearer <token>`

### User Routes

#### Register User
- **Endpoint:** `POST /auth/register`
- **Request:**
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```
- **Response:**
```json
{
  "message": "User registered successfully",
  "token": "<JWT_TOKEN>"
}
```

#### Login User
- **Endpoint:** `POST /auth/login`
- **Request:**
```json
{
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```
- **Response:**
```json
{
  "message": "Login successful",
  "token": "<JWT_TOKEN>"
}
```

### Task Management Routes

#### Get All Tasks
- **Endpoint:** `GET /tasks`
- **Headers:**
```json
{
  "Authorization": "Bearer <token>"
}
```
- **Response:**
```json
[
  {
    "id": "1",
    "title": "Complete project",
    "description": "Finish the API development",
    "status": "pending"
  }
]
```

#### Create a Task
- **Endpoint:** `POST /tasks`
- **Request:**
```json
{
  "title": "Write documentation",
  "description": "Complete API docs for ToDoApp"
}
```
- **Response:**
```json
{
  "message": "Task created successfully",
  "task": {
    "id": "2",
    "title": "Write documentation"
  }
}
```

#### Update a Task
- **Endpoint:** `PUT /tasks/{id}`
- **Request:**
```json
{
  "title": "Update Readme",
  "status": "completed"
}
```
- **Response:**
```json
{
  "message": "Task updated successfully"
}
```

#### Delete a Task
- **Endpoint:** `DELETE /tasks/{id}`
- **Response:**
```json
{
  "message": "Task deleted successfully"
}
```

### Error Handling
- **400**: Bad Request
- **401**: Unauthorized
- **403**: Forbidden
- **404**: Not Found
- **500**: Internal Server Error

