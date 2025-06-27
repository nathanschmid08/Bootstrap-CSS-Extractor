# Bootstrap-CSS-Extractor

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Platform](https://img.shields.io/badge/Platform-Chrome%20Extension-2bbc8a?style=for-the-badge&logo=googlechrome)](https://developer.chrome.com/docs/extensions/)
[![Bootstrap](https://img.shields.io/badge/Framework-Bootstrap-7952b3?style=for-the-badge&logo=bootstrap)](https://getbootstrap.com/)
[![CSS](https://img.shields.io/badge/Extracts-CSS-blue?style=for-the-badge&logo=css3)](#)

> A Chrome Extension that extracts the loaded Bootstrap CSS from any website using a CDN link — with full pseudo-class support and clean output.

## 🧠 What It Does

**Bootstrap CSS Extractor** is a lightweight Chrome extension that:
- Detects external `<link>` elements referencing Bootstrap via CDN (e.g. jsDelivr, unpkg)
- Fetches and downloads the complete CSS file as a `.css` file
- Includes all pseudo-classes (`:hover`, `:focus`, etc.) as defined in Bootstrap
- Works on most live websites using Bootstrap 3, 4, or 5

---

## 🔍 How It Works

1. Scans the current page for `<link rel="stylesheet">` elements
2. Filters known Bootstrap CDN URLs
3. Uses `fetch()` to download the raw CSS
4. Creates a `Blob` from the content and triggers a download in your browser

---

## ✅ Features

- ✅ Works with Bootstrap 3/4/5 from any major CDN  
- ✅ Full support for all selectors and pseudo-classes  
- ✅ Clean and minimal output file  
- ✅ No server involved – runs entirely in the browser  
- ✅ One-click extraction

---

## ⚠️ Limitations

- Does not work for inline styles or self-hosted Bootstrap builds  
- Requires CORS to be enabled by the CDN (works for jsDelivr, unpkg, cdnjs)  
- Only scans the top-level frame (not iframes)

---

## 🚀 Installation

1. Clone or download this repo
2. Go to `chrome://extensions/`  
3. Enable **Developer Mode**
4. Click **Load unpacked** and select the extension folder
5. Visit a site that uses Bootstrap via CDN and click the extension icon to extract

---

## 📊 Difference from Tailwind CSS Extractor

| Property                         | **Tailwind CSS Extractor**                                              | **Bootstrap CSS Extractor**                                                  |
| -------------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| **Goal**                         | Extracts **dynamically generated** Tailwind CSS                          | Extracts **loaded Bootstrap CSS** from the CDN                                |
| **CSS Source**                   | `<style>` tags in the DOM (injected dynamically, e.g., by Tailwind JIT) | `<link>` tags to external CDNs (e.g., `cdn.jsdelivr.net`)                     |
| **Detection Method**             | Reads all `<style>` tags and saves their content                        | Finds `<link rel="stylesheet">` and downloads the content via `fetch()`       |
| **Scope of CSS**                 | Usually **reduced** due to purge/JIT generation                         | Always the **full Bootstrap CSS** (more code)                                 |
| **Pseudo-Class Support**         | Only if present inside the `<style>` tag (e.g., `:hover`, `:focus`)     | **All pseudo-classes guaranteed**, since Bootstrap defines them               |
| **Challenge**                    | Detecting dynamically created, possibly minified style blocks           | Handling CORS/SRI issues, cleanly identifying CDNs                            |
| **Typical Use Case**             | Tailwind projects with inlined styles (e.g., Vite, Astro, Next.js)      | Classic pages using Bootstrap loaded via `<link>`                             |
| **CSS File Size**                | Very small (e.g., 5–50 KB, depending on the page)                       | Large (e.g., 200+ KB for full Bootstrap)                                      |
