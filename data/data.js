/* ================================
   Gem Price Estimator – Market Data
   Updated: January 2025
   Sources:
   - Gemval (2024–2025)
   - International Colored Gemstone Association
   - Sri Lankan Market Dealer Averages
   - Global Auction House 2024 Reports
   Updates every: Quarterly (every 3 months)
================================ */

const dataSources = {
    list: [
        'Gemval (2024–2025)',
        'International Colored Gemstone Association',
        'Sri Lankan Market Dealer Averages',
        'Global Auction House 2024 Reports'
    ],
    updated: 'January 2025',
    frequency: 'Quarterly (every 3 months)',
    note: 'Estimates only — consult a certified gemologist for final valuation.'
};

const gemsData = {
    'Diamond (White)': { basePrice: 6000, icon: '💎' },
    'Diamond (Fancy Color)': { basePrice: 15000, icon: '💠' },
    'Paraíba Tourmaline (Brazil)': { basePrice: 25000, icon: '🔷' },
    'Blue Sapphire (Sri Lankan)': { basePrice: 2500, icon: '🔵' },
    'Padparadscha Sapphire': { basePrice: 20000, icon: '🟠' },
    'Parti Sapphire (Sri Lankan)': { basePrice: 2000, icon: '🌈' },
    'Ruby': { basePrice: 5000, icon: '🔴' },
    'Emerald': { basePrice: 3000, icon: '🟢' },
    'Alexandrite': { basePrice: 15000, icon: '✨' },
    'Tanzanite': { basePrice: 800, icon: '🔷' },
    'Blue Spinel': { basePrice: 1000, icon: '🔹' },
    'Black Opal': { basePrice: 3000, icon: '⚫' },
    'Moonstone (Sri Lankan)': { basePrice: 100, icon: '🌕' },
    'Tsavorite Garnet': { basePrice: 1500, icon: '💚' },
    'Aquamarine': { basePrice: 300, icon: '🏝️' },
    'Imperial Topaz': { basePrice: 500, icon: '🟡' },
    'Amethyst': { basePrice: 50, icon: '💜' },
    'Citrine': { basePrice: 30, icon: '🟨' },
    'Peridot': { basePrice: 100, icon: '🟩' },
    'Zircon': { basePrice: 150, icon: '🔶' },
    'Iolite': { basePrice: 100, icon: '🔷' },
    'Kunzite': { basePrice: 200, icon: '🌸' },
    'Morganite': { basePrice: 200, icon: '🌺' }
};

const colorMultipliers = {
    faint: 0.3,
    light: 0.5,
    medium: 0.8,
    intense: 1.0,
    vivid: 1.2
};

const clarityMultipliers = {
    poor: 0.2,
    fair: 0.4,
    good: 0.6,
    veryGood: 0.8,
    excellent: 1.0
};

const cutMultipliers = {
    poor: 0.3,
    fair: 0.5,
    good: 0.7,
    veryGood: 0.9,
    excellent: 1.0
};

let exchangeRate = 303;