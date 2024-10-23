**Smetovi**

This web is designed for giving informations about a mountain Smetovi near Zenica.

Getting Started
Follow these instructions to set up and run the project on your local machine.

Prerequisites
Make sure you have the following installed:

- Node.js / Express
- Angular and CSS Framework Tailwind
- npm
  Installation

Set up the Frontend:

```
cd frontend
npm i
npm run start
```

Set up the Backend:

**Create .env in backend folder in this format with already configurated database in MySQL:**

```
NODE_ENV=development
DEV_DATABASE_URL = postgresql://neondb_owner:nekYVhH8Tzo6@ep-holy-moon-a5i4sdfw-pooler.us-east-2.aws.neon.tech/smetovi-dev?sslmode=require
JWT_SECRET=mysueprsecret
JWT_REFRESH_SECRET=myrefreshsupersecret
PORT=4000
SMTP_HOST=host
SMTP_PORT=465
SMTP_USER=smtp_user
SMTP_PASS=password
DEFAULT_SENDER_EMAIL=default_sender
DEFAULT_RECEIVER_EMAIL=default_receiver
DEFAULT_RECEIVER_NAME=Smetovi
```

Make sure to replace the placeholders with your actual values.

**Note**
If you are using Gmail, you need to enable "Less secure app access" or use an App Password to authenticate.

then

```
cd backend
npm i
npm run dev
```

Running the Application
After setting up the frontend and backend, you can access the application at:

http://localhost:3000 Frontend

http://localhost:4000 or any other port from .env Backend
