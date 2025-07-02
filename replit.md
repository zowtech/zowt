# replit.md

## Overview

This is a full-stack web application for ZowT, a cyber forensics company founded by Lucas Alberto, specializing in digital crime investigation and fraud analysis. The application is built as a modern, responsive website showcasing his professional services with both Portuguese and English language support.

The project follows a monorepo structure with a React frontend, Express.js backend, and PostgreSQL database integration using Drizzle ORM. It's designed as a professional portfolio and service inquiry platform for cybersecurity and digital forensics consulting.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: Tailwind CSS with shadcn/ui components for consistent, modern design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Custom CSS variables with dark theme support, professional blue and slate color scheme

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Error Handling**: Centralized error middleware with structured error responses
- **Development**: Hot reloading with Vite integration in development mode

### Data Storage Solutions
- **Primary Database**: PostgreSQL configured through Drizzle ORM
- **Connection**: Neon Database serverless PostgreSQL
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage fallback for development/testing

## Key Components

### Database Schema
- **Contacts Table**: Stores contact form submissions (name, email, message, timestamp)
- **Users Table**: Basic user management structure (username, password, ID)
- **Validation**: Zod schemas for type-safe data validation and API contract enforcement

### API Endpoints
- `POST /api/contact`: Contact form submission with validation and error handling

### UI Components
- **Layout System**: Responsive navigation, hero section, footer
- **Content Sections**: Services, about, case studies, blog, contact
- **Interactive Elements**: Contact forms, language switcher, smooth scrolling navigation
- **Accessibility**: Proper ARIA labels, keyboard navigation, screen reader support

### Internationalization
- **Languages**: Portuguese (primary) and English
- **Implementation**: React Context-based translation system
- **Content**: Professional cybersecurity and legal terminology in both languages

## Data Flow

1. **Client Requests**: React frontend makes API calls through TanStack Query
2. **Server Processing**: Express.js handles requests with validation middleware
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Structured JSON responses with proper error codes
5. **UI Updates**: React Query manages cache updates and UI state synchronization

## External Dependencies

### Core Dependencies
- **UI Framework**: Radix UI primitives for accessible components
- **Database**: Neon Database serverless PostgreSQL
- **Form Handling**: React Hook Form with Zod validation
- **Date Handling**: date-fns for internationalized date formatting
- **Icons**: Lucide React for consistent iconography

### Development Tools
- **Database Migrations**: Drizzle Kit for schema management
- **Build Process**: esbuild for server bundling, Vite for client bundling
- **Development**: tsx for TypeScript execution, hot reloading support

## Deployment Strategy

### Build Process
1. **Client Build**: Vite builds React app to `dist/public`
2. **Server Build**: esbuild bundles Express server to `dist/index.js`
3. **Static Assets**: Client assets served by Express in production

### Environment Configuration
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable
- **Production**: Node.js server serving both API and static files
- **Development**: Vite dev server with Express API proxy

### Production Deployment
- Single Node.js process serving both frontend and backend
- Environment-specific database connections
- Static asset optimization and caching

## Changelog
```
Changelog:
- July 01, 2025: Initial setup
- July 01, 2025: Expanded services to 14 specialized areas with detailed technical capabilities
- July 01, 2025: Enhanced cases section with 10 diverse investigation examples
- July 01, 2025: Updated statistics to reflect 80+ cases and R$ 250M+ traced values
- July 01, 2025: Improved expert profile with 5 specific credentials (Computer Engineering, Forensic Science, Criminology, Cybersecurity, Cyber Defender)
- July 01, 2025: Created dedicated articles page with functional navigation and detailed forensic content
- July 01, 2025: Removed confusing "STATUS: OPERACIONAL" elements from services
- July 01, 2025: Enhanced about section with specialized technical capabilities display
- July 01, 2025: Corrected statistics to R$ 20M+ traced values (user feedback)
- July 01, 2025: Added "Certificado em Análise Forense" and "8+ Anos de experiência" to expert profile
- July 01, 2025: Redesigned articles page with modern layout featuring hero section, featured article grid, and newsletter signup
- July 01, 2025: Improved expert profile section with additional certifications and technical specializations
- July 01, 2025: Updated experience to "10+ ANOS DE EXPERIÊNCIA" (user feedback)
- July 01, 2025: Fixed statistics consistency - 98% success rate throughout (corrected from 99%)
- July 01, 2025: Completely redesigned articles page with minimal layout, numbered articles, and professional typography
- July 01, 2025: Cleaned up hero section layout by removing potentially overlapping elements
- July 01, 2025: Redesigned blog section with compact grid layout, real images from Unsplash, and improved visual hierarchy
- July 01, 2025: Removed "Perícia Forense Digital | Nível Elite" badge from hero section for cleaner layout
- July 01, 2025: Completed English translations for all missing text elements (about section, blog, articles page)
- July 01, 2025: Completely redesigned articles page with modern card-based grid layout, enhanced metadata display, and improved user experience
- July 01, 2025: Rebranded from Lucas Alberto to ZowTech company with custom SVG logo, updated navigation, footer, and all branding elements
- July 01, 2025: Updated brand name to ZOWTECHNOLOGY with new cyber-themed hexagonal logo featuring circuit patterns and digital nodes
- July 01, 2025: Simplified brand to "ZowT" with clean text-based logo, removed complex SVG graphics per user feedback
- July 01, 2025: Enhanced technical capabilities across key services: advanced network traffic analysis, comprehensive SAR/FATF reporting, international AML/CFT compliance, OSINT/SOC/HUMINT operations, and complete corporate due diligence
- July 01, 2025: Corrected "OSINT, SOC & HUMINT" to "OSINT & SOCMINT" and reduced description lengths to fix card layout alignment issues
- July 01, 2025: Removed "FOUNDER & CEO • ZOWT" title from about section, removed "digital" from Due Diligence, and changed "Perícias Judiciais" to "Consultoria em Cibersegurança"
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```