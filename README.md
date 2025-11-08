# Full-Stack NitroJS + NuxtJS

A clean and basic full-stack application structure built with **Nuxt 4**, **Nitro server routes**, and **MongoDB (Mongoose)**.  
This template is designed to provide a scalable starting point for full-stack development with best practices for backend structure, API organization, and database integration.

<p align="center">
  <img src="https://nuxt.com/assets/design-kit/logo/nuxt-logo.svg" width="90" />
  <img src="https://nitro.unjs.io/logo.svg" width="90" />
  <img src="https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.svg" width="90" />
</p>

---

## Overview

This project includes:

- Nuxt 4.2.0 as the frontend framework
- Nitro-powered backend using Nuxt server routes
- MongoDB integration using Mongoose
- Organized and scalable folder structure
- Clear separation between API, database models, and service logic

It is intended as a minimal starter to help developers build full-stack applications more efficiently.

---

## Features

- Full-stack app inside one Nuxt project
- Automatic API routing from `server/api`
- MongoDB + Mongoose setup with reusable connection handler
- Separate layers for:
  - API endpoints
  - Database models
  - Business logic (services)
- Lightweight and extendable architecture
- Suitable for production deployment with Nitro

---
## How Nitro Works

Nitro powers all backend logic inside Nuxt:

- Converts files in `server/api` into backend endpoints
- Supports serverless and Node deployment
- Handles routing, payloads, and runtime automatically

---
## Create a .env file at the root
```bash
MONGODB_URI=mongodb://localhost:27017/yourdatabase
```
---

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
