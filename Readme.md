**Animated Profile Card**

A small, customizable, client-side profile card generator with live preview and download support. This project demonstrates a lightweight interactive UI using plain HTML, CSS, and JavaScript.

**Demo**
- **Open:** [index.html](index.html)

**Highlights**
- **Live preview:** Edit name, role, image URL and bio to update the card instantly.
- **Theme & style controls:** Switch light/dark theme, choose gradients, and select templates.
- **Download:** Export the card as a PNG using the included `html2canvas` integration.

**Files**
- [index.html](index.html) — main HTML with the form and the preview card.
- [index.js](index.js) — client-side logic for live preview, theme/gradient/template switching, and download.
- [style.css](style.css) — styles and animations for card templates and themes.

**How to use**
1. Clone or extract the project folder and open [index.html](index.html) in a browser.
2. Use the input fields to enter your `Name`, `Role`, `Image URL`, and `Bio`.
3. Change `Theme`, `Gradient`, or `Template` from the selects to customize the appearance.
4. Click the **Download Card** button to export a PNG of the previewed card.

Notes:
- The project uses the `html2canvas` CDN (included in `index.html`) to capture the card. An internet connection is required for that CDN to load unless you bundle the library locally.

**Code overview**
- `index.html` contains the input form and the preview container with the id `card`.
- `index.js` wires up all interactive behavior:
	- Live preview updates: input listeners set `previewName`, `previewRole`, `previewImg`, and `previewBio`.
	- `animateCard()` triggers a brief CSS `pop` animation when values change.
	- Theme, gradient, and template `<select>` elements toggle classes on the `card` element to change styles.
	- `downloadCard()` uses `html2canvas(card)` to render and download the card as `profile-card.png`.

Key DOM ids and their roles:
- `name`, `role`, `image`, `bio` — form inputs.
- `theme`, `gradient`, `template` — selects for appearance.
- `card` — preview container that receives CSS classes like `template1`, `grad1`, `light`, `dark`.
- `previewName`, `previewRole`, `previewImg`, `previewBio` — preview elements updated by JavaScript.

**Customization tips**
- Add more gradients or templates by editing `style.css` and adding matching class names (e.g., `grad4`, `template3`).
- To provide offline exports, download `html2canvas` and reference it locally instead of the CDN.
- Validate image URLs or provide a local image picker if you want to restrict external requests.

**Accessibility & UX**
- Inputs are simple text fields; consider adding `label` elements linked with `for` attributes for improved screen reader support.
- Ensure color contrast for chosen gradients/themes to keep text readable.

**Development**
- No build step required — just open [index.html](index.html) in a modern browser.
- To modify functionality, edit [index.js](index.js) and refresh the page.

**Contributing**
- Fork the repo, make changes, and open a pull request. Small, focused changes are preferred (new templates, accessibility fixes, offline bundling of dependencies).

**License**
This project is provided under the MIT License. Use, modify, and distribute freely.

**Contact / Credits**
- Created as a compact demo project showcasing DOM-driven UI and client-side exporting.
