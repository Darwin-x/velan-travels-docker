# Velan Travels — Static Website (Dockerized)

A static, client-side travel showcase site for a fictional Tamil Nadu tour operator,
built with plain HTML/CSS/JavaScript and containerized with Docker + Nginx.

## Features
- Single-page app style navigation (Home, Destinations, About, Contact) handled client-side in `app.js`
- Destination catalogue (hill stations, temples, beaches, wildlife) rendered from embedded JS data
- Category filtering on the Destinations page
- Contact form with client-side validation and CSV export of submissions (Admin view)
- SEO metadata: Open Graph tags + JSON-LD structured data (`TravelAgency` schema)

## Tech Stack
- HTML5, CSS3, vanilla JavaScript (no frameworks/build step)
- Nginx (Alpine) — serves static assets in the container
- Docker — packaging and runtime isolation

## Running locally with Docker

Build the image:
```bash
docker build -t velan-travels:latest .
```

Run the container:
```bash
docker run -d -p 8080:80 --name velan-travels velan-travels:latest
```

Visit: http://localhost:8080

Stop and remove:
```bash
docker stop velan-travels && docker rm velan-travels
```

## Project structure
```
.
├── Dockerfile
├── .dockerignore
├── index.html
├── style.css
├── app.js
├── tamilnadu_destinations.csv   # source data used to build the destination list
└── README.md
```

## Notes
- The site is fully static — all destination data is embedded in `app.js`; no backend/API calls at runtime.
- `tamilnadu_destinations.csv` is the original source data used while building the content and is not required by the running container.
