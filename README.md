# 🤖 AI Interview Copilot Pro

> An AI-powered Resume Analyzer & Interview Preparation Platform built with Django, React, TypeScript, and Google Gemini AI.

![Python](https://img.shields.io/badge/Python-3.13-blue)
![Django](https://img.shields.io/badge/Django-6.0-green)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38BDF8)
![License](https://img.shields.io/badge/License-MIT-success)

---

# 📌 Overview

AI Interview Copilot Pro is an intelligent platform that helps job seekers improve their resumes using AI.

The platform automatically analyzes uploaded resumes, calculates an ATS score, identifies missing keywords, highlights strengths and weaknesses, and provides actionable suggestions to improve interview readiness.

Powered by **Google Gemini AI**, the application provides detailed resume insights within seconds.

---
## 🔗 Project Links

| Resource | Link |
|----------|------|
| 💻 **GitHub Repository** | https://lnkd.in/dFJGPYvp |
| 🌐 **Live Demo** | https://lnkd.in/du9CWHfr |
| 📄 **Resume Upload Module** | https://lnkd.in/dnjtZ__e |
| ⚙️ **Backend API Documentation** | https://lnkd.in/d68uugjE |
---
# ✨ Features

## 📄 Resume Management

- Upload Resume (PDF)
- Resume History
- Resume Details
- Download Resume
- Delete Resume
- Re-analyze Existing Resume

---

## 🤖 AI Resume Analysis

- ATS Score
- Resume Summary
- Strengths
- Weaknesses
- Missing Skills
- AI Suggestions
- Overall Resume Analysis

---

## 🎯 Job Description Matching

- Resume vs Job Description Matching
- Match Percentage
- Missing Keywords
- Missing Skills
- AI Recommendations

---

## 📊 Dashboard

- Total Uploaded Resumes
- Average ATS Score
- Highest ATS Score
- Latest Analysis
- Resume Statistics

---

## 🔐 Authentication

- JWT Authentication
- Login
- Registration
- Secure API Access

---

## 📁 PDF Processing

- PDF Upload
- Text Extraction
- AI Processing
- Report Generation

---

# 🛠 Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Router
- React Hook Form

---

## Backend

- Django
- Django REST Framework
- PostgreSQL
- JWT Authentication
- Google Gemini AI
- ReportLab
- PyMuPDF

---

## AI

- Google Gemini 2.5 Flash
- Prompt Engineering
- ATS Resume Analysis

---

# 📂 Project Structure

```
AI-Interview-Pro
│
├── client/
│   ├── src/
│   ├── pages/
│   ├── components/
│   ├── services/
│   ├── hooks/
│   └── utils/
│
├── server/
│   ├── apps/
│   │   ├── accounts/
│   │   └── resume/
│   ├── config/
│   └── requirements.txt
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/soniyaritgithub/AI-Interview-Pro.git

cd AI-Interview-Pro
```

---

# Backend Setup

```bash
cd server

python -m venv venv

source venv/bin/activate
```

Windows

```bash
venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run migrations

```bash
python manage.py migrate
```

Start backend

```bash
python manage.py runserver
```

---

# Frontend Setup

```bash
cd client

npm install

npm run dev
```

---

# Environment Variables

Backend

```
DEBUG=True

SECRET_KEY=your_secret_key

DATABASE_URL=your_database_url

GEMINI_API_KEY=your_gemini_api_key
```

Frontend

```
VITE_API_URL=http://localhost:8000/api/v1
```

---

# API Endpoints

## Authentication

```
POST /api/v1/auth/register/
POST /api/v1/auth/login/
POST /api/v1/auth/logout/
```

---

## Resume

```
POST   /api/v1/resume/upload/

POST   /api/v1/resume/analyze/{id}/

GET    /api/v1/resume/history/

GET    /api/v1/resume/dashboard/

GET    /api/v1/resume/{id}/

DELETE /api/v1/resume/{id}/delete/

POST   /api/v1/resume/{id}/reanalyze/

GET    /api/v1/resume/{id}/download/

POST   /api/v1/resume/match/
```

---

# Future Improvements

- Google OAuth Login
- LinkedIn Resume Import
- AI Mock Interview
- Interview Recording
- Voice Feedback
- Cover Letter Generator
- Resume Builder
- Multi-language Resume Support
- Email Notifications
- Premium Subscription

---

# Deployment

## Frontend

- Vercel

## Backend

- Render

## Database

- PostgreSQL

---

# Author

**Sunidhi Shinde**

📧 Email: sunidhishinde28@gmail.com

💼 LinkedIn

https://www.linkedin.com/in/sunidhishinde/

💻 GitHub

https://github.com/soniyaritgithub

🌐 Portfolio

https://sunidhi-portfolio-alpha.vercel.app/

---

# License

This project is licensed under the MIT License.

---

⭐ If you found this project useful, don't forget to star the repository.
