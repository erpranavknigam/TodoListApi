
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

The Task Management API provides the following functionalities:

* Create a new task
* Update an existing task
* Delete a task
* Retrieve a task by ID
* Retrieve all tasks (Set Limit and Page)

All operations are protected and require a valid authentication token.

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
