# Next.js Dashboard Application

## Overview

The Next.js Dashboard Application is a modern, scalable, and feature-rich dashboard built with the latest Next.js App Router architecture. It serves as a robust starter template for developers looking to build performant web applications with server-side rendering, seamless API integration, and responsive design.

## Features

- **Next.js App Router**: Leveraging the new file-based routing system for improved developer experience and performance.
- **Server Components**: Utilizing React Server Components for optimized rendering and data fetching.
- **API Routes**: Built-in API routes for backend logic and data handling.
- **Authentication**: Secure user authentication and session management.
- **Database Integration**: PostgreSQL integration for reliable and scalable data storage.
- **Responsive UI**: Fully responsive and accessible user interface powered by Tailwind CSS.

## Tech Stack

- Next.js 15+
- React 18+
- Tailwind CSS
- PostgreSQL
- Vercel (for deployment)
- TypeScript
- NextAuth.js (for authentication)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- pnpm, npm, or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kikoolz/nextjs-dashboard.git
   cd nextjs-dashboard
   ```

2. Install dependencies:

   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. Setup environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```
   DATABASE_URL=your_postgresql_connection_string
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. Ensure PostgreSQL is running and your database is created:

   ```bash
   createdb your_database
   ```

### Running the Development Server

Start the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Project Structure

- `/app` - Contains Next.js App Router pages and layouts.
- `/components` - Reusable React components.
- `/db` - Database connection and query logic for PostgreSQL.
- `/public` - Static assets like images and fonts.
- `/styles` - Global and component-specific styles.
- `/lib` - Utility functions and API clients.
- `/middleware.ts` - Middleware for authentication and routing.
- `/pages/api` - API routes for backend logic.

## Available Scripts

- `dev` - Runs the app in development mode with hot reloading.
- `build` - Builds the application for production.
- `start` - Starts the production server.
- `lint` - Runs ESLint to analyze and fix code style issues.

Example:

```bash
pnpm run dev
pnpm run build
pnpm run start
pnpm run lint
```

## Deployment

### Deploying to Vercel

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Import your project in [Vercel](https://vercel.com/new).
3. Set environment variables in the Vercel dashboard matching your `.env` file.
4. Deploy your application — Vercel will handle building and hosting.

### Other Platforms

You can deploy this app on any Node.js hosting platform that supports Next.js. Ensure environment variables are configured and the database is accessible.

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Write clear, concise commit messages.
4. Ensure code passes linting and tests.
5. Submit a pull request describing your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the [Next.js team](https://nextjs.org/) for their excellent framework.
- Inspired by the [Next.js App Router Course](https://nextjs.org/learn) which provided the foundational concepts for this project.
