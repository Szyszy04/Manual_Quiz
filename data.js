// data.js - Dane pomocnicze

// ===== VODKAS =====
export const vodkas = [
    { name: "Belvedere", price: "28,00", country: "Polska", ingredient: "Żyto" },
    { name: "Belvedere Lake Bartężek", price: "39,00", country: "Polska", ingredient: "Żyto" },
    { name: "Chopin Potato", price: "35,00", country: "Polska", ingredient: "Ziemniaki" },
    { name: "Grey Goose", price: "28,00", country: "Francja", ingredient: "Pszenica (winter wheat)" },
    { name: "Ostoya Vodka", price: "19,00", country: "Polska", ingredient: "Pszenica" },
    { name: "Ostoya Black", price: "21,00", country: "Polska", ingredient: "Pszenica" }
];

// ===== GLASSES =====
export const glassOptions = [
    "Collins",
    "Nick & Nora", 
    "Double Old Fashioned Glass",
    "Coupe + kieliszek do wódki",
    "Old Fashioned",
    "Coupe",
    "Champagne Flute",
    "Irish Coffee Cup",
    "Whisky Glass",
    "Copa Bombay",
    "Copa Martini",
    "Mini Coupette",
    "Swizzle Glass",
    "Hot Toddy Cup",
    "Szkło do koniaku - snifter"
];

// Funkcje pomocnicze dla szklanek
export function getGlassById(glassName) {
    return glassOptions.find(glass => glass === glassName);
}

export function getAllGlasses() {
    return [...glassOptions];
}

export function searchGlasses(searchTerm) {
    return glassOptions.filter(glass =>
        glass.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

// Mapowanie szklanek na kategorie
export const glassCategories = {
    "Koktajlowe": ["Nick & Nora", "Coupe", "Mini Coupette"],
    "Wysokie": ["Collins", "Champagne Flute", "Swizzle Glass"],
    "Niskie": ["Old Fashioned", "Double Old Fashioned Glass", "Whisky Glass"],
    "Specjalne": ["Irish Coffee Cup", "Hot Toddy Cup", "Szkło do koniaku - snifter"],
    "Copa": ["Copa Bombay", "Copa Martini"],
    "Kombinowane": ["Coupe + kieliszek do wódki"]
};
