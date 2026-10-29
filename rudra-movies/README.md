# Rudra Movies — The Story Finder

A mobile-first Next.js starter with an original visual direction: graphite canvas, acid-lime signal colour, editorial typography, abstract poster artwork, language filters, search, collection links and movie detail modals. It is not a clone of the reference website.

## Requirements
- Node.js 18.17+ (or a current LTS release)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Deploy to Vercel
1. Create a GitHub repository and upload these project files.
2. Sign in at https://vercel.com with GitHub.
3. Choose **Add New → Project**, import the repository and keep the default Next.js settings.
4. Press **Deploy**. No environment variables are required for this starter.

## Edit the sample movie data
Open `app/page.tsx`. The `movies` array near the top contains sample titles and metadata. Replace them with verified information you have permission to publish. The current catalogue and ratings are illustrative placeholders, not real movie data.

## Add real poster artwork
The current posters are CSS-made abstract art, so the page does not depend on external poster images. To add poster URLs, extend the `Movie` type with an `image` field and update the poster component to render an image for licensed or otherwise authorized artwork. Avoid uploading copyrighted posters unless you have permission.

## Important
This starter is a front-end demo. Search and language filtering work in the browser, but there is no database, admin authentication, account system, or video hosting. For a production catalogue, add a database and protected admin interface. Link to official/authorized streaming sources; do not host or link to unauthorized copies of copyrighted films.
