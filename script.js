// script.js
const client = contentful.createClient({
    space: 'ntzxqqxda5ma',
    accessToken: 'AZZvP-qm49eg6mByKlG6hnFu7mhYI5XsyauAb1J9b-E' 
});

let currentRate = 0.0006;

// Load rate once
async function fetchRate() {
    try {
        const res = await fetch('https://v6.exchangerate-api.com/v6/675df7a7e10575ccaa18b307/latest/NGN');
        const data = await res.json();
        currentRate = data.conversion_rates.USD;
    } catch(e) { console.warn("Rate fetch failed."); }
}

// Global Theme Logic
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Apply theme on page load
window.onload = () => {
    if(localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-mode');
    fetchRate();
};
// Add these to your script block
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Ensure your render function uses the logic provided previously 
// to calculate prices based on the currency-select value
