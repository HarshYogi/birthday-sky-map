# Aakansha — The Night You Were Born ✦

This is a romantic, mobile-first interactive birthday sky for Aakansha.

## Personal details
- Name: Aakansha
- Date: 30 October 2001
- Birthplace: Banaras (Varanasi), Uttar Pradesh, India
- Zodiac: Scorpio
- Exact birth time: unknown

## What is new in v2

- Cinematic opening
- Three interaction modes:
  - Wander
  - Constellations
  - Hidden notes
- Tap stars for astronomy + personal messages
- Dedicated Scorpio / Scorpius experience
- Five hidden romantic notes
- Progress tracker for finding the notes
- Final “One last thing…” reveal
- Personal birthday letter
- Full-night time slider because birth time is unknown
- Play-through-the-night mode
- Touch-first layout for iPhone Safari
- No backend, no API key and no database

## Deploy

Upload `index.html`, `style.css` and `app.js` to any static host.

GitHub Pages:
1. Create a new GitHub repository.
2. Upload the three files.
3. Settings → Pages.
4. Deploy from `main` / root.
5. Send the resulting HTTPS link.

Netlify or Cloudflare Pages also work with no build command.

## Make it truly yours

The five hidden messages live in `app.js` in the `NOTES` array. Replace those generic lines with memories only the two of you understand.

The final letter is in `index.html` inside `#letter`. This is the part I strongly recommend you rewrite in your own voice.

For example, replace “— yours” with your nickname/signature.

## Important astronomy note

The exact birth time is unknown, so this site intentionally does not pretend otherwise. The slider covers 6 PM to 6 AM around the birthday. The sky is calculated for Banaras.

The star catalogue is a curated set of bright named stars rather than a full astronomical catalogue. This keeps the experience fast and visually controlled on an iPhone.

For a future “professional planetarium” version, the sky layer can be replaced/augmented with Aladin Lite, which is a browser-based interactive sky atlas and can access astronomical catalogue/database information. See the official Aladin documentation/FAQ.
