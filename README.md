# Ecommerce_Follow_Along

Project Overview:-
1.MERN Integration: Full-stack JavaScript development for seamless front-end and back-end communication.

2.REST APIs: Scalable endpoints for managing users, products, and orders.

3.Database Schema: Models for users, products, and orders, optimized for performance.

4.Backend Setup: Efficient routing and middleware handling with Express.js.

5.Authentication: Secure login and role-based access control using bcrypt and JWT.

6.Order Page:- -->Admin: View and manage all user orders.
               -->Users: Track personal order history and statuses.

7.Product Page: Interactive product catalog with search, filter, and details view.

8.Payment Gateway:Seamless integration with Stripe/PayPal for secure transactions, Handles payment success, failure, and refunds.


# Milestone 2 overview:-
>New Feature Added:

-->Login Page:
A user-friendly login page has been added, featuring:
Email and password validation.
A "Show/Hide Password" toggle for enhanced user experience.
Error handling for invalid email format and password length.
Loading state to indicate the process of authentication.
Navigation to a signup page for new users.

-->Technologies Used:
React (Frontend)
Tailwind CSS (Styling)
React Router (Routing)
Express.js (Backend)
Stripe/PayPal (Payment Gateway)

-->Installation & Setup:
Clone the repository.
Run npm install to install dependencies.
Start the development server with npm start.


# Milestone 3 - Backend Setup and Integration

## Overview
In this milestone, you will set up the foundational elements for your backend. You'll organize your backend code efficiently, configure a Node.js server to handle API requests, connect to MongoDB for data management, and implement basic error handling to ensure smooth server operation. By the end of this milestone, your application will be able to handle requests and store data in MongoDB with proper error feedback.

## Tasks

### 1. Backend Folder Structure 🗂️
- Create dedicated folders for organizing your backend code. This includes:
  - routes: Handles routing of incoming requests.
  - controllers: Contains the logic for handling requests.
  - models: Defines the structure and schema of your data (MongoDB).
  - middlewares: Used for functions that run during the request-response cycle (e.g., validation, logging).
  - utils: Utility functions that may be used across the backend code.
  
  Note: Terms like “middleware” and “utils” will be explored more in-depth as you progress in the course.

### 2. Server Setup 🖥️
- Use Node.js and Express to create the backend server.
- Configure the server to listen on a designated port (e.g., 5000 or 3000).
  
  Steps:
  - Install necessary dependencies like express using npm.
  - Create an Express app and set up a basic route to ensure your server is running.

### 3. Database Connection 💾
- Integrate MongoDB with your application to store and manage data.
  - Use the mongoose library to define schemas and models.
  - Connect the backend server to MongoDB and ensure the connection is successful.
  - Test database connection by saving a test document or retrieving data from a collection.

### 4. Error Handling ⚠️
- Implement basic error handling to help with debugging and user feedback.
  - Create a middleware to handle common errors (e.g., 404 for routes that don’t exist, 500 for server issues).
  - Ensure that error messages are clear and helpful for both the developer and the user.

### 5. Documentation 📖
- Update your README file to reflect the progress you've made in this milestone.
  - Provide instructions for setting up and running the backend server.
  - Document key components of the backend, such as how the server is structured, how MongoDB is integrated, and how to handle errors.

## Key Features 🛠️

- *Backend Folder Structure*: Organizing your code in a modular and maintainable way will make future development easier.
- *Node.js Server*: Setting up and configuring a server to handle incoming API requests.
- *MongoDB Integration*: Storing and retrieving data from a MongoDB database.
- *Error Handling*: Implementing basic error handling to ensure smooth debugging and user experience.

## Expected Outcome
By the end of this milestone, you will have:
- A well-structured backend with clear folder organization.
- A running Node.js backend server.
- A working MongoDB connection for data storage.
- Implemented basic error handling for better app stability.

## Mentor Guidance
During this milestone, your mentor will guide you through:
- Setting up the backend folder structure and files.
- Configuring the server and connecting to MongoDB.
- Writing and testing error-handling code.

# Milestone 4: User Management with File Uploads

This Node.js application demonstrates user creation, file uploads using Multer, and secure password management using bcrypt and JWT.

## Features

- **User Registration**: Securely create users with hashed passwords.
- **File Upload**: Upload user avatars with unique filenames.
- **JWT Authentication**: Generate and validate JSON Web Tokens.
- **Error Handling**: Robust error management using a custom ErrorHandler utility.

## Technologies Used

- **Node.js** with **Express.js**
- **Mongoose** for MongoDB
- **Multer** for file uploads
- **bcrypt.js** for password hashing
- **jsonwebtoken** for authentication

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB instance running
- `.env` file with the following variables:


# Milestone 5 -Adding SignUp Page

1. Created a Sign-Up Page in React.
2. Implemented form validation for:
      Name (required)
      Email (valid format required)
      Password (minimum 2 characters)
      Password Confirmation (must match password)

4. Used React Router for navigation.

# Milestone 6

