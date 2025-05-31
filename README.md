# A full-featured authentication boilerplate built with:

- ✅ **Next.js 15** (App Router)
- 🔐 **BetterAuth** for secure, flexible authentication
- 🌱 **Neon** Postgres DB
- 🧠 **Prisma ORM**
- 💻 **TypeScript**
- 🔑 Google OAuth & Email/Password login
- 📧 Password Reset functionality via email
- 🛡️ Gmail Domain Restriction (`@gmail.com`)
- 🧼 Follows best practices for scalability and security

---

## 🚀 Features

- Google OAuth login
- Email/password authentication
- Password reset via secure email link
- Gmail domain restriction
- Neon + Prisma database integration
- Nodemailer email handling
- Modern App Router pattern with Next.js 15
- Fully typed with TypeScript
- Scalable and clean architecture

---

## 🧰 Tech Stack

- **Framework:** Next.js 15
- **Authentication:** BetterAuth
- **Database:** NeonDB (PostgreSQL) via Prisma
- **Mailer:** Nodemailer
- **ORM:** Prisma
- **Language:** TypeScript

---

## 🛠️ Getting Started

### 📦 Prerequisites

- Node.js ≥ 18
- PostgreSQL DB (recommended: [Neon](https://neon.tech))
- Google OAuth credentials
- SMTP credentials (e.g., Gmail with App Password)

---

## 📥 Installation Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Abdullah-dev0/better-auth-kit.git
cd better-auth-kit
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file based on the example:

```bash
cp .env.example .env.local
```

Update `.env.local` with your credentials:

```env
DATABASE_URL=your_neon_postgres_connection_string
NEXTAUTH_SECRET=your_long_random_secret
NEXTAUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_gmail_app_password

ALLOWED_EMAIL_DOMAIN=gmail.com;example.org
```

> ✅ Set `ALLOWED_EMAIL_DOMAIN=gmail.com` to restrict sign-up/login to Gmail users.

---

### 4. Set Up Prisma

```bash
npx prisma generate

npx prisma db push
```

> Use `npx prisma studio` to explore your database visually.

---

### 5. Run the App

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see it in action.

---

## 🧪 Testing Email + Password

* Sign up using an email ending with `@gmail.com`
* You’ll receive an email with a verification or password reset link
* Make sure SMTP credentials are correct and allowed for your Gmail account

---

## 🧱 Project Structure

```
/app
  /auth             # Sign in, Sign up, Reset Password UI
  /api/auth         # BetterAuth handlers
/prisma
  schema.prisma     # Database schema
/lib
  auth.ts           # BetterAuth config
  mail.ts           # Nodemailer helpers
  utils.ts          # Helper functions (e.g., domain check)
```

---

## 🔐 Security Features

* Passwords are securely hashed with bcrypt
* JWT-based session strategy
* Email verification and reset links
* Only allows sign-in from specific email domains
* Secrets and credentials are loaded via environment variables

---

## 🧼 Best Practices

* Modular, reusable components and logic
* Strong TypeScript typing throughout
* Separated domain logic for better maintainability
* Safe, environment-driven configuration
* Secure email/password flows with token validation

---

## 📤 Deploying to Vercel

1. Push your project to GitHub.
2. Go to [Vercel](https://vercel.com) and import the project.
3. Set your environment variables in the Vercel dashboard.
4. Connect your Neon database.

---

## 🤝 Contributing

PRs and suggestions welcome! Please open an issue for discussion before submitting large changes.

---


## ⭐️ Support

If this starter kit helped you, consider giving it a ⭐️
