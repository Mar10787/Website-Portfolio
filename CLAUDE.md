# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website project with a React/TypeScript frontend. The project is in early development stages with the initial React app scaffold in place.

## Repository Structure

- **Frontend**: Located in `/frontend/` directory
  - React 19 application with TypeScript
  - Standard Create React App structure
  - Currently contains default React app template

## Development Commands

### Frontend Development
All commands should be run from the `/frontend/` directory:

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject from Create React App (irreversible)
npm run eject
```

## Architecture and Development Plan

### Component Priority System
The project follows an Agile development approach with components broken down into 4 priority levels:

**Priority 1 (Foundation)**:
- Theme Toggle (dark/light mode) - Done
- Location Component (static display) - Could do in Priority 2
- Project Card (reusable layout)
- Header (title, subtitle, social media icons) - Done
- Footer (contact integration section) - Done

**Priority 2 (Core Features)**:
- Contact Section (form with name, email, message)
- Music Box ("Now Playing" widget, future Spotify API integration)
- Fitness Achievements Board (milestone display)
- Smiski Components (static positioning, future animations)

**Priority 3 (Interactive Features)**:
- Gallery Section (project cards container)
- Gallery Navigation (scrolling functionality)
- Search Bar (basic functionality before NLP)
- CV Reveal Toggle (circular button)

**Priority 4 (Advanced Features)**:
- CV Reveal Functionality (expand/collapse with gallery integration)
- Search Bar NLP Integration (advanced search with gallery connection)
- Smiski Dark Mode Glow Effects (advanced animations)

### Tech Stack
- **Frontend**: React 19 + TypeScript
- **Future Backend**: Python/FastAPI for ML integration
- **Deployment**: Vercel

## Development Guidelines

### TypeScript Configuration
- Strict mode enabled
- ES5 target with modern library support
- React JSX transform configured

### Testing
- Jest and React Testing Library configured
- Run tests with `npm test` from frontend directory

### Code Organization
- Follow React component-based architecture
- Implement components according to priority system outlined in README
- Start with static implementations before adding interactivity