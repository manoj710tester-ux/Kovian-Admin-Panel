# Kovaion Admin Panel - Project Documentation

## Overview

Kovaion  Admin Panel is a comprehensive Customer Relationship Management (CRM) system designed to help businesses manage their leads, contacts, deals, and customer interactions efficiently. Built with modern web technologies, this application provides a clean, intuitive interface for tracking sales pipelines, managing customer relationships, and analyzing business performance through interactive dashboards and visualizations.

The application is currently deployed and accessible at: **[https://main.d1nl2ov9mo165l.amplifyapp.com/dashboard](https://main.d1nl2ov9mo165l.amplifyapp.com/dashboard)**
The apllication is designed in Figma : https://www.figma.com/design/3GnJbvwoB7cU2E15qhKeFX/Kovaion--task?node-id=0-1&t=AUB8AA4s0lWH5KCP-1
## Features

### Dashboard
The dashboard serves as the central hub, providing a comprehensive overview of key business metrics:
- **Performance Cards**: Quick insights into Total Leads, Closed Leads, Open Leads, and Conversion Rates
- **Interactive Graphs**: Visual representation of lead trends over time with area charts
- **Bar Charts**: Lead success metrics displayed in an easy-to-understand format
- **Data Tables**: Recent leads displayed in a sortable, filterable table format
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices

### Leads Management
A dedicated section for managing potential customers and sales opportunities:
- Lead information cards with detailed contact information
- Lead status tracking (Open, In Progress, Completed, etc.)
- Lead owner assignment
- Contact details including email, phone, and mobile numbers
- Company and industry information
- Lead source tracking
- Creation and last contact date tracking

### Contacts
Comprehensive contact management system for maintaining customer relationships:
- Contact database with search and filter capabilities
- Contact details and interaction history
- Integration with other modules (deals, meetings, tasks)

### Deals
Sales pipeline management to track deals from initiation to closure:
- Deal stages and status tracking
- Deal value and probability tracking
- Associated contacts and companies
- Deal timeline and activity history

### Tasks
Task management system for organizing work and follow-ups:
- Create, assign, and track tasks
- Task priorities and due dates
- Task status management
- Integration with leads, contacts, and deals

### Documents
Centralized document management:
- Upload and organize documents
- Document categorization
- Link documents to leads, contacts, or deals
- Document version control

### Projects
Project management capabilities:
- Project creation and tracking
- Project status and milestones
- Team collaboration features
- Project timeline visualization

### Meetings
Meeting scheduling and management:
- Schedule and track meetings
- Meeting invitations
- Meeting notes and follow-ups
- Integration with calendar systems

### Settings
Application configuration and user preferences:
- User profile management
- System settings
- Notification preferences
- Customization options

## Technology Stack

### Frontend
- **React 18.2.0**: Modern UI library for building interactive user interfaces
- **TypeScript 5.4.5**: Type-safe JavaScript for better code quality and maintainability
- **Vite 5.4.10**: Next-generation frontend build tool for fast development and optimized production builds
- **React Router DOM 6.22.0**: Client-side routing for single-page application navigation
- **Tailwind CSS 4.1.17**: Utility-first CSS framework for rapid UI development
- **SCSS/Sass**: CSS preprocessor for enhanced styling capabilities

### Backend & Infrastructure
- **AWS Amplify**: Full-stack cloud platform for hosting and backend services

### Development Tools
- **ESLint**: Code linting and quality assurance
- **TypeScript ESLint**: TypeScript-specific linting rules
- **PostCSS**: CSS processing and transformation
- **Autoprefixer**: Automatic vendor prefixing for CSS

## Project Structure

```
Kovian-Admin-Panel/
├── amplify/                 # AWS Amplify backend configuration
│   ├── auth/               # Authentication resources
│   ├── data/               # Database schema and resources
│   └── backend.ts          # Backend configuration
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons, and other static assets
│   │   ├── nav-icon/      # Navigation icons (active/inactive states)
│   │   └── social/        # Social media icons
│   ├── components/        # Reusable React components
│   │   ├── header/        # Application header component
│   │   ├── Leads/         # Lead-related components
│   │   └── navigation/    # Side navigation component
│   ├── pages/             # Page components (route views)
│   │   ├── Dashboard.tsx
│   │   ├── Leads.tsx
│   │   ├── Contacts.tsx
│   │   ├── Deals.tsx
│   │   ├── Task.tsx
│   │   ├── Documents.tsx
│   │   ├── Projects.tsx
│   │   ├── Meeting.tsx
│   │   └── Settings.tsx
│   ├── UI/                # UI component library
│   │   ├── Attachments/   # File attachment component
│   │   ├── BarChart/     # Bar chart visualization
│   │   ├── Button/       # Button component
│   │   ├── Card/         # Card component for metrics
│   │   ├── Email/        # Email interface component
│   │   ├── Graph/        # Line/area graph component
│   │   ├── InvitedMeetings/ # Meeting invitations
│   │   ├── LeadsInformation/ # Lead detail display
│   │   ├── Notes/        # Notes component
│   │   ├── OpenActivities/ # Activity tracking
│   │   ├── RelatedList/  # Related items list
│   │   ├── Social/       # Social media links
│   │   └── Table/        # Data table component
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.scss        # Global styles
├── amplify.yml           # AWS Amplify build configuration
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite build configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher recommended)
- **npm** (comes with Node.js) or **yarn**
- **Git** for version control
- **AWS Account** (for deployment to AWS Amplify)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Kovian-Admin-Panel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure AWS Amplify** (if deploying)
   - Ensure you have AWS credentials configured
   - The backend resources (auth, data) will be automatically provisioned during deployment

### Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

The development server includes:
- Hot Module Replacement (HMR) for instant updates
- Fast refresh for React components
- Source maps for debugging
- Network access for mobile device testing (configured in `vite.config.ts`)

### Building for Production

To create a production build:

```bash
npm run build
```

This command will:
1. Run TypeScript type checking (`tsc`)
2. Build the application with Vite (`vite build`)
3. Output optimized files to the `dist/` directory

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

### Code Quality

The project includes ESLint for code quality:

```bash
npm run lint
```

## Deployment

### AWS Amplify Deployment

The application is configured for deployment on AWS Amplify. The deployment process is automated through the `amplify.yml` configuration file.

#### Deployment Process

1. **Connect Repository**: Connect your Git repository to AWS Amplify Console
2. **Automatic Builds**: Amplify will automatically build and deploy on every push to the connected branch

#### Build Configuration

The `amplify.yml` file defines the build process:

- **Backend Phase**: Installs dependencies and deploys backend resources using `ampx pipeline-deploy`
- **Frontend Phase**: Installs dependencies and builds the React application

#### Live Environment

The application is currently deployed at:
**https://main.d1nl2ov9mo165l.amplifyapp.com/dashboard**

This is the development environment. Production deployments can be configured for different branches.

### Environment Variables

If you need to configure environment-specific variables, you can set them in the AWS Amplify Console under App Settings > Environment variables.

## Key Components

### Dashboard Components

- **Card Component**: Displays key metrics with percentage changes and status indicators
- **Graph Component**: Interactive area chart for visualizing trends over time
- **BarChart Component**: Bar chart visualization for comparing metrics
- **Table Component**: Sortable and filterable data table for displaying lead information

### Navigation

The application features a responsive sidebar navigation with:
- Icon-based menu items
- Active state indicators
- Mobile-responsive hamburger menu
- Smooth transitions and animations

### Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience with sidebar navigation
- **Tablet**: Optimized layout with collapsible navigation
- **Mobile**: Touch-friendly interface with hamburger menu

## Development Guidelines

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Maintain component modularity
- Follow the existing file structure
- Use SCSS for component-specific styles
- Use Tailwind CSS for utility classes

### Component Structure

Each component should:
- Be placed in its own directory
- Include a TypeScript file (`.tsx`)
- Include a stylesheet file (`.scss`)
- Export as default
- Use TypeScript interfaces for props

### Styling Guidelines

- Use Tailwind CSS for layout and utility classes
- Use SCSS for component-specific complex styles
- Follow BEM naming convention for SCSS classes
- Maintain consistent spacing and color schemes

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Ensure all dependencies are installed: `npm install`
   - Check TypeScript errors: `npm run build`
   - Verify Node.js version compatibility

2. **Mobile Access Issues**
   - Ensure the dev server is configured with `host: '0.0.0.0'` in `vite.config.ts`
   - Check Windows Firewall settings for port 5173
   - Verify both devices are on the same network

3. **AWS Amplify Deployment Issues**
   - Check build logs in Amplify Console
   - Verify backend resources are properly configured
   - Ensure environment variables are set correctly

### Getting Help

For issues related to:
- **AWS Amplify**: Check [AWS Amplify Documentation](https://docs.amplify.aws/)
- **React**: Refer to [React Documentation](https://react.dev/)
- **Vite**: See [Vite Documentation](https://vitejs.dev/)
- **TypeScript**: Check [TypeScript Documentation](https://www.typescriptlang.org/)

## Future Enhancements

Potential areas for future development:
- Real-time notifications
- Advanced analytics and reporting
- Email integration
- Calendar synchronization
- Mobile app version
- Advanced search and filtering
- Customizable dashboards
- API integrations with third-party services
- Export functionality (PDF, Excel)
- Multi-language support

## License

This project is licensed under the MIT-0 License. See the LICENSE file for details.

## Contact & Support

For questions, issues, or contributions, please refer to the project repository or contact the development team.

---

**Last Updated**: December 2024  
**Version**: 1.0.0  
**Live Application**: [https://main.d1nl2ov9mo165l.amplifyapp.com/dashboard](https://main.d1nl2ov9mo165l.amplifyapp.com/dashboard)

