<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=100&color=gradient" />
</p>

<h1 align="center">Gem Price Estimator 💎</h1>
 
<p align="center">
  <b>✨ Realistic Gemstone Valuation Tool for Sri Lankan & Global Gems ✨</b><br> 
  <a href="https://gemprice.vercel.app/">🌐 Live Demo</a> • 
  <a href="https://github.com/DMS-Menula/Gem-Price-Estimator/issues">🐛 Report Bug</a> • 
  <a href="https://github.com/DMS-Menula/Gem-Price-Estimator/contribute.md">💡 Contribute</a>
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/DMS-Menula/Gem-Price-Estimator?color=gold&style=for-the-badge" />
  <img src="https://img.shields.io/github/forks/DMS-Menula/Gem-Price-Estimator?color=blue&style=for-the-badge" />
  <img src="https://img.shields.io/github/issues/DMS-Menula/Gem-Price-Estimator?color=brightgreen&style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-MIT-lightgrey?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Made%20in-Sri%20Lanka-orange?style=for-the-badge" />
</p>

---

## 📚 Table of Contents
- [✨ Overview](#-overview)
- [🚀 Features](#-features)
- [🎯 Perfect For](#-perfect-for)
- [🌐 Live Preview](#-live-preview)
- [🧠 How to Use](#-how-to-use-demo)
- [⚙️ Tech Stack](#%EF%B8%8F-tech-stack)
- [📁 Project Structure](#-project-structure)
- [💰 Customize Prices](#-customize-prices)
- [💎 Add More Gems](#-add-more-gems)
- [🌟 Star History](#-star-history)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)
- [❤️ Credits](#-credits)

---

## ✨ Overview
**Gem Price Estimator** helps estimate gemstone prices using realistic **market logic** and **4C evaluation (Color, Clarity, Cut, Carat)**.  
It supports **live exchange rates**, **size-based value scaling**, and **instant USD/LKR toggling**.  

🔗 **Live App:** [https://gemprice.vercel.app/](https://gemprice.vercel.app/)

---

## 🚀 Features
- 💎 **100+ Real Gem Types** (Blue Sapphire, Padparadscha, Ruby, Emerald, etc.)
- 🧮 **4C Evaluation** — Color, Clarity, Cut, Carat
- 💱 **Live USD→LKR Conversion**
- 🔁 **Instant Currency Toggle** (no re-calculation)
- 📈 **Size Premium Logic** — larger stones = higher price
- 📄 **PDF Export** for professional valuation
- 📱 **Fully Responsive UI** (mobile-first)
- ⚡ **No Backend Needed** — 100% static, deploy anywhere
- 💎 **Fine Weight Input** (0.01ct precision)

---

## 🎯 Perfect For
- Gem dealers in **Ratnapura** & **Colombo**
- Tourists buying gems in Sri Lanka  
- Online gem sellers & jewelers  
- Jewelry designers, collectors, investors  

---

## 🌐 Live Preview
<img width="1594" height="909" alt="Live Preview" src="https://github.com/user-attachments/assets/5893adfe-d329-4105-8509-3b09dffd2166" />


---

## 🧠 How to Use (Demo)
1. Select gem (e.g. **Blue Sapphire**)  
2. Enter weight (e.g. `0.68 ct`)  
3. Choose **Color**, **Clarity**, **Cut**  
4. Toggle **USD/LKR** instantly  
5. Click **Export Report** → PDF download  

---

## ⚙️ Tech Stack
- 🧩 HTML5 + CSS3 (Glassmorphism UI)  
- ⚡ JavaScript (ES6+)  
- 🧾 [jsPDF](https://github.com/parallax/jsPDF) — PDF export  
- 🌍 [Exchangerate-API](https://www.exchangerate-api.com) — live rates  

---

## 📁 Project Structure
```

gem-price-estimator/
├── index.html
├── style.css
├── data.js          ← Gem prices & multipliers
├── script.js        ← Core logic + currency toggle
├── screenshot.jpg
└── README.md

````

---

## 💰 Customize Prices
Edit the `data.js` file:
```js
'Blue Sapphire (Sri Lankan)': { basePrice: 2500 },  // $/ct (avg 2025)
'Padparadscha Sapphire': { basePrice: 20000 },
````

📊 **Sources:** Gemdaia, Praveen Gems, IGS, Gemval (2025 data)

---

## 💎 Add More Gems

Add to the `gemsData` object:

```js
'Cat\'s Eye Chrysoberyl (Sri Lankan)': { basePrice: 800 },
'Red Spinel': { basePrice: 3000 },
```

---

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=DMS-Menula/Gem-Price-Estimator\&type=Date)](https://star-history.com/#DMS-Menula/Gem-Price-Estimator)

---

## 🤝 Contributing

💡 **Contributions are what make open source amazing!**

If you’d like to add new gems, improve logic, or enhance UI feel free to fork and submit a PR!

### Steps:

1. Fork the project
2. Create your feature branch

   ```bash
   git checkout -b feature/NewGem
   ```
3. Commit changes

   ```bash
   git commit -m "Add NewGem type and pricing"
   ```
4. Push branch & open Pull Request

📬 You can also open **Issues** for suggestions or bug reports.

---

## 🧭 Roadmap

* [ ] Add Gem Image Database
* [ ] AI-powered Value Predictor
* [ ] Community Gem Data Upload
* [ ] Multi-language Support
* [ ] Chrome Extension

---

## 📜 License

Licensed under the **MIT License** © 2025 [DMS-Menula](https://github.com/DMS-Menula).
Free to use, modify, and even sell gems with it 💎

---

## ❤️ Credits

**Made with love for Sri Lanka’s gem legacy**
From **Ratnapura to the World 🌍**

<p align="center">
  <a href="https://github.com/DMS-Menula/Gem-Price-Estimator">
    <img src="https://img.shields.io/badge/⭐-Star%20this%20project!-gold?style=for-the-badge" />
  </a>
</p>

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=100&color=gradient&section=footer" />
</p>
