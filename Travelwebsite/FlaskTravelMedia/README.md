# South India Explorer

## Overview

South India Explorer is a Flask-based travel website showcasing the beauty and cultural richness of South India's destinations. The application provides visitors with detailed information about various South Indian states including Kerala, Karnataka, Tamil Nadu, and Goa, featuring stunning photography galleries, destination descriptions, and a contact form for trip planning inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a template-based architecture with Jinja2 templating:
- **Base Template System**: Uses `base.html` as the foundation template with consistent navigation, styling, and layout structure
- **Component-Based Design**: Individual destination pages (kerala.html, karnataka.html, tamil_nadu.html, goa.html) extend the base template
- **Responsive Design**: Built with Bootstrap 5 for mobile-first responsive layouts
- **Static Assets**: CSS and JavaScript files organized in the static directory with custom styling and interactive features

### Backend Architecture
The application follows a simple Flask MVC pattern:
- **Main Application**: `app.py` serves as the Flask application factory with basic configuration
- **Route Handling**: `routes.py` contains all URL endpoints and view logic, managing destination data and form processing
- **Template Rendering**: Uses Flask's built-in Jinja2 templating for dynamic content generation
- **Static Content Management**: Destinations and photo galleries are managed through Python dictionaries rather than a database

### Data Storage Solutions
Currently uses in-memory data storage:
- **Static Data Structure**: Destination information and photo URLs are stored as Python dictionaries in routes.py
- **No Database**: The application currently operates without persistent storage, suitable for a content-focused travel showcase
- **Scalability Consideration**: The architecture can easily accommodate database integration when dynamic content management becomes necessary

### User Interface Components
- **Interactive Elements**: Custom JavaScript for animations, smooth scrolling, image galleries, and form interactions
- **Visual Framework**: Combines Bootstrap 5 with custom CSS using CSS variables for consistent theming
- **Animation Library**: Includes AOS (Animate On Scroll) for entrance animations and GLightbox for image galleries
- **Typography**: Uses Google Fonts (Poppins and Playfair Display) for modern, readable typography

## External Dependencies

### Frontend Libraries
- **Bootstrap 5**: Primary CSS framework for responsive layouts and components
- **Font Awesome 6**: Icon library for UI elements and visual enhancement
- **Google Fonts**: Custom typography (Poppins and Playfair Display fonts)
- **AOS (Animate On Scroll)**: Scroll-triggered animations for enhanced user experience
- **GLightbox**: Lightbox gallery functionality for image viewing

### Backend Framework
- **Flask**: Core web framework for Python-based web application development
- **Jinja2**: Template engine (included with Flask) for dynamic HTML generation

### Content Delivery
- **Pixabay CDN**: External image hosting for destination photography galleries
- **YouTube Embed**: Video background integration for hero sections
- **Bootstrap CDN**: External delivery of CSS and JavaScript frameworks
- **Font CDN**: External delivery of custom fonts and icon libraries

### Development Tools
- **Python Environment**: Requires Python 3.x runtime environment
- **Environment Variables**: Uses environment-based configuration for session secrets and deployment settings