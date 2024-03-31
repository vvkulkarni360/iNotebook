# MERN Stack Project - User-Based Notes App

Welcome to my MERN stack project! 🚀 In this app, users can create their own accounts and manage their notes. Let's dive into the details and explore what makes this project special.

## Features

- **User-Based Notes:** Each user has their own account with unique notes.
- **CRUD Operations:** Create, read, update, and delete notes.
- **Note Details:** Users can add a title, description, and tag for each note.

## Highlights

One of the key highlights of this project is the use of JSON Web Tokens (JWT). Here's why it's awesome:

- **JWT Generation:** A unique JWT is generated for each user.
- **Middleware Verification:** JWT is verified every time a CRUD operation is performed, ensuring secure access.
- **Hashed Passwords:** User passwords are hashed for security, maintaining privacy.

## Technical Details

- **Tech Stack:** MERN (MongoDB, Express, React, Node.js)
- **Tools:** MongoDB Compass for backend view, Thunderclient for backend collection.
- **Routing:**
  - **Auth Route:** Contains three POST routes:
    - `/createuser`: Sign up route.
    - `/login`: Login route.
    - `/getuser`: Fetches details of the logged-in user.
  - **Notes Route:** Consists of four routes for CRUD operations with user verification for enhanced security.

## Challenges Faced

While working on this project, I encountered a few challenges:

- **Understanding useContext Hook:** Initially confusing but now well-understood.
- **JWT Verification:** Faced technical difficulties, took time to resolve despite correct syntax.

---

Feel free to explore the project and let me know your thoughts or any feedback! 😊