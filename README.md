This application is derived from the original [SEDENA: Ticket Printer Web App](https://github.com/IzuOvando/ticket_printer_web_app), and focuses exclusively on authentication-related responsibilities.


# Pre-requisites
This project has interactions with many SaaS solutions (in specific from [Vercel](https://vercel.com/)) and other components, so at least for run this project is necessary to have:
- **PostgreSQL Database** (not mandatory to be [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres))
> [!TIP]
> In order to facilitate local development it was created a docker image ([see installation ](#installation) for more information) where a **PostgreSQL** Database

## Technologies

- Next.js `14.2.26`
- React `18.x`
- TypeScript `5.x`
- Prisma `5.16.1`

# Installation 💻

It requires to have Node.js installed with at least version v18.20.4.

First, install all the dependencies with:
```bash
npm install
# or
yarn
# or
pnpm install
```

Then set all the environment variables as in the `.env.example`.

For a local development we recommend you to set the following variables in your own `.env` like this:
```dosini
# * ROOT CONFIG
BASE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000
NODE_ENV=development

# * AUTH
AUTH_URL=http://localhost:3000
AUTH_SECRET=secret
```
The other variables is up to you to set them.

## (Optional) Setting Docker Compose 🐳
In order to have a local **PostgreSQL** Database Instance you must run:
```bash
docker-compose up
```
> [!IMPORTANT]
> We assume you have docker installed

Then for be able to use the instances you must set the following variables in your `.env`:
```dosini
# * DATABASE
DATABASE_URL=postgresql://postgres:N0M3L0S3@localhost:5432/sdn_trucks
POSTGRES_URL_NON_POOLING=postgresql://postgres:N0M3L0S3@localhost:5432/sdn_trucks
```

In the first run of the compose your set of containers will be created and in the following runs of the same command will raise the containers again.

> [!IMPORTANT]
> You must raise your containers whenever you want to start developing in local. 

# Running ⚙️
For run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```