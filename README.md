# Ile Epo Market — Environmental Reporting

A responsive, single-page environmental report. Plain HTML, CSS and JavaScript; no build step or dependencies to install.

## Preview locally

Run `python3 -m http.server 8000` in this folder and open http://localhost:8000.

## Publish on GitHub Pages

1. Upload this folder's files, including the five JPEG photographs, to a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select your branch (usually `main`) and **/ (root)**, then save.

All local assets use relative paths, so the page works at a GitHub Pages repository URL as well as a custom domain. `.nojekyll` ensures the files are served as a static site.

## Add YouTube videos

Open `script.js` and update the `id` value at the top with your YouTube video ID. For example, in `https://www.youtube.com/watch?v=abcdefghijk`, the ID is `abcdefghijk`. The video slot automatically becomes a lazy-loaded, privacy-enhanced YouTube embed. Update each title in `script.js` and its visible heading and description in `index.html` to match the footage. No videos or interview responses have been invented.

## Edit the report

Article text, photo captions, navigation and video descriptions are in `index.html`. Design and mobile layouts are in `styles.css`. The supplied article is divided into five sections; additional headings and summaries provide navigation and context. No publication date or individual byline has been assumed. The supplied dateline spelling is retained.

Google Fonts improves typography when online; local Georgia and Arial fallbacks keep the report readable offline. Original photographs remain in this folder unchanged. Confirm captions, credits, the rainy-season reference and any reporting updates before publication.
