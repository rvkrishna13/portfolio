# Portfolio Application

## Overview

This is a full-stack portfolio application showcasing professional experience, education, skills, and projects. Built with a modern tech stack featuring React frontend with TypeScript, Express.js backend, and PostgreSQL database integration via Drizzle ORM. The application demonstrates a personal portfolio with interactive components, contact form functionality, and responsive design.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared components:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Animation**: Framer Motion for smooth animations and transitions

## Key Components

### Frontend Architecture
- **Component-based architecture** using React functional components with hooks
- **TypeScript** for type safety throughout the application
- **Shadcn/ui components** providing a consistent design system with Radix UI primitives
- **Responsive design** with mobile-first approach using Tailwind CSS
- **Client-side routing** handled by Wouter for lightweight navigation
- **State management** via React Query for server state and React hooks for local state
- **Animation system** powered by Framer Motion for engaging user interactions

### Backend Architecture
- **Express.js server** with TypeScript for type-safe API development
- **RESTful API design** with proper error handling and validation
- **Modular route organization** separating concerns between different endpoints
- **Storage abstraction layer** allowing for easy swapping between in-memory and database storage
- **Request logging middleware** for development and debugging purposes

### Database Schema
- **Contact messages table** storing form submissions with validation
- **Drizzle ORM** providing type-safe database operations and migrations
- **PostgreSQL dialect** configured for production deployment
- **Schema-first approach** with shared types between frontend and backend

## Data Flow

1. **Client requests** are handled by the Express server with middleware for logging and error handling
2. **Form submissions** are validated using Zod schemas shared between client and server
3. **Database operations** are abstracted through a storage interface, currently implemented with in-memory storage but designed for easy PostgreSQL integration
4. **API responses** are consumed by React Query for efficient data fetching and caching
5. **UI updates** are managed through React state and React Query's built-in optimistic updates

## External Dependencies

### Core Framework Dependencies
- **React & React DOM**: Frontend framework and rendering
- **Express**: Backend web framework
- **Drizzle ORM**: Type-safe ORM for PostgreSQL
- **@neondatabase/serverless**: PostgreSQL connection for serverless environments

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Unstyled, accessible UI components
- **Framer Motion**: Animation library for smooth interactions
- **Lucide React**: Icon library

### Developer Experience
- **TypeScript**: Type safety across the stack
- **Vite**: Fast build tool and development server
- **ESBuild**: Fast JavaScript bundler for production builds
- **Wouter**: Lightweight client-side router

### Form Handling and Validation
- **React Hook Form**: Performant form library
- **Zod**: Schema validation library
- **@hookform/resolvers**: Integration between React Hook Form and Zod

## Deployment Strategy

The application is configured for flexible deployment options:

- **Development**: Vite dev server with Express backend running concurrently
- **Production**: Static frontend build served by Express with API routes
- **Database**: PostgreSQL via Neon or similar serverless database provider
- **Environment**: Designed for deployment on platforms like Replit, Vercel, or traditional hosting

Key deployment configurations:
- **Build process**: Frontend built to `dist/public`, backend bundled to `dist/index.js`
- **Environment variables**: `DATABASE_URL` required for PostgreSQL connection
- **Database migrations**: Managed through Drizzle Kit
- **Static asset serving**: Express serves built frontend in production

The architecture supports both development and production environments with proper environment detection and configuration management.

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 03, 2025. Initial setup