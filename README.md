```markdown
# Gem Price Estimator ✨  
**Ultra-Realistic Gemstone Valuation Tool for Sri Lankan & Global Gems**  

Live Demo: https://your-username.github.io/gem-price-estimator  
(Replace with your actual GitHub Pages / Vercel link)

---

### Features
- **100+ Real Gem Types** (Sri Lankan Blue Sapphire, Padparadscha, Ruby, Emerald, etc.)  
- **4C Evaluation**: Color • Clarity • Cut • Carat Weight  
- **Real-time USD to LKR Conversion** (live exchange rate)  
- **Instant Currency Toggle** (USD to LKR — no re-calculation needed)  
- **Size Premium Logic** (larger stones = higher $/ct — just like real market)  
- **Export as PDF Report** (professional gem valuation document)  
- **Mobile-First & Fully Responsive** (works on phones, tablets, desktops)  
- **No backend needed** — 100% static, host on GitHub Pages or Vercel  
- **Fine Weight Input** (0.01 ct precision — 0.11, 0.26, 0.97 ct supported)

---

### Perfect For
- Gem dealers in Ratnapura & Colombo  
- Tourists buying gems in Sri Lanka  
- Online gem sellers  
- Jewelry designers  
- Collectors & investors

---

## Live Preview
![Gem Price Estimator Screenshot](https://raw.githubusercontent.com/your-username/gem-price-estimator/main/screenshot.jpg)  
*(Add a screenshot.png in your repo root and update the link above)*

---

## How to Use (Demo)
1. Select gem (e.g., **Blue Sapphire (Sri Lankan)**)  
2. Enter weight (e.g., `0.68 ct`)  
3. Choose **Color**, **Clarity**, **Cut**  
4. Toggle between **USD** and **LKR** instantly  
5. Click **"Export Report"** to get a professional PDF

---

## Tech Stack
- HTML5 + CSS3 (Glassmorphism UI)  
- Vanilla JavaScript (ES6+)  
- [jsPDF](https://github.com/parallax/jsPDF) for PDF export  
- Live exchange rate via [exchangerate-api.com](https://www.exchangerate-api.com)

---

## Project Structure
```
gem-price-estimator/
├── index.html
├── style.css
├── data.js          ← Gem prices & multipliers
├── script.js        ← All logic + live currency toggle
├── screenshot.jpg   ← (optional) for README
└── README.md
```

## Customize Prices
Edit `data.js`:
```js
'Blue Sapphire (Sri Lankan)': { basePrice: 2500 },  // $/ct average 2025
'Padparadscha Sapphire': { basePrice: 20000 },
```

Sources: Gemdaia, Praveen Gems, IGS, Gemval (2025 data)

---

## Add More Gems
Just add to `gemsData` object in `data.js`:
```js
'Cat\'s Eye Chrysoberyl (Sri Lankan)': { basePrice: 800 },
'Red Spinel': { basePrice: 3000 },
```

---

## Star History
[![Star History Chart](https://api.star-history.com/svg?repos=your-username/gem-price-estimator&type=Date)](https://star-history.com/#your-username/gem-price-estimator)

---

## License
MIT © 2025 – Free to use, modify, and sell gems with it!

---

**Made with love for Sri Lanka's gem legacy**  
From Ratnapura to the world