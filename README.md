# Ahalada Rao.V & Associates

A static website built with **HTML and CSS only**. No Nuxt, Vue, TypeScript, JavaScript, npm dependencies, or build step is required.

## Open the website

Open `index.html` in a browser. All navigation uses relative links, so the site also works directly from your computer.

## Pages

- `index.html` — home
- `about.html` — firm, mission, values, and expertise
- `services.html` — all 37 services across eight practice areas
- `team.html` — leadership and departments
- `contact.html` — address, office hours, telephone, and WhatsApp
- `appointments.html` — arrange a consultation by telephone or WhatsApp
- `assets/css/main.css` — shared responsive styles

The mobile menu uses native HTML `details` and `summary` elements. Contact and appointment forms, email links, email APIs, SMTP configuration, and mail dependencies have been removed. Phone links open the visitor's calling application; WhatsApp links open WhatsApp. No appointment is submitted or confirmed by the website.

## Edit

Edit page content directly in its HTML file and styles in `assets/css/main.css`. Headers and footers are plain HTML; update their shared information in all six pages. The footer year is static.

## Publish

Upload the six HTML files, `assets/css/main.css`, `robots.txt`, and `sitemap.xml` to any static web host. No build command is needed. Do not upload local development folders or `.env` files.

GitHub Pages publishes this site at **https://akshithareddy1105.github.io/var/** from the root of the `main` branch. Push changes to `main` to publish updates. `.nojekyll` serves the files without Jekyll processing.

The sitemap uses the GitHub Pages URL; update it and `robots.txt` if the domain changes. On a GitHub project site, crawler rules are read from the account domain's root `/robots.txt`, not this project's `/var/robots.txt`; the sitemap itself remains available at `/var/sitemap.xml`. Secondary pages use `.html` URLs.
