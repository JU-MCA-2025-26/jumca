# JUMCA Portal
Initialised the project as a monorepo for the JUMCA Portal. 
Frontend is built with React and TypeScript, while the backend is powered by Node.js, TypeScript, and Express. The project structure is organized to facilitate scalability and maintainability.

To start building the project, follow these steps:
- Fork the repository to your GitHub account.
- Clone the repository to your local machine.
- Navigate to the project directory.
- Install the dependencies for both frontend and backend by navigating to the directory using `npm install`.
- Set up the environment variables by creating a `.env` file in both the directories.
- Set up prisma by running `npx prisma generate` in the backend directory.
- If you have new database changes to perform, run `npx prisma migrate dev` in the backend directory.
- Start the development server for the frontend and backend using `npm run dev` in in separate terminal windows. (Will try to create a single npm script to run both servers simultaneously in the future)

From my experience on linux, I have seen that if you don't change your postgresql configuration file in '/var/lib/pgsql/data/data/pg_hba.conf' to make sure that the authentication method is set to 'scram-sha-256' for the user you are using to connect to the database, you will get an error when trying to connect to the database. So make sure to change that configuration file and restart the postgresql service.

The `prisma/seed.ts` file is used to seed the database with initial data. So far, it only seeds the `users` table with a default admin user. You can modify this file to add more seed data as needed. Run it with the command `npx ts-node prisma/seed.ts` in the backend directory.
