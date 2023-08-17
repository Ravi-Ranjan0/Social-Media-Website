# Social Media Website

Welcome to the Social Media Website project! This application is built using the MERN (MongoDB, Express, React, Node.js) stack, providing a platform for users to connect, share content, and interact with each other.

## Table of Contents

- [Social Media Website](#social-media-website)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Project Structure](#project-structure)
    - [Technologies Used](#technologies-used)
    - [Deployment:](#deployment)
    - [Contributing](#contributing)

## Features

- User registration and authentication
- User profiles with profile pictures and customizable information
- News feed with personalized content based on user preferences
- Ability to post text, photos, and videos
- Real-time interactions: liking, commenting, and messaging
- Friend/connection management with followers and following
- Content moderation to ensure a safe environment
- Analytics and insights to understand user engagement
- Third-party API integration for enhanced functionality

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download](https://nodejs.org/)
- MongoDB: [Download](https://www.mongodb.com/try/download/community)
- Git (optional): [Download](https://git-scm.com/downloads)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/social-media-mern.git
   cd social-media-mern
   ```

2. Install backend dependencies:
 
   ```bash
    cd backend
    npm install
   ```

3. Install front dependencies:

   ```bash
    cd..
    cd frontend
    npm install
   ```

4. Start the development servers:
   ```bash
   THERE WILL BE TWO SERVERS RUNNING PARALLEL

    front-end :- 
    cd frontend
    npm start

    back-end :- 
    cd backend 
    npm start
   ```
5. Access the application in your browser at http://localhost:3000.

### Project Structure
- frontend/: Frontend React application
- backend/: Backend Express application
  - routes/: API routes
  - models/: MongoDB models
  - controllers/: Request handlers
  - middlewares/: Custom middleware
  - config/: Configuration files
  - utils/: Utility functions
  - public/: Static files for the frontend
### Technologies Used

- Frontend:
  - React: Frontend library for building user interfaces
  - Redux: State management
  - Axios: HTTP requests
  - Socket.io: Real-time communication
  - Tailwind CSS: A utility-first CSS framework.
  
- Backend:
  - Express: Web application framework
  - MongoDB: NoSQL database
  - Mongoose: MongoDB object modeling
  - JWT: JSON Web Tokens for authentication
  - Socket.io: Real-time communication

### Deployment:
- Render: Backend deployment
- Netlify: Frontend deployment

### Contributing
Contributions are welcome! To contribute to this project, follow these steps:

-  Fork the repository.
- Create a new branch for your feature: git checkout -b feature-name.
- Commit your changes: git commit -m 'Add some feature'.
- Push to the branch: git push origin feature-name.
- Create a pull request explaining your changes.