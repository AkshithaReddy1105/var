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

GitHub Pages publishes this site from the root of the `main` branch. The custom domain is **https://ahaladaraoassociates.com/**, configured in `CNAME`. Push changes to `main` to publish updates. `.nojekyll` serves the files without Jekyll processing.

The sitemap and `robots.txt` use the custom domain. Update these files and `CNAME` if the domain changes. Secondary pages use `.html` URLs.

## Cloudflare DNS setup

The domain must use its assigned Cloudflare nameservers. In Cloudflare DNS, configure the following records with TTL Auto and proxy status **DNS only** while GitHub validates the domain and provisions HTTPS:

| Type | Name | Target |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | akshithareddy1105.github.io |

Replace conflicting website A, AAAA, or CNAME records for `@` and `www`; preserve records used by other services, including MX and TXT records. The CNAME target must not include `/var/`.

Once GitHub Pages reports a valid DNS check and its HTTPS certificate is ready, enable **Enforce HTTPS** in the repository's Settings → Pages. GitHub redirects `www` to the apex domain when both are configured. The domain will not serve the site until the DNS setup is complete.

Reference: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
