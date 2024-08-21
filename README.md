
# Social Network API

## Description

This project is a RESTful API built for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. The application uses MongoDB for data storage, Express.js for routing, and Mongoose as the ODM (Object Data Modeling) library.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Models](#models)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

To install and run this project locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/jerrietkuo/SocialNetworkAPI
   ```
2. **Navigate to the Project Directory:**
   ```bash
   cd social-network-api
   ```
3. **Install Dependencies:**
   ```bash
   npm install
   ```
4. **Ensure MongoDB is Running:**  
   Make sure MongoDB is installed and running on your local machine.

5. **Start the Application:**
   ```bash
   npm start
   ```

The server will start on `http://localhost:3001` by default.

## Usage

Once the server is running, you can interact with the API using a tool like [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/).

### Walkthrough Video

A walkthrough video demonstrating the API's functionality is available [here](./assets/demovideo.webm).

## API Routes

### User Routes

- **GET /api/users**  
  Retrieve all users.

- **GET /api/users/:userId**  
  Retrieve a single user by their ID.

- **POST /api/users**  
  Create a new user.  
  Example request body:
  ```json
  {
    "username": "exampleuser",
    "email": "user@example.com"
  }
  ```

- **PUT /api/users/:userId**  
  Update a user by their ID.

- **DELETE /api/users/:userId**  
  Delete a user by their ID. Associated thoughts are also deleted.

- **POST /api/users/:userId/friends/:friendId**  
  Add a friend to a user's friend list.

- **DELETE /api/users/:userId/friends/:friendId**  
  Remove a friend from a user's friend list.

### Thought Routes

- **GET /api/thoughts**  
  Retrieve all thoughts.

- **GET /api/thoughts/:thoughtId**  
  Retrieve a single thought by its ID.

- **POST /api/thoughts**  
  Create a new thought. The thought's `_id` will be pushed to the associated user's `thoughts` array field.  
  Example request body:
  ```json
  {
    "thoughtText": "This is an example thought.",
    "username": "exampleuser",
    "userId": "60f8a9b9c75b4a72bc2a807a"
  }
  ```

- **PUT /api/thoughts/:thoughtId**  
  Update a thought by its ID.

- **DELETE /api/thoughts/:thoughtId**  
  Delete a thought by its ID.

- **POST /api/thoughts/:thoughtId/reactions**  
  Add a reaction to a thought.  
  Example request body:
  ```json
  {
    "reactionBody": "This is an example reaction.",
    "username": "exampleuser"
  }
  ```

- **DELETE /api/thoughts/:thoughtId/reactions/:reactionId**  
  Remove a reaction from a thought by its reaction ID.

## Models

### User Model

- **username** (String, unique, required, trimmed)
- **email** (String, required, unique, must match a valid email address)
- **thoughts** (Array of _id values referencing the Thought model)
- **friends** (Array of _id values referencing the User model - self-reference)

**Virtuals:**

- `friendCount`: Retrieves the length of the user's `friends` array field on query.

### Thought Model

- **thoughtText** (String, required, 1-280 characters)
- **createdAt** (Date, default: current timestamp, getter method for formatting)
- **username** (String, required)
- **reactions** (Array of nested documents created with the `reactionSchema`)

**Virtuals:**

- `reactionCount`: Retrieves the length of the thought's `reactions` array field on query.

### Reaction Schema

- **reactionId** (ObjectId, default: new ObjectId)
- **reactionBody** (String, required, max 280 characters)
- **username** (String, required)
- **createdAt** (Date, default: current timestamp, getter method for formatting)

**Note:** The `Reaction` is a subdocument schema used within the Thought model.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, feel free to reach out at [Jerriet](mailto:jerrietkuo@gmail.com).