## Project Overview
Milestone 6 expands on the knowledge gained in previous milestones, focusing on advanced backend development concepts. This milestone emphasizes API design, integration, and optimization while deepening the understanding of database interactions and server performance.

## Learning Objectives
- Build and document RESTful APIs.
- Implement user authentication and authorization.
- Explore advanced database operations and optimizations.
- Integrate external APIs and manage third-party services.
- Optimize backend performance and scalability.

## Prerequisites
- Completion of Milestone 5 or equivalent backend knowledge.
- Familiarity with JavaScript, Node.js, and Express.js.
- Understanding of JSON and basic database operations.

## Key Topics
1. **Advanced API Design**
   - RESTful principles and best practices.
   - Structuring APIs for scalability and maintainability.
   - Versioning and documentation of APIs.

2. **User Authentication and Authorization**
   - Implementing secure authentication mechanisms (e.g., JWT).
   - Role-based access control (RBAC).
   - Managing sensitive user data securely.

3. **Database Interactions**
   - Using ORMs like Sequelize or Mongoose for efficient data handling.
   - Performing complex queries and transactions.
   - Indexing and optimizing database performance.

4. **Integration with External APIs**
   - Fetching and processing data from third-party APIs.
   - Handling rate limits and error responses.
   - Implementing webhooks and real-time updates.

5. **Backend Optimization**
   - Analyzing and improving server response times.
   - Caching strategies (e.g., Redis or in-memory caching).
   - Load balancing and horizontal scaling.

## Tools and Technologies
- **Node.js**: Backend runtime environment.
- **Express.js**: Framework for building web applications.
- **MongoDB** or **PostgreSQL**: Database solutions for storage and queries.
- **Passport.js** or **Auth0**: Authentication libraries.
- **Redis**: Caching for performance optimization.
- **Postman**: For API testing and debugging.

## Deliverables
1. A well-documented, secure RESTful API.
2. User authentication and role-based access implementation.
3. Integration with at least one external API.
4. Demonstration of caching or other performance optimization techniques.
5. Comprehensive project documentation including setup, usage, and design rationale.

