# MineralX Association Website

## Overview

MineralX is a Russian-language landing page for a digital mining and metallurgy association. The application is a full-stack web application built with modern React frontend and Express.js backend, showcasing the association's mission to accelerate digital transformation in the mining and metallurgical industries. The site features company information, digital trends analysis, member company listings, and a contact form for potential partners.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The client-side application uses **React 18** with **TypeScript** for type safety and maintainability. The architecture follows a component-based design pattern with:

- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and data fetching
- **UI Framework**: Radix UI components with Tailwind CSS for styling
- **Form Handling**: React Hook Form with Zod validation schemas
- **Build Tool**: Vite for fast development and optimized production builds

The frontend is structured as a single-page application with modular components organized by feature (navigation, hero section, contact forms, etc.). The application uses a custom design system with mining industry-themed colors and gradients.

### Backend Architecture

The server-side application is built with **Express.js** and follows a RESTful API design:

- **Framework**: Express.js with TypeScript
- **API Structure**: RESTful endpoints for contact form submissions
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Error Handling**: Centralized error handling middleware
- **Request Logging**: Custom middleware for API request logging

The backend uses a layered architecture with clear separation between routes, storage, and business logic. The storage layer is abstracted through an interface pattern, allowing for easy swapping between different storage implementations.

### Data Storage Solutions

The application currently uses an **in-memory storage** implementation for development and demonstration purposes. The storage layer is designed with:

- **Database Schema**: PostgreSQL schema defined with Drizzle ORM
- **Type Safety**: Zod schemas for runtime validation matching database schema
- **Storage Interface**: Abstract interface allowing multiple storage implementations
- **Data Models**: User and ContactSubmission entities with proper relationships

The schema supports user management and contact form submissions with proper timestamp tracking and UUID primary keys.

### Styling and Design System

The application uses a comprehensive design system built on:

- **Tailwind CSS**: Utility-first CSS framework with custom theme configuration
- **Component Library**: Shadcn/ui components built on Radix UI primitives
- **Color Scheme**: Mining industry-themed dark color palette with orange and gold accents
- **Typography**: Inter font family with custom mining-specific CSS classes
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

## External Dependencies

### Database and ORM

- **Drizzle ORM**: Type-safe database ORM with PostgreSQL dialect
- **Neon Database**: PostgreSQL-compatible serverless database (configured but not actively used)
- **Drizzle Kit**: Database migration and schema management tools

### UI and Styling

- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets for social media and branding

### Development and Build Tools

- **Vite**: Fast build tool and development server with React plugin
- **TypeScript**: Static type checking across the entire application
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Integration**: Development environment integration with error overlay and cartographer plugins

### Form Handling and Validation

- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Runtime type validation and schema definition
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation

The application is designed to be easily deployable and scalable, with clear separation of concerns and modern development practices throughout the stack.