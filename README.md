🏨 Hotel Management Project
Hotel Management System
This is a basic Hotel Management System built using Node.js, Express, and MongoDB. It provides RESTful APIs for managing hotel menu items and customer data.

Features
Welcome Page: Greet users with a welcome message.
Customer Management: Create and retrieve customer data.
Menu Management: Create and retrieve menu items.
Tech Stack
Node.js: Backend server.
Express: Web framework for Node.js.
MongoDB: Database for storing data.
Mongoose: MongoDB ODM for schema modeling.
Prerequisites
Node.js (v14 or higher)
MongoDB
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/hotel-management.git
Navigate to the project directory:

bash
Copy code
cd hotel-management
Install dependencies:

bash
Copy code
npm install
Set up MongoDB:

Ensure MongoDB is running locally.
Update the MongoDB connection string in db.js.
Start the server:

bash
Copy code
npm start
The server will run on http://localhost:3000.

API Endpoints
1. Welcome Endpoint
GET /
Description: Returns a welcome message.
Response:
json
Copy code
{
  "message": "Welcome to my hotel, how can I help you?"
}
2. Create Customer
POST /person
Description: Adds a new customer.
Request Body:
json
Copy code
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890"
}
Response:
json
Copy code
{
  "_id": "12345",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890"
}
3. Get All Customers
GET /person
Description: Retrieves a list of all customers.
Response:
json
Copy code
[
  {
    "_id": "12345",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890"
  }
]
4. Get All Menu Items
GET /menu
Description: Retrieves a list of all menu items.
Response:
json
Copy code
[
  {
    "_id": "67890",
    "name": "Pizza",
    "price": 15,
    "description": "Delicious cheese pizza"
  }
]
5. Create Menu Item
POST /menu
Description: Adds a new menu item.
Request Body:
json
Copy code
{
  "name": "Pasta",
  "price": 12,
  "description": "Creamy Alfredo pasta"
}
Response:
json
Copy code
{
  "_id": "67890",
  "name": "Pasta",
  "price": 12,
  "description": "Creamy Alfredo pasta"
}
Error Handling
If an error occurs during any request, the API will respond with:

json
Copy code
{
  "error": "Internal Server Error"
}
Project Structure
go
Copy code
hotel-management/
├── models/
│   ├── Person.js
│   └── MenuItem.js
├── db.js
├── app.js
├── package.json
└── README.md
License
This project is licensed under the MIT License - see the LICENSE file for details.
![Screenshot 2024-11-15 010051](https://github.com/user-attachments/assets/b1a01cea-2aa9-439a-969c-bfd36b562d91)