## Resources
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Guide](https://expressjs.com/)
- [Passport.js Documentation](http://www.passportjs.org/docs/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Redis Guide](https://redis.io/docs/)

## Evaluation Criteria
- API functionality and adherence to RESTful principles.
- Secure and robust implementation of authentication.
- Integration of external APIs with proper error handling.
- Use of optimization techniques to improve performance.
- Clarity and thoroughness of documentation.

## Next Steps
- Explore GraphQL for alternative API design.
- Learn about microservices architecture and its implementation.
- Delve into DevOps concepts for deployment and monitoring.


# Milestone 7: User Login Endpoint 🌟

### Overview
In this milestone, we created a backend endpoint for user login functionality. The focus was on validating user credentials and securely verifying the encrypted passwords stored in the database.

### Key Achievements 🎯
- **Validated User Credentials**: Implemented functionality to accept and process user login requests.
- **Encrypted Password Verification**: Used bcrypt to securely compare hashed passwords stored in the database with the user’s input.
- **Error Handling**: Added robust error handling for scenarios where users are not found or the password does not match.

### Why Password Encryption Matters
- **Protect User Data**: Ensures that passwords remain secure even if the database is compromised.
- **Privacy**: Prevents plain-text storage of sensitive information.
- **Compliance**: Meets security standards like GDPR and PCI-DSS.
- **Prevents Password Theft**: Hashing makes it nearly impossible for attackers to reverse-engineer passwords.

---

## How Login Authentication Works 🔑
1. **User Enters Credentials**:
   - The user provides their email/username and password on the login page.

2. **Fetch User Data from Database**:
   - The backend retrieves the user record based on the provided email/username.
   - If the user is not found, an error is returned: `"User does not exist."`

3. **Compare Encrypted Passwords**:
   - Hash the user's input password using the same algorithm (e.g., bcrypt).
   - Compare the resulting hash with the stored hashed password.
   - Authenticate the user if the hashes match; otherwise, return an error.

---

## Steps Implemented in Milestone 7 📝
1. **Login Endpoint**:
   - Created a backend route to handle user login requests.
   - Accepted `email/username` and `password` as inputs.

2. **Password Validation**:
   - Used bcrypt to securely hash and compare passwords.
   - Returned appropriate success or failure responses.

3. **Database Interaction**:
   - Retrieved user data from the database based on the input credentials.
   - Verified if the user exists and validated their credentials.



# Milestone 8

🎯 Milestone 8: Building a Product Card Component & Structuring the Homepage

📌 Objective

This milestone focuses on enhancing the UI by designing a reusable product card component and setting up an organized homepage to display product listings effectively.

🔍 Key Takeaways

Develop a product card component to display essential product details.

Render multiple product cards dynamically using props and mapping.

Create an engaging homepage layout with proper structuring.   


# Milestone 9: Create Product Component

## Overview

In this milestone, we have implemented the Create Product component for the Follow-Along Ecommerce project. This component allows users to create new products by entering details such as name, description, category, tags, price, stock, email, and uploading images.

## Features Implemented

Form Inputs: Users can input product details including name, description, category, tags, price, stock, and email.

Image Upload & Preview: Users can upload multiple images, which will be displayed as previews before submission.

Category Selection: A dropdown to choose a product category.

Validation & Submission: Required fields are enforced, and product data is logged on submission.

Memory Optimization: Object URLs for image previews are revoked to prevent memory leaks.

## Technologies Used

React: Functional components and hooks (useState, useEffect).

Tailwind CSS: For styling.

React Icons: AiOutlinePlusCircle for the image upload button.


# Milestone 10: Writing Mongoose Schema for Products

🚀 Overview

In this milestone, we will create a Mongoose schema for products and implement an endpoint to store product details in MongoDB. This will help us define the product structure, validate the data, and ensure data integrity.

🎯 Learning Goals

By completing this milestone, you will:

Learn how to write a Mongoose schema for products.

Learn how to create an endpoint to validate and store product details in MongoDB.

📝 Product Schema

We will define the structure of product data using Mongoose. The schema will include:

name (String, required)

description (String, required)

price (Number, required, must be positive)

imageURL (String, required, must be a valid URL)


# Milestone 11: Product Data Integration

## Overview

This milestone demonstrates how to send product data from a backend API to the frontend, retrieve the data, and dynamically display it using reusable product card components. It focuses on improving your understanding of data fetching, API integration, and dynamic UI rendering.

## Features

**API Integration:**

Backend API endpoint that provides all product data in JSON format.

**Frontend Data Fetching:**

A function that retrieves the product data from the backend API.

**Dynamic UI Rendering:**

Product data is dynamically passed to a reusable product card component and displayed in a clean layout.

## Instructions

**Backend:**

Create an API endpoint to fetch product data.
Ensure the endpoint returns a structured JSON response.

**Frontend:**

Write a function to fetch the product data using the API endpoint.
Dynamically map the fetched data to product card components.

**Display:**

Render the product cards in a grid or list format for a user-friendly interface.

# Milestone 12: Product Page with Email-Based Filtering
## Project Overview
In this milestone, we focus on implementing a dynamic product page that filters and displays products based on the email ID with which they were registered. This functionality aims to provide a personalized experience for users, ensuring that only the products associated with their accounts are visible to them. This feature is essential for enhancing user interaction and security within the application.

## Key Features
Email-Based Filtering

Products are displayed based on the email ID of the user who registered them.
Enhances data privacy by restricting access to products only to the email they are linked with.
Dynamic Product Display

A clean and responsive UI to showcase products.
Seamless updates as the logged-in user's email changes.
Scalability

Designed to accommodate additional filters in the future (e.g., categories, tags, or price range).
Ease of Integration

Fits seamlessly with the existing backend and frontend architecture.

## Objectives
To develop a robust and secure product filtering mechanism using user email IDs.
To ensure the user interface remains clean, user-friendly, and responsive.
To integrate the feature efficiently into the current project without breaking existing functionality.
To create a foundation for more advanced filtering and personalization features in future milestones.
Implementation Details
## Backend Enhancements
### API Development:
The backend will provide an endpoint to fetch products filtered by email. This ensures that only relevant data is sent to the frontend, minimizing unnecessary data transfer.

### Data Security:
To maintain security, the filtering logic will validate email inputs and ensure they match the logged-in user's email.

### Database Updates:
Ensure the product database schema includes an email field, which will store the email ID used during product registration. This field will act as the primary filter for the feature.

## Frontend Integration
### Dynamic Filtering:
The frontend will consume the API and display products based on the logged-in user's email. The email will be passed as a query parameter to the API when fetching data.

### User Interface:
The product page will feature a simple, responsive design to display the filtered product list. Additional elements such as search bars or category filters can be added later for improved user experience.

### Error Handling:
Error messages will be displayed if there are no products associated with the email or if the API call fails. This ensures clear communication with the user.

## Benefits
### Personalized User Experience:
Users can view and manage only the products they have registered, creating a more customized and secure environment.

### Improved Privacy:
By filtering products based on email, the system ensures data is only accessible to the appropriate user.

### Scalability:
The feature is designed to accommodate additional filters in the future, making the application more robust and feature-rich over time.

### Enhanced Usability:
A dedicated product page with email-based filtering makes it easier for users to manage their products, boosting overall satisfaction.

## Testing and Validation
### Manual Testing:

Register products using different email IDs.
Log in with a specific email and verify that only products associated with that email are displayed.
### Edge Case Handling:

Test with no products linked to the logged-in email to ensure appropriate messaging is displayed.
Validate behavior when invalid email inputs are used.
### Load Testing:

Test the API and frontend with a large dataset of products to ensure performance remains optimal.
## Challenges
### Handling Large Datasets:
With a significant number of products, implementing efficient filtering mechanisms is crucial to avoid performance bottlenecks.

### User Authentication:
Ensuring that the email-based filtering mechanism is securely linked to the authenticated user is critical for data security.

### Error Messaging:
Providing meaningful and user-friendly error messages in scenarios such as API failures or empty product lists.

