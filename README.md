# AI Pathsala — Full Stack Project

A SaaS-style corporate website for **AI Pathsala** — helping Nepali students master
their interests. This repo contains a complete **React frontend**
and a **FastAPI backend**,and **db** built as two independent services that talk to each other over HTTP.

---

## 1. Project Purpose

AI Pathsala is **not** a learning platform itself actual lessons live in a separate
dedicated mobile app. This website exists purely to:

- Establish brand presence
- Explain services (digital learning)
- Build trust (story, values, testimonials, projects)
- Generate leads via the **Contact** form and **Newsletter** subscription

---

## 2. Tech Stack

| Layer        | Technology                                      |
|--------------|--------------------------------------------------|
| Frontend     | React 18 + Vite + Tailwind CSS v4 + React Router |
| HTTP client  | Axios                                            |
| Backend      | FastAPI (async)                                  |
| Database     | PostgreSQL (via SQLAlchemy async + asyncpg)      |
| Email        | aiosmtplib         |

---

## 3. Full Folder Structure

```
ai-pathsala-v2/
├── README.md
│
├── src/                          ← React + Vite + Tailwind v4
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── main.jsx
│       ├── App.jsx                    ← BrowserRouter, flat Routes
│       ├── index.css                  ← Tailwind import + design tokens
│       ├── assets/
│       │   └── logo.png
│       ├── components/
│       │   ├── Navbar.jsx             ← sticky, blur-on-scroll, mobile drawer
│       │   └── Footer.jsx             ← links, contact info, socials
│       └── pages/
│           ├── Home.jsx               ← hero, rotating quotes, features, CTA
│           ├── Services.jsx           ← 4 services, alternating layout
│           ├── About.jsx              ← story, values, timeline, team
│           ├── Projects.jsx           ← app + WSC 2025 initiatives
│           ├── Blog.jsx               ← article grid + newsletter signup
│           └── Contact.jsx            ← form → POST /api/contact
│
└── backend/                           ← FastAPI + SQLAlchemy async + PostgreSQL
    ├── __init__.py                    ← exports settings, Base, get_db, engine
    ├── main.py                        ← FastAPI app, CORS, lifespan (creates tables)
    ├── config.py                      ← reads .env via pydantic-settings
    ├── database.py                    ← async engine, session, Base, get_db
    ├── .env                           ← DATABASE_URL, CORS_ORIGINS, SMTP creds
    ├── requirements.txt
    ├── models/
    │   ├── __init__.py                ← exports ContactMessage, Subscriber, BlogPost
    │   ├── contact.py                 ← contact_messages table
    │   ├── subscriber.py              ← subscribers table
    │   └── blog.py                    ← blog_posts table
    ├── schemas/
    │   ├── __init__.py                ← exports all Pydantic schemas
    │   ├── contact.py
    │   ├── subscriber.py
    │   └── blog.py
    ├── routes/
    │   ├── __init__.py                ← exports all 3 routers
    │   ├── contact.py                 ← POST / GET / DELETE /api/contact
    │   ├── subscriber.py              ← POST / DELETE /api/subscribe
    │   └── blog.py                    ← GET / POST / PUT / DELETE /api/blogs
    └── services/
        ├── __init__.py                ← exports send_contact_notification
        └── email.py                   ← SMTP email on new contact submission
```

---

## 4. How the Two Sides Connect

```
┌─────────────────┐         HTTP / JSON         ┌──────────────────┐
│   React (Vite)   │  ───────────────────────►   │   FastAPI         │
│  localhost:5173  │   axios.post('/api/...')    │  localhost:8000   │
└─────────────────┘  ◄───────────────────────    └──────────────────┘
                          JSON response                    │
                                                            ▼
                                                   ┌──────────────────┐
                                                   │   PostgreSQL      │
                                                   │   aipathsala DB   │
                                                   └──────────────────┘

---

## 5. Setup — Backend

### 5.1 Create the database
```bash
psql -U postgres
CREATE DATABASE aipathsala;
\q
```

### 5.2 Configure environment
Edit `backend/.env` and set your real PostgreSQL credentials:
```env
DATABASE_URL=postgresql+asyncpg://YOUR_USER:YOUR_PASSWORD@localhost:5432/aipathsala
```

### 5.3 Install & run
```bash
cd ai-pathsala-v2
python -m venv venv
source venv/bin/activate          # Windows: venv\Scripts\activate

pip install -r backend/requirements.txt

# Run from the PROJECT ROOT (not from inside backend/) — relative imports require this
uvicorn backend.main:app --reload --port 8000
```

Tables are created automatically on first startup (no manual migrations needed for dev).

- API base: **http://localhost:8000**
- Interactive docs: **http://localhost:8000/docs**
- Health check: **http://localhost:8000/health**

---

## 6. Setup — Frontend

```bash
cd frontend
npm install
npm run dev
```

- App: **http://localhost:5173**

---

## 7. API Reference

| Method | Endpoint               | Description                          |
|--------|--------------------------|----------------------------------------|
| GET    | `/health`                | Health check                          |
| POST   | `/api/contact`           | Submit contact form                   |
| GET    | `/api/contact`           | List all messages (admin)             |
| DELETE | `/api/contact/{id}`      | Delete a message (admin)              |
| POST   | `/api/subscribe`         | Subscribe to newsletter               |
| DELETE | `/api/subscribe/{email}` | Unsubscribe                           |
| GET    | `/api/blogs`              | List blog posts (filter `?category=`) |
| GET    | `/api/blogs/{slug}`      | Get a single post                     |
| POST   | `/api/blogs`              | Create a post (admin)                 |
| PUT    | `/api/blogs/{slug}`      | Update a post (admin)                 |
| DELETE | `/api/blogs/{slug}`      | Delete a post (admin)                 |

### Example — Submit Contact Form
```json
POST /api/contact
{
  "name": "Anika Shrestha",
  "email": "anika@example.com",
  "message": "I'd like to know more about your Japanese courses."
}
```
**Response**
```json
{
  "success": true,
  "message": "Thank you! We'll get back to you within one business day."
}
```

---

## 8. Pages Overview

| Page          | Route       | Purpose                                                    |
|---------------|-------------|--------------------------------------------------------------|
| Home          | `/`         | Hero, rotating testimonial quotes, features, why-us, CTA     |
| Services      | `/services` | 4 core services with alternating image/text layout           |
| About Us      | `/about`    | Mission, vision, values, company timeline, team               |
| Projects      | `/projects` | The AI Pathsala app + WSC 2025 initiatives                    |
| Blog          | `/blog`     | Article grid + newsletter subscribe (not yet wired to API)    |
| Contact Us    | `/contact`  | Form with validation → posts to backend                       |

---

## 9. Known TODOs

- [ ] Fix `Contact.jsx` URL: `/contact` → `/api/contact`
- [ ] Wire `Blog.jsx` newsletter input to `POST /api/subscribe`
- [ ] Replace hardcoded blog posts in `Blog.jsx` with `GET /api/blogs`
- [ ] Add authentication before exposing admin routes (`GET /api/contact`, blog write routes) in production
- [ ] Set `CORS_ORIGINS` to production domain before deploying

---
