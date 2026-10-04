# MoCA project homepage

Static project website for **MoCA: Implicit Social Context Analysis**.

- Website: https://cogaffc.github.io/MoCA/
- Code and annotations: https://github.com/Coder12188/MoCA
- Dataset media: https://huggingface.co/datasets/z4722/Implicit_dataset

This repository contains the website only. The research code and benchmark annotations live in the separate code repository linked above.

## Publish

In this repository, open **Settings → Pages** and select:

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/ (root)**

Save the settings. GitHub Pages will publish `index.html` and the local assets. Subsequent updates to `main` are published automatically. Enabling Pages requires repository administration or Pages-management permission.

No build step, package installation, API keys, or external JavaScript dependencies are required. Asset links are relative so they work under the `/MoCA/` project path. A small local script provides keyboard-accessible scenario tabs and a mobile navigation menu; the complete task figure remains available when JavaScript is disabled.

## Preview

From this directory, run `python -m http.server 8000` and open http://localhost:8000/.

## Files

- `index.html`: project information, author list, benchmark overview, CoDAR, and resource links.
- `styles.css`: responsive desktop and mobile layout.
- `site.js`: progressive enhancement for figure-panel browsing and navigation. This is not a live model-inference demo.
- `assets/`: original MoCA teaser, CoDAR diagram, and website favicon.

The two research figures are reproduced unchanged from `Coder12188/MoCA/assets/image/`. The figures contain illustrative third-party media; the website does not grant additional rights to the underlying media.

The second design iteration takes layout inspiration from the UrbanGround project page (https://urbanground.github.io/): editorial serif headings, numbered sections, alternating warm backgrounds, and wide figure displays. MoCA content, authorship, figures, and resource destinations remain independent; no UrbanGround code, logos, media, or research claims are included.
