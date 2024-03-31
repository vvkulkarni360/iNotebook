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
- **Alert Notifications:** Alerts are displayed on top for every operation, enhancing user experience.

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

![Screenshot 2024-03-31 150029](https://github.com/vvkulkarni360/iNotebook/assets/119601667/d299cc17-6200-439f-bef4-5e6401a26512)
![Screenshot 2024-03-31 150047](https://github.com/vvkulkarni360/iNotebook/assets/119601667/f739fae5-b326-42f5-8782-33c4784938e4)
![Screenshot 2024-03-31 145917](https://github.com/vvkulkarni360/iNotebook/assets/119601667/b6512949-e047-4961-800f-ee4076374114)
![Screenshot 2024-03-31 144613](https://github.com/vvkulkarni360/iNotebook/assets/119601667/ad49c93c-ba8d-4ef0-90ca-90267813ab0f)
![Screenshot 2024-03-31 144530](https://github.com/vvkulkarni360/iNotebook/assets/119601667/afe2b91d-6a21-44af-91d9-bc32cd872f5e)
![Screenshot 2024-03-31 144331](https://github.com/vvkulkarni360/iNotebook/assets/119601667/190f59ef-d24a-4fd8-8e7d-79d1bcbf76d2)
