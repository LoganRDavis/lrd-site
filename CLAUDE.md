# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static personal website for loganrdavis.com. Pure HTML/CSS with no build system, no JavaScript framework, and no package manager.

## Commands

- `make serve` — Local dev server at http://localhost:8000
- Pushing to `master` deploys automatically via Cloudflare Pages

## Architecture

- **Pages**: `index.html` (home), `background.html` (work/education history), `portfolio.html` (project showcase), `404.html`
- **Styles**: `css/main.css` (shared across main pages, based on HTML5 Boilerplate), `css/404.css` (standalone 404 page)
- **Components**: `js/components.js` defines `<site-header>` and `<site-footer>` web components, used by all main pages
- Header/footer/nav are defined once in the web components — edit `js/components.js` to change them
- Font: Open Sans, self-hosted in `fonts/` (woff2)
- Responsive design with a hamburger menu for mobile, desktop nav bar otherwise

## Key Patterns

- All asset paths use absolute paths from root (e.g., `/css/main.css`, `/images/...`)
- Social/external links: GitHub, LinkedIn, resume PDF, and a Google Forms contact form
- Images are stored in `images/` with subdirectories for logos (`images/logo/`) and drone photos (`images/drone/`)
- Deploy excludes files listed in `.cfignore` (dotfiles, `README.md`, `CLAUDE.md`, `Makefile`, `colors.txt`)
