# **Finvestt – Finance Platform**

Finvestt is a modern personal finance management platform built with **Next.js**, **Prisma + PostgreSQL + Supabase**, **Clerk authentication**, **Google Gemini AI**, **ArcJet**, **Inngest**, and **Resend email**.

Users can manage multiple bank accounts, track income/expenses, set monthly budgets, receive alerts, and generate recurring transactions. The UI is built using **shadcn/ui** and includes visualizations with **Recharts**.

## Live Demo
[https://finvestt.vercel.app/](https://finvestt.vercel.app/)
---

## 🎥 Project Video 
https://github.com/user-attachments/assets/58565598-5197-448e-b3b0-b203cc363075

 

# Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Screenshots](#screenshots)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Inngest Background Jobs](#inngest-background-jobs)
- [Email Templates](#email-templates)
- [Deployment](#deployment)
- [Future Enhancements](#future-enhancements)

---

# Overview
Finvestt helps users manage multiple bank accounts, record income/expenses, set monthly budgets, scan receipts using AI (Gemini), and view charts and transaction tables per account. Users authenticate with Clerk. Sensitive operations are protected by ArcJet (rate-limiting / bot protection). Emails are sent with Resend.

---

# Features
- Multi-account management (current / savings)  
- Create / update / delete transactions (income & expense)  
- Recurring transactions (daily / weekly / monthly / yearly)  
- Receipt scanning (image → parsed JSON) via Google Gemini  
- Budget per user + progress UI and alerts  
- Bulk delete transactions with proper balance reconciliation  
- Default account toggle  
- Protected server actions (Clerk auth + ArcJet checks)  
- Transactional emails via Resend  
- Background jobs (Inngest) for recurring transactions & reports

---

# Tech Stack
**Frontend**
- Next.js (app router) — React server & client components  
- Tailwind CSS + shadcn/ui  
- Recharts, react-hook-form, zod, sonner

**Backend**
- Next.js server actions  
- Prisma ORM (PostgreSQL) — can use **Supabase** as the Postgres provider  
- Inngest for background tasks  
- Google Gemini for receipt OCR  
- Resend for emails  
- ArcJet for request protection

**Database hosting (options)**
- Self-managed Postgres / Hosted Postgres (Neon, Railway, AWS RDS)  
- **Supabase** (managed Postgres + Storage + Realtime) — supported and recommended if you want integrated file storage / storage rules

---

# System Architecture
Client (Next.js + Clerk)  
Server Actions / API (Next.js)  
Prisma → PostgreSQL
ArcJet (rate-limits)  
Google Gemini (OCR)  
Inngest (jobs)  
Resend (emails)  
Recharts
Clerk
Shadcn UI
Tailwind
Supabase Storage 

---

# Screenshots
![Homepage](public/Screenshot%202025-12-11%20174156.png)
![Homepage](public/Screenshot%202025-12-11%20174758.png)
![Homepage](public/Screenshot%202025-12-11%20174811.png)
![Homepage](public/Screenshot%202025-12-11%20174312.png)
![Homepage](public/Screenshot%202025-12-11%20174507.png)
![Homepage](public/Screenshot%202025-12-11%20174630.png)
![Homepage](public/Screenshot%202025-12-11%20174650.png)

---

# Environment Variables

Create a `.env` file at project root. This includes Supabase options if you choose Supabase.

```env
# Database (Postgres or Supabase Postgres connection string)
DATABASE_URL="postgresql://postgres:password@db.xyz.supabase.co:5432/postgres?schema=public"
DIRECT_URL="postgresql://postgres:password@db.xyz.supabase.co:5432/postgres"

# Clerk (auth)
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Google Gemini (receipt OCR)
GEMINI_API_KEY=your_gemini_api_key

# ArcJet
ARCJET_KEY=your_arcjet_key

# Resend (emails)
RESEND_API_KEY=your_resend_api_key

---
```
# Installation
```
1. Clone Repository
git clone https://github.com/ashwinr-10/Finance_Platform_NEXT.git
cd Finance_Platform_NEXT

2. Install dependencies
npm install

3. Create .env 

4. Generate Prisma client
npx prisma generate
```
# Inngest Background Jobs
```
processRecurringTransaction — process a single recurring transaction
triggerRecurringTransactions — scheduled job to create due recurring transactions
generateMonthlyReports — build and send monthly report (Resend)
checkBudgetAlerts — alert users when budget thresholds are crossed
```
# Analytics (Recharts)
```
Transaction Overview Chart
Income vs Expense
Monthly Expense Breakdown (Pie Chart)
Recent Transactions
```
# AI Receipt Scanning (Gemini)
Gemini extracts:
```
{
  "amount": 399.99,
  "date": "2024-05-10",
  "description": "Recharge",
  "merchantName": "Jio",
  "category": "utilities"
}
```
# Email Templates
Supports:
```
Monthly Report
Budget Alert
```
# Deployment
Vercel (recommended)
```
Add all environment variables in Vercel Dashboard.
For Supabase, set DATABASE_URL to Supabase Postgres connection string and SUPABASE_* keys.
npx prisma migrate deploy should be run as part of deployment pipeline.
```
Database
```
Supabase
```

# Future Enhancements
```
Bank sync 
Auto-categorization using ML
Mobile App (React Native)
Multi-currency mode
Export reports (PDF, CSV)
```
