# CONTRIBUTING.md — Gem Price Estimator ✨

Thank you for wanting to help make **the world’s most trusted Sri Lankan gem price tool** even better!  
Every contribution big or small helps gem dealers, tourists, and collectors in Ratnapura and beyond.

We **LOVE** contributions!  
Here’s how you can help:

---

### How to Contribute (3-minute guide)

#### 1. Fork this repo
Click the **Fork** button (top-right)

#### 2. Clone your fork
```bash
git clone https://github.com/YOUR-USERNAME/gem-price-estimator.git
cd gem-price-estimator
```

#### 3. Create a branch (name it clearly!)
```bash
git checkout -b add-red-spinel
# or
git checkout -b fix-lkr-formatting
# or
git checkout -b translate-sinhala
```

#### 4. Make your changes
- Add new gems → edit `data.js`
- Improve prices → update `basePrice` with source link
- Fix bugs → `script.js` or `style.css`
- Add Sinhala / Tamil translations → create `lang/si.json`

#### 5. Test locally
Just open `index.html` in your browser no build needed!

#### 6. Commit with a clear message
```bash
git add .
git commit -m "Add Red Spinel (Sri Lanka) - $3,200/ct avg - source: Praveen Gems 2025"
```

#### 7. Push & open Pull Request
```bash
git push origin your-branch-name
```
Then click **"Compare & pull request"** on GitHub

---

### Rules (Super Simple)

1. **Keep it static** — no Node.js, no backend  
   Must work on GitHub Pages!

2. **One change per PR**  
   Separate gems, translations, and bug fixes

3. **Be kind** — this tool helps real families in Sri Lanka

---

### Adding a New Gem (Copy-Paste Template)

```js
// data.js
'Cat\'s Eye Chrysoberyl (Sri Lankan)': { 
  basePrice: 1200 
},
// Source: https://www.gemsofsrilanka.com/cats-eye-2025-prices
```

---

### Translation Example (Sinhala)

Create `lang/si.json`:
```json
{
  "title": "මැණික් මිල ගණනය",
  "weight": "බර (කැරට්)",
  "estimate": "මිල ගණනය කරන්න"
}
```

---

### First Time Contributors? We Got You!

Just comment on any issue:
> "I want to add Sinhala translation — my first PR!"

We’ll assign it to you + guide you step-by-step

---

### Thank You Contributors Hall of Fame

(Your name will be here forever)

- [@dmsmenula](https://github.com/DMS-Menula)

---

**Every commit helps a gem cutter feed his family.**

Let’s make this the #1 gem tool in Sri Lanka — together!  
