<div align="center">
  <h1="center">NodeJS basic CRUD API</h1>
</div>

### This project is a Node.js and Express-based Product CRUD application that I built for practice by following a YouTube tutorials. The main goal of the project was to improve my understanding of backend development, RESTful API design, and how server-side applications interact with a database.

### The application allows users to create, read, update, and delete product records using a simple and well-structured API. It includes essential backend features such as routing, controllers, middleware, environment variables, and organized project structure. The app also follows REST principles and provides clear JSON responses and proper error handling. Building this project helped me strengthen my skills in Node.js, Express, and backend architecture while gaining hands-on experience with building a complete CRUD system.

### Built with

- [![Node][Node.js]][Node-url]
- [![Express][Express.js]][Express.js-url]
- [![MongoDB][MongoDB]][MongoDB-url]
- [![Mongoose][Mongoose]][Mongoose-url]

## Getting started

### Prerequisites

- node.js: [Node.js download page](https://nodejs.org/en/download)

### Installation

1. Clone the repo
   ```bash
   git clone https://github.com/Pasindu-himansa/basic-crud-backend-node.git
   ```
2. Step into the project
   ```bash
   cd basic-crud-backend-node
   ```

### Environment variables setup

#### Server side

1. Create a `.env` file in root folder
   ```
   New-Item -Path . -Name ".env" -ItemType "File"
   ```
2. Open the `.env` file and update the variables

   ```
   ## database configurations

   MONGO_URL=<URI for your mongodb database>
   ```

### Start the project using terminal

1. Install root NPM packages
   ```bash
   npm run install
   ```
2. Start the server
   ```bash
   npm run dev
   ```

## Documentations

- [Postman API documentation](https://documenter.getpostman.com/view/48948430/2sB3dLVsCa)

## Contact

Email: [subasinghe.info@gmail.com](mailto:subasinghe.info@gmail.com) | LinkedIn: [Pasindu Subasinghe](https://www.linkedin.com/in/pasindu-subasinghe/)

<!-- MARKDOWN LINKS & IMAGES -->

[Node.js]: https://img.shields.io/badge/Node.js-12A952?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[Express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express.js-url]: https://expressjs.com/
[MongoDB]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
