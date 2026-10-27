# Interactive Marathi Wedding Invitation

A responsive, traditional temple-style Marathi wedding invitation built with HTML, CSS and vanilla JavaScript.

## Run locally
1. Extract the ZIP.
2. Open the folder in VS Code.
3. Recommended: use the **Live Server** extension and open `index.html` through Live Server.
4. You can also open `index.html` directly in a modern browser. Some browser features such as clipboard sharing may require localhost or HTTPS.

## Customize wedding details
Edit `js/config.js`. Replace:
- Bride and groom names.
- Parent and family names.
- Wedding date and time.
- Events and their bilingual descriptions.
- Venue name, address, coordinates and Google Maps URL.
- Inviting family names.

The example details and date are placeholders. Replace them before sharing the invitation.

### Date and timezone
Use `YYYY-MM-DD` for `wedding.date`, `HH:mm` for `wedding.time` (24-hour clock), and an IANA timezone such as `Asia/Kolkata` for `wedding.timeZone`. Update the display date/time strings in both Marathi and English too.

## Change the entire color theme
At the top of `css/style.css`, edit the variables in `:root`, especially:
- `--color-primary`
- `--color-primary-dark`
- `--color-gold`
- `--color-background`
- `--color-paper`
- `--color-text`

The theme is centralized so these variables control the main colors throughout the design.

## Typography
The website loads Tiro Devanagari Marathi, Yatra One, Mukta and Cormorant Garamond from Google Fonts. Internet access is required for these hosted fonts. For a fully self-hosted website, download licensed font files and configure `@font-face` in the CSS.

## Venue map
Set `venue.mapsUrl` to a Google Maps directions URL or set `latitude` and `longitude`. Add the complete address. A map preview is shown only when a real location is configured.

## Couple illustration
The initial couple art is a lightweight inline SVG in `index.html`, styled with CSS animations. You can replace the SVG with licensed/custom artwork if desired.

## Optional background music
Add your own properly licensed instrumental MP3 at `assets/audio/wedding-instrumental.mp3`. Music does not autoplay; guests must press the music button.

## Scratch-to-reveal heart
The date uses the Canvas API with pointer events, supporting mouse and touch. Guests can also use the accessible “Reveal date now” button.

## Notes
- No frontend framework is used.
- No actual wedding venue or family details have been assumed.
- Test the final site on mobile and desktop before sharing publicly.
