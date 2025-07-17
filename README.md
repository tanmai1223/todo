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
## 🧪 Screenshots

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/2296a42b-387c-420b-8744-1df7962bb476" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/a4d2ad37-be9f-44fc-a816-097c9632d0dc" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/64735529-0249-4ce2-9df5-d843c8afe8ab" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c37977bd-076e-48d1-9657-a6356b179c50" />





## 📦 Local Setup Instructions

### **1. Clone the Repository**
```bash
git clone (https://github.com/tanmai1223/todo)
cd todo
```
###  2. Setup Backend
```bash
cd todoBackend
npm install
```
Make sure to update your server.js or connection file with your own MongoDB URI if needed:
mongoose.connect("your_mongo_uri", { useUnifiedTopology: true });
Start the backend server:
```bash
node server.js
```
Backend will typically run on:
👉 http://localhost:3000

### 3. Setup Frontend
```bash
cd ../todo
npm install
npm start
```
The React app will launch in your browser (usually on http://localhost:5173 or http://localhost:3000, depending on your Vite/React config).

🛠️ Make sure your API fetch URLs inside React code (like fetch("http://localhost:3000/todo")) match the backend port.

##  🗂️ Folder Structure
```bash
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
```
## 🙋‍♂️ Author
Hekkadka Tanmai
📧 htanmai.23@gmail.com
💻 MERN Stack Developer
🔗 [LinkedIn – Hekkadka Tanmai](https://www.linkedin.com/in/htanmai)  
📍 Hyderabad, Telangana

## ⭐ Support
If you found this project helpful or learned something, consider giving it a ⭐ on GitHub!

## 🔒 Note
Currently, the configuration (like MongoDB URI and port numbers) is hardcoded inside the code for simplicity.
In a production environment, it's strongly recommended to use environment variables and keep credentials secure using .env files.

