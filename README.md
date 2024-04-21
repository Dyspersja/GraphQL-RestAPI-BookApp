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
Below is a list of the most important features of the application along with a description of how they work:

### Simple EJS interface
After opening the application in the browser [http://localhost:8000](http://localhost:8000), we are greeted with the following view:

![image](https://github.com/Dyspersja/GraphQL-RestAPI-BookApp/assets/146620220/e8af6c79-9d41-4882-a8cc-83ecdd3aa24a)

At the top, there is a list of all books in the database, each with two buttons for deleting and editing. And below that, you'll find a form for creating a new book.

![image](https://github.com/Dyspersja/GraphQL-RestAPI-BookApp/assets/146620220/b8cdc6cb-9348-4871-8b0b-a1a4611c8640)  
![image](https://github.com/Dyspersja/GraphQL-RestAPI-BookApp/assets/146620220/6b9e15cf-2817-4bcd-90c9-423ccb126c23)

After entering the values for the new book in the fields and clicking the OK button, it will be added to the list.

![image](https://github.com/Dyspersja/GraphQL-RestAPI-BookApp/assets/146620220/59706b17-9a62-4106-a7fc-30af744016e1)

After clicking 'Edit,' user is directed to a new page for editing the selected book.

![image](https://github.com/Dyspersja/GraphQL-RestAPI-BookApp/assets/146620220/7ea532e2-68dc-423b-90b6-1f33d5e4258d)  
![image](https://github.com/Dyspersja/GraphQL-RestAPI-BookApp/assets/146620220/a3d9fd52-0c39-4241-99db-dc86ed5a18d4)

After entering new data and clicking the OK button, the user is redirected back to the list view of books with the updated information in the edited book.

![image](https://github.com/Dyspersja/GraphQL-RestAPI-BookApp/assets/146620220/0d3bf402-9532-41ec-a6ad-0d5d902e6ead)

After clicking the X button next to a book, that book will be deleted.

### GraphQL with Ruru

Below is the Ruru interface for GraphQL, check it out at [http://localhost:8000/graphql](http://localhost:8000/graphql).

![image](https://github.com/Dyspersja/GraphQL-RestAPI-BookApp/assets/146620220/250dbe10-1344-4e46-8dd2-0012ed4fd405)

It allows to test and execute queries in the dedicated GraphQL Query Language.

![image](https://github.com/Dyspersja/GraphQL-RestAPI-BookApp/assets/146620220/3b8ad85e-f878-4971-a3bc-6ad7b343b698)

Above is an example for the 'getBooks' query. On the left side, you can select the fields that interest you and should be included in the response. 
In the middle, the constructed query is presented, which can also be manually edited. Upon clicking the arrow, you'll receive the response on the right side.

![image](https://github.com/Dyspersja/GraphQL-RestAPI-BookApp/assets/146620220/c8e94857-f3a2-4427-b3b9-21079ab82c81)

Here is an example for the 'getBook' query. On the left side, the required ID of the book was entered. In the middle, the query is constructed with the ID inserted into the correct place. On the right side, you can see the result for the created query.

![image](https://github.com/Dyspersja/GraphQL-RestAPI-BookApp/assets/146620220/a75e9092-b9d3-413e-9e47-7ca2e5080bb1)

Example of a mutator for creating a new book with the provided values for title and author.

![image](https://github.com/Dyspersja/GraphQL-RestAPI-BookApp/assets/146620220/5421d154-35d5-424b-80bc-63601a8e712e)

Example of an update for a book with the specified ID and the new author, along with the result showing the new author and the old unchanged title.

![image](https://github.com/Dyspersja/GraphQL-RestAPI-BookApp/assets/146620220/db2150a3-c9ea-4c2c-8522-06ae6c7f5b67)

Example for deleting a book with given ID.

### Rest API with Swagger

When navigating to the path [http://localhost:8000/api-docs](http://localhost:8000/api-docs), we will be greeted by the Swagger's graphical interface.

![image](https://github.com/Dyspersja/GraphQL-RestAPI-BookApp/assets/146620220/a5426650-e7ce-4bc9-9dab-602745e58bd3)  
![image](https://github.com/Dyspersja/GraphQL-RestAPI-BookApp/assets/146620220/eeb93b52-3111-40ef-abcd-d69715dea730)

After expanding the GET operation for /api/books/, you'll see a 'Try it out' button. Upon clicking it, an 'Execute' button will appear, allowing you to send a request to the application.

![image](https://github.com/Dyspersja/GraphQL-RestAPI-BookApp/assets/146620220/5d9ee758-f4cb-4db7-b4ad-80fc613367a9)

After performing the operation, we receive a response containing a list of all books in the database as JSON.

![image](https://github.com/Dyspersja/GraphQL-RestAPI-BookApp/assets/146620220/83b65728-714b-4a91-9338-faa57fe1072d)

For the 'POST' operation, which adds a new item, we need to specify a body parameter where we will pass the title and author for the new book.

![image](https://github.com/Dyspersja/GraphQL-RestAPI-BookApp/assets/146620220/2f6f5eb1-44b7-4f7f-be19-b0e8ef6bb706)

In the response, we receive the newly created book along with its newly assigned ID.

![image](https://github.com/Dyspersja/GraphQL-RestAPI-BookApp/assets/146620220/c25b7de2-a6a6-48ac-ac20-4e4d4c98138e)

For the 'GET' operation for a single book, we need to provide its ID as a parameter.

![image](https://github.com/Dyspersja/GraphQL-RestAPI-BookApp/assets/146620220/d8686e9a-6ba8-4d9f-aa50-f00c12de308b)

The response will include the book with the specified ID.

![image](https://github.com/Dyspersja/GraphQL-RestAPI-BookApp/assets/146620220/103c99d9-31e3-441a-9901-ac6a3771373b)

Next, for the 'PUT' operation, which is used for updating data, we need to provide the ID in the parameters and in the body, 
specify the values we want to change. In this case, we are only changing the author, while the title remains the same as before.

![image](https://github.com/Dyspersja/GraphQL-RestAPI-BookApp/assets/146620220/06ed26ab-f354-4145-8fee-a399b07f6c7a)

The result of the operation that includes the book with the changed author and original title.

![image](https://github.com/Dyspersja/GraphQL-RestAPI-BookApp/assets/146620220/1bec9498-ac4f-4e3f-8694-c568f4e02167)

The 'DELETE' operation, used for deleting books, here the ID parameter is required.

![image](https://github.com/Dyspersja/GraphQL-RestAPI-BookApp/assets/146620220/99a6209a-7213-4347-b3c4-af9e86cfb723)

Here, the operation returns only a status code, in this case, 204 - No Content, indicating that there is no content present in the response body.
