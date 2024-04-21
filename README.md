# GraphQL-RestAPI-BookApp

This Node.js application was created during one of the university classes. It demonstrates the integration of both RESTful API and GraphQL functionalities for managing simple Book data stored in MongoDB.

## Setup Instructions

Below is step by step instruction on how to run this project on a local machine:

1. **Clone the Repository:** Start by cloning this repository to your local machine using the following command:

```
git clone https://github.com/Dyspersja/GraphQL-RestAPI-BookApp.git
```

Alternatively, if you don't have Git CLI installed on your computer, you can download the repository by navigating to the **<> Code** tab and selecting **Download ZIP**.

2. **Install Dependencies:** Navigate to the project directory and install necessary dependencies using **npm nstall**:

```
cd GraphQL-RestAPI-BookApp
npm install
```
**NOTE!** Please ensure that Node.js is installed on your computer. The project will not be able to run without it.

3. **Start MongoDB Server:** Application comunicates with MongoDB to store the Book data and is needed to run this application.

**Using Docker (Optional)**: If you have Docker installed, you can use the provided scripts to set up and manage a MongoDB container. Run the following commands:

<!-- c language just for comment styling -->
```c
npm run docker:mongo:build   // Build the MongoDB Docker image
npm run docker:mongo:start   // Start the MongoDB container
```

After launching the Docker container, a MongoDB data directory named *mongo_data/* will be automatically generated within the project directory. Later database files will be stored within this directory.

**Without Docker**: If you don't have Docker installed or prefer to run MongoDB directly, Start fresh MongoDB server on default MongoDB port 27017.

4. **Start the Server**: Launch the application by running the following command:

```
npm start
```

Now that the application is up and running, you can navigate to [http://localhost:8000](http://localhost:8000) to access a very simple interface built using EJS, 
or visit [http://localhost:8000/api-docs](http://localhost:8000/api-docs) to access the Swagger interface for managing the REST API, 
or [http://localhost:8000/graphql](http://localhost:8000/graphql) to open the graphical interface for GraphQL operations.

## Features
<!-- TODO: finish Features -->
<!-- Application demonstrates GraphQL/Rest API integration for managing book data, with MongoDB, Swagger, and graphical interface. -->
