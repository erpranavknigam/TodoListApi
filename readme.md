
# Task Management API

---------------------------------------------------------------------------------------

This repository provides an Express.js API for managing tasks. It includes routes for creating, updating, deleting, and retrieving tasks, with authentication required for each operation.

## Table of Contents

* [Overview](#overview)
* [Installation](#installation)
* [Usage](#usage)
* [API Endpoints](#api-endpoints)
* [Authentication](#authentication)

## Overview

The Task Management API offers the following functionalities:

### User Authentication

* Register a new user
* Log in an existing user

### Task Management

* Create a new task
* Update an existing task
* Delete a task
* Retrieve a task by ID
* Retrieve all tasks

All task management operations are protected and require a valid authentication token.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/erpranavknigam/TodoListApi.git
    ```
2. Navigate to project directory:
    ```bash
    cd your-repository-directory
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Set up environment variables:

    Create a `.env` file in the root directory and add the necessary environment variables (e.g., `SECRET_KEY` for authentication).

    ```bash
    PORT=5000
    MONGO_DB_URL=mongodb://localhost:27017/TaskManagerAPI
    JWT_SECRET=pranav111
    ```

    *Note: Modify the values according to your convenience and MongoDB URL.*

5. Start the server:
    ```bash
    npm start
    ```
    The server will start and listen on the port specified in your environment variables (default is usually 3000 but set to 5000 here; you can modify it in the `.env` file).

    ## Usage

    You can interact with the API using tools like curl, Postman, or by integrating with your frontend application.

    ## API Endpoints

    ### User Authentication
    
    * POST api/v1/auth/register

        * Description: Register a new user.
        * Request Body:
        ```
        {
        "username": "user",
        "email": "user@email.com"
        "password": "password"
        }
        ```
        * Response: Success or error message with a token

    * POST api/v1/auth/login

        * Description: Log in an existing user.
        * Request Body:
        ```
        {
        "email": "apc@email.com",
        "password": "password"
        }
        ```
        * Response: Authentication token 


    ### Task Management

    * POST api/v1/task/create

        * Description: Create a new task.
        * Request Body:
        ```
        {
        "task": "Task Title",
        "description": "Task Description"
        }
        ```
        * Authentication: Required

    * PUT api/v1/task/update/:id

        * Description: Update an existing task by ID.
        * Request Body:
        ```
        {
        "task": "Updated Title",
        "description": "Updated Description"
        }
        ```
        * URL Parameters:
            id - The ID of the task to update.

        * Authentication: Required

    * DELETE api/v1/task/delete/:id

        * Description: Delete a task by ID.
        * URL Parameters:
            id - The ID of the task to delete.

        * Authentication: Required

    * GET api/v1/task/getById/:id

        * Description: Retrieve a task by ID.
        * URL Parameters:
            id - The ID of the task to retrieve.
        * Authentication: Required

    * GET api/v1/task/getAll?limit=5&page=1

        * Description: Retrieve all tasks.
        * Query Parameters:
            * limit - Number of tasks to return per page (default is 10).
            * page - Page number to retrieve (default is 1).
        * Authentication: Required

    ## Authentication

    The API requires an authentication token for all task management operations. Tokens are obtained by logging in with valid credentials. Include a valid token in the Authorization header of your requests:

    ```
    Token: Bearer <your-token>
    ```

   ## Future Updates

    Following features can be implemented in future updates:

    * Progress Update: Add functionality to update and track the progress of tasks, enabling users to move tasks through various stages of completion.
    
    * Search by Progress: Implement a search feature to filter tasks based on their progress status, making it easier for users to view tasks at specific stages.
