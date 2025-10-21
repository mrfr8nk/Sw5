# St. Mary's High School Website

## Overview

St. Mary's High School Website is a comprehensive web platform that serves as the digital presence for an educational institution. The platform provides information about the school's academics, faculty, admissions, and various services for students, parents, and staff. It features a modern, responsive design with light/dark theme support and includes interactive elements like staff directories, contact forms, and administrative dashboards.

The website serves multiple user types including prospective students and parents seeking information about the school, current students accessing their dashboards and reports, teachers managing student data and reports, and administrators overseeing the entire system.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

**Frontend Architecture**
The application uses a multi-page static website architecture built with vanilla HTML, CSS, and JavaScript. Each page is self-contained with its own styling and functionality, following a consistent design system with CSS custom properties for theming. The frontend implements a responsive design that adapts to different screen sizes and includes interactive components like modals, forms, and navigation menus.

**Authentication and User Management**
The system integrates with Firebase Authentication to handle user registration and login for different user types (students, teachers, administrators). User sessions are managed client-side with role-based access control determining which features and pages users can access.

**Database and Data Storage**
Firebase Firestore serves as the primary database for storing user profiles, student records, teacher information, academic reports, and application data. The database is structured to support different collections for each entity type with appropriate security rules and data validation.

**File Storage and Document Management**
Firebase Storage handles file uploads including student documents, profile images, and generated reports. The system supports PDF generation for reports and applications using client-side libraries like jsPDF and html2pdf.

**Design System and Theming**
The application implements a comprehensive design system with CSS custom properties defining colors, spacing, typography, and transitions. It supports both light and dark themes with smooth transitions between modes. The design follows the school's branding with a navy blue primary color (#003366) and gold secondary color (#FFD700).

**Page Structure and Routing**
The website uses static HTML pages with Vercel routing configuration to provide clean URLs. Key sections include the main website pages (about, academics, admissions, contact), user authentication pages (login/signup for different user types), and dashboard pages for different user roles.

**Interactive Features**
The system includes various interactive components such as staff directory with modal details, contact forms with email integration, application forms with validation, administrative dashboards for managing users and data, and student/teacher portals for accessing academic information.

## External Dependencies

**Firebase Services**
- Firebase Authentication for user management and security
- Firebase Firestore for real-time database operations
- Firebase Storage for file uploads and document management

**Frontend Libraries and Frameworks**
- Font Awesome for iconography throughout the application
- Google Fonts (Poppins) for consistent typography
- SweetAlert2 for enhanced user notifications and confirmations
- Chart.js for data visualization in dashboards
- Animate.css for smooth animations and transitions

**PDF and Document Generation**
- jsPDF for client-side PDF generation
- jsPDF AutoTable plugin for formatted table generation in PDFs
- html2pdf.js for converting HTML content to PDF documents

**Development and Deployment**
- Vercel for hosting and deployment with routing configuration
- Node.js serve package for local development server
- Package.json configuration for dependency management

**External Integrations**
- WhatsApp integration for direct communication features
- Email services for contact form submissions and notifications
- CDN services for external assets and libraries

The architecture prioritizes user experience with fast loading times, responsive design, and intuitive navigation while maintaining security through Firebase's authentication and database rules. The modular structure allows for easy maintenance and feature additions as the school's needs evolve.