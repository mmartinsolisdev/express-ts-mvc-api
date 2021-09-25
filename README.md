
# Simple CRUD Api with NodeJs + ExpressJs + Typescript and MongoDB.

CRUD MVC Api in NodeJs developed with Typescript using ExpressJs framework, mongoose and MongoDB.

* [ExpressJS](https://expressjs.com/) - Web framework for NodeJs
* [Mongoose](https://mongoosejs.com/) - ORM Library for MongoDB
* [Nodemon](https://nodemon.io/) - Used for hot reload.


## Requeriments
Install Nodejs environment in your O.S. - https://nodejs.org/en/

This project connects to a database hosted in Mongo Atlas, but you can install MongoDB on your PC and use your own database locally or create an account at Mongo Atlas.  

Use [Mongo Atlas](https://expressjs.com/)  
Download [MongoDB](https://www.mongodb.com/try/download/community)

## Project setup installation

Install project dependencies, from the root path of the project run in terminal:

```bash
  npm i
```

## Environment variables

To run this project, you will need to add the following environment variables to the `.env` file.

```bash
PORT=port
DB_NAME=databaseName
DB_USER=databaseUser
DB_PASS=databasePass
```

The `.env` file must be in the root path of the project.


## Deployment

**Development**

To run project in development mode execute in terminal:

```bash
  npm run dev
```

**Production**

To generate the project files for production, run the command:

```bash
  npm run build
```
The production folder will be generated in the root path of the project. The name of the folder will be **dist**.
