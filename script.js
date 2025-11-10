document.addEventListener('DOMContentLoaded', async function () {

    try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        exchangeRate = data.rates.LKR || 303;
    } catch (error) {
        console.error('Exchange rate fetch failed, using default 303 LKR');
    }

    const gemForm = document.getElementById('gemForm');
    const result = document.getElementById('result');
    const usdToggle = document.getElementById('usdToggle');
    const gemTypeSelect = document.getElementById('gemType');
    const weightInput = document.getElementById('weight');
    const weightSlider = document.getElementById('weightSlider');
    const currencyLabel = document.getElementById('currencyLabel');
    const lowPrice = document.getElementById('lowPrice');
    const highPrice = document.getElementById('highPrice');
    const factorsList = document.getElementById('factorsList');
    const exportBtn = document.getElementById('exportBtn');

    Object.keys(gemsData).forEach(gem => {
        const option = document.createElement('option');
        option.value = gem;
        option.textContent = gem;
        gemTypeSelect.appendChild(option);
    });

    weightSlider.addEventListener('input', () => weightInput.value = weightSlider.value);
    weightInput.addEventListener('input', () => weightSlider.value = weightInput.value);

    usdToggle.addEventListener('change', function () {
        const isUSD = this.checked;
        currencyLabel.textContent = isUSD ? 'USD' : 'LKR';

        if (!result.classList.contains('hidden')) {
            convertExistingResult(isUSD);
        }
    });

    gemForm.addEventListener('submit', function (e) {
        e.preventDefault();
        calculatePrice();
    });

    exportBtn.addEventListener('click', exportReport);

    function calculatePrice() {
        const gemType = gemTypeSelect.value;
        const weight = parseFloat(weightInput.value);
        const color = document.getElementById('color').value;
        const clarity = document.getElementById('clarity').value;
        const cut = document.getElementById('cut').value;
        const isUSD = usdToggle.checked;

        if (!gemType || !weight || !color || !clarity || !cut) return;

        const gem = gemsData[gemType];
        const colorMult = colorMultipliers[color];
        const clarityMult = clarityMultipliers[clarity];
        const cutMult = cutMultipliers[cut];
        const sizePremium = 1 + (Math.log10(Math.max(weight, 1)) * 0.3);
        const perCtPrice = gem.basePrice * colorMult * clarityMult * cutMult * sizePremium;

        let totalLow = perCtPrice * weight * 0.8;
        let totalHigh = perCtPrice * weight * 1.2;

        window.lastLowUSD = totalLow;
        window.lastHighUSD = totalHigh;

        displayPrices(totalLow, totalHigh, isUSD);
        updateFactors(gemType, weight, color, clarity, cut, gem.basePrice, sizePremium);
        result.classList.remove('hidden');
        result.scrollIntoView({ behavior: 'smooth' });
    }

    function displayPrices(lowUSD, highUSD, isUSD) {
        let low = isUSD ? lowUSD : lowUSD * exchangeRate;
        let high = isUSD ? highUSD : highUSD * exchangeRate;

        const fmt = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
        lowPrice.textContent = `Low: ${low.toLocaleString(undefined, fmt)} ${isUSD ? 'USD' : 'LKR'}`;
        highPrice.textContent = `High: ${high.toLocaleString(undefined, fmt)} ${isUSD ? 'USD' : 'LKR'}`;
        currencyLabel.textContent = isUSD ? 'USD' : 'LKR';
    }

    function convertExistingResult(isUSD) {
        if (window.lastLowUSD === undefined) return;
        displayPrices(window.lastLowUSD, window.lastHighUSD, isUSD);
    }

    function updateFactors(gemType, weight, color, clarity, cut, basePrice, sizePremium) {
        factorsList.innerHTML = `
            <li>Gem: ${gemType}</li>
            <li>Weight: ${weight} ct</li>
            <li>Color: ${color.charAt(0).toUpperCase() + color.slice(1)}</li>
            <li>Clarity: ${clarity.charAt(0).toUpperCase() + clarity.slice(1)}</li>
            <li>Cut: ${cut.charAt(0).toUpperCase() + cut.slice(1)}</li>
            <li>Base Price: $${basePrice.toLocaleString()}/ct (2025 avg)</li>
            <li>Size Premium: ${((sizePremium - 1) * 100).toFixed(0)}%</li>
            <li>Exchange Rate: 1 USD = ${exchangeRate.toFixed(2)} LKR (live)</li>
        `;
    }

    function exportReport() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const isUSD = usdToggle.checked;

        doc.setFontSize(20);
        doc.text('Gem Price Estimate Report', 20, 20);
        doc.setFontSize(12);
        doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 40);
        doc.text(`Gem: ${gemTypeSelect.value}`, 20, 50);
        doc.text(`Weight: ${weightInput.value} ct`, 20, 60);
        doc.text(`Color: ${document.getElementById('color').value}`, 20, 70);
        doc.text(`Clarity: ${document.getElementById('clarity').value}`, 20, 80);
        doc.text(`Cut: ${document.getElementById('cut').value}`, 20, 90);
        doc.text(`Currency: ${isUSD ? 'USD' : 'LKR'}`, 20, 100);
        doc.text('Price Range:', 20, 120);
        doc.text(lowPrice.textContent, 20, 130);
        doc.text(highPrice.textContent, 20, 140);
        doc.text('Source: 2025 market data + live USD→LKR rate', 20, 160);
        doc.text('Consult a certified gemologist for final valuation.', 20, 170);

        doc.save('Gem_Estimate_Report.pdf');
    }
});