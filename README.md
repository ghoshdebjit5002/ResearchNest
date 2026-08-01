# 📚 ResearchNest - Online Conference Publication System

[![Live Website](https://img.shields.io/badge/🌐_Live_Website-ResearchNest-success?style=for-the-badge)](https://researchnest.onrender.com)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/ghoshdebjit5002/ResearchNest)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## 📖 About

**ResearchNest** is a full-stack web application designed to simplify the conference publication process. It provides a centralized platform where **Authors**, **Reviewers**, and **Administrators** can manage research paper submissions, reviews, acceptance decisions, conference sessions, and certificates.

The project is built using **Node.js**, **Express.js**, **SQLite**, **Sequelize**, **HTML**, **CSS**, and **JavaScript**.

---

# 🌐 Live Demo

### 🚀 Website

**https://researchnest.onrender.com**

### 💻 GitHub Repository

**https://github.com/ghoshdebjit5002/ResearchNest**

---

# ✨ Features

## 👨‍💻 Author

- Register & Login
- JWT Authentication
- Submit Research Papers
- Upload PDF Files
- Track Submission Status
- View Accepted Papers
- Download Certificates

---

## 👨‍⚖️ Reviewer

- Secure Login
- View Assigned Papers
- Submit Reviews
- Give Comments
- Recommend Acceptance or Rejection

---

## 👨‍💼 Admin

- Manage Authors
- Manage Reviewers
- Assign Reviewers
- Accept/Reject Papers
- Schedule Conference Sessions
- Generate Certificates
- Manage Entire Publication Workflow

---

# 🛠 Tech Stack

## Frontend

- HTML5
- CSS3
- JavaScript

## Backend

- Node.js
- Express.js

## Database

- SQLite
- Sequelize ORM

## Authentication

- JWT (JSON Web Token)
- bcrypt Password Hashing

## File Upload

- Multer

## PDF Generation

- PDFKit

---

# 📂 Project Structure

```text
ResearchNest
│
├── backend
│   ├── src
│   │   ├── config
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   ├── utils
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── uploads
│   ├── database.sqlite
│   ├── package.json
│   └── package-lock.json
│
├── frontend
│   ├── css
│   ├── js
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── submit.html
│   ├── reviewer.html
│   ├── admin.html
│   └── certificates.html
│
├── .gitignore
├── LICENSE
└── README.md
```

---

# 🚀 Installation

## Clone the Repository

```bash
git clone https://github.com/ghoshdebjit5002/ResearchNest.git
```

Move into the backend directory

```bash
cd ResearchNest/backend
```

Install dependencies

```bash
npm install
```

---

# ▶️ Run Locally

Start the server

```bash
npm start
```

The application will run at

```
http://localhost:4000
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=4000

JWT_SECRET=YourSecretKey

DATABASE_DIALECT=sqlite

DATABASE_STORAGE=./database.sqlite
```

---

# 👤 Demo Login Credentials

## 👑 Admin

Email

```
admin@example.com
```

Password

```
admin123
```

---

## 👨‍⚖️ Reviewer

Email

```
reviewer@example.com
```

Password

```
review123
```

---

## ✍️ Author

Email

```
author@example.com
```

Password

```
author123
```

---

# 📷 Screenshots

You can add screenshots here.

Example:

```
screenshots/
│
├── home.png
├── login.png
├── dashboard.png
├── submit-paper.png
├── reviewer-dashboard.png
└── admin-dashboard.png
```

---

# 🚀 Future Enhancements

- Email Verification
- Forgot Password
- Password Reset
- PostgreSQL Support
- AI Reviewer Recommendation
- AI Conference Assistant
- Plagiarism Detection
- Conference Calendar
- Email Notifications
- Responsive Mobile Design
- Analytics Dashboard
- Multi-Conference Support

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push the branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

## Debjit Ghosh

**B.Tech - Computer Science & Engineering**

**Techno Main Salt Lake**

### GitHub

https://github.com/ghoshdebjit5002

### LinkedIn

*Add your LinkedIn profile here.*

---

# ⭐ Show Your Support

If you found this project useful,

⭐ Star this repository

🍴 Fork the repository

🐞 Report Issues

💡 Suggest Improvements

---

## ❤️ Thank You for Visiting ResearchNest!

**Happy Coding! 🚀**
