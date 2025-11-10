const gemsData = {
    'Blue Sapphire (Sri Lankan)': { basePrice: 2500 },
    'Padparadscha Sapphire': { basePrice: 20000 },
    'Parti Sapphire (Sri Lankan)': { basePrice: 2000 },
    'Ruby': { basePrice: 5000 },
    'Emerald': { basePrice: 3000 },
    'Alexandrite': { basePrice: 15000 },
    'Tanzanite': { basePrice: 800 },
    'Blue Spinel': { basePrice: 1000 },
    'Paraiba Tourmaline': { basePrice: 5000 },
    'Black Opal': { basePrice: 3000 },
    'Moonstone (Sri Lankan)': { basePrice: 100 },
    'Tsavorite Garnet': { basePrice: 1500 },
    'Aquamarine': { basePrice: 300 },
    'Imperial Topaz': { basePrice: 500 },
    'Amethyst': { basePrice: 50 },
    'Citrine': { basePrice: 30 },
    'Peridot': { basePrice: 100 },
    'Zircon': { basePrice: 150 },
    'Iolite': { basePrice: 100 },
    'Kunzite': { basePrice: 200 },
    'Morganite': { basePrice: 200 }
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