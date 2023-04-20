# S3 Bucket File Upload and Delete

In this document, we will discuss the process of uploading and deleting files from an S3 bucket using the AWS SDK.

It consists following layers:-

- routes
- controllers
- services

Along with above main layers, it also contains various other sub-layers like:-

- constants
- lib
- utils

## Installation

- Pre-requisites
  Before proceeding with the instructions, you need to have an AWS account and an S3 bucket created.

  Step 1: Set up AWS credentials:

  You need to set up AWS credentials for authentication before uploading or deleting files. You can either use the AWS CLI to set up the credentials or manually configure them by creating a new access key and secret access key in the IAM console.

  Step 2: Create an S3 bucket:

  If you don't have an S3 bucket, you can create one by following the instructions provided on the AWS documentation.

  
  Clone the project by copying below mentioned command into your directory :-

  ```sh
  git clone https://gitlab.com/skisme4u/expressjs-boilerplate.git
  ```

  Change directory to ems by typing below mentioned command :-

  ```sh
  cd expressjs-boilerplate
  ```

  Now run below mentioned command to install neccessary dependencies into your project :-

  ```sh
  npm install
  ```

  ## Configuring the Environment

  In order to properly run the system, you have to first configure `.env` file as per the guidelines given in `example.env` or as per your project requirement.

  ## Important

  Install nodemon as a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development. Install it using below command :-

  ```sh
  npm install -g nodemon
  ```

  ## Executing the server

  In order to start the server to work, you can execute the command which is mentioned below :-

  - Run the app(For development) by

    ```
    npm run dev
    ```

  - Run the app by(For production)

    ```
    npm start
    ```

  This would execute the code from ems/bin/www directory

## Makefile Commands

1. Display linting for all files

   ```sh
   make all
   ```

2. Autofix fixable errors for linting for all files

   ```sh
   make all_fix
   ```

3. Display linting for staged files

   ```sh
   make lint
   ```

4. Autofix fixable errors for linting in staged files

   ```sh
   make lint_fix
   ```
