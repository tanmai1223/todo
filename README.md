# 📝 MERN ToDo App

A simple and responsive **ToDo List Application** built using the **MERN stack** (MongoDB, Express.js, React, Node.js). This project allows users to create, read, update, and delete tasks efficiently.

---

## 🚀 Features

- ✅ Add new tasks
- 📝 Edit existing tasks
- ❌ Delete tasks
- 📋 View all tasks
- 💾 Persistent data using MongoDB
- ⚙️ RESTful API with Express.js

---

## 🛠️ Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (local or MongoDB Atlas)

---

## 📦 Local Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/todo-mern.git
cd todo-mern

### 2. Setup Backend
cd todoBackend
npm install
Make sure to update your server.js or connection file with your own MongoDB URI if needed:
mongoose.connect("your_mongo_uri", { useUnifiedTopology: true });
Start the backend server:
bash
Copy
Edit
node server.js
Backend will typically run on http://localhost:3000

### 3. Frontend Setup
cd ../todo
npm install
npm start
The React app will launch in your browser (usually on http://localhost:5173 or 3000 depending on your config).
Make sure API fetch URLs inside your React code (like fetch("http://localhost:3000/todo")) are matching your backend port.


## 🗂️ Folder Structure
todo-mern/
│
├── todoBackend/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── todo/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   └── App.js



## 🙋‍♂️ Author
Hekkadka Tanmai
📧 htanmai.23@gmail.com
💻 MERN Stack Developer
📍 Hyderabad, Telangana

## ⭐ Support
If you found this project helpful or learned something, consider giving it a ⭐ on GitHub!

## 🔒 Note
Currently, the configuration (like MongoDB URI and port numbers) is hardcoded inside the code for simplicity. In a production environment, it's strongly recommended to use environment variables and keep credentials secure.

Let me know if you want:
- A `.gitignore` file setup
- A future-ready section for deployment instructions
- A badge-style README with icons/logos

I'm happy to help you polish the repo further!












