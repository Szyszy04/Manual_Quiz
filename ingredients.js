// ingredients.js - Lista składników z systemem ID, miarami i funkcje pomocnicze

// Zunifikowana lista składników z miarami
export const ingredients = [
  { id: 1, name: "Absynth", measure: "ml" },
  { id: 2, name: "Absynth Spray", measure: "spray" },
  { id: 3, name: "Agave Mix", measure: "ml" },
  { id: 4, name: "Dewar's 12 YO", measure: "ml" },
  { id: 5, name: "Bacardi 4 Anejo Cuatro", measure: "ml" },
  { id: 6, name: "Albumina", measure: "ml" },
  { id: 7, name: "Amaro Nonino", measure: "ml" },
  { id: 8, name: "Angostura Aromatic Bitters", measure: "ml" },
  { id: 9, name: "Angostura Bitters", measure: "dash" },
  { id: 10, name: "Angostura Cocoa Bitters", measure: "dash" },
  { id: 11, name: "Aperol", measure: "ml" },
  { id: 12, name: "Archer's", measure: "ml" },
  { id: 13, name: "Aster Gin", measure: "ml" },
  { id: 14, name: "Belvoir Elderflower", measure: "ml" },
  { id: 15, name: "Big Tom Tomato Juice", measure: "ml" },
  { id: 16, name: "Dewar's 8 Caribbean Smooth", measure: "ml" },
  { id: 17, name: "Bloody Mary Mix", measure: "ml" },
  { id: 19, name: "Maker's Mark", measure: "ml" },
  { id: 20, name: "Briottet - Violet", measure: "ml" },
  { id: 21, name: "Cachaça", measure: "ml" },
  { id: 22, name: "Bank's Rum", measure: "ml" },
  { id: 23, name: "Carpano Antica Formula", measure: "ml" },
  { id: 24, name: "Chambord", measure: "ml" },
  { id: 25, name: "Chartreuse Green", measure: "ml" },
  { id: 26, name: "Cherry Brandy", measure: "ml" },
  { id: 27, name: "Cherry Heering", measure: "ml" },
  { id: 29, name: "Cocchi Americano", measure: "ml" },
  { id: 30, name: "Cointreau", measure: "ml" },
  { id: 31, name: "Coca Cola", measure: "top_up" },
  { id: 32, name: "Creme De Cacao", measure: "ml" },
  { id: 33, name: "Creme De Menthe", measure: "ml" },
  { id: 34, name: "D.O.M Benedictine", measure: "ml" },
  { id: 35, name: "Esencji z trawy cytrynowej", measure: "ml" },
  { id: 36, name: "Espresso", measure: "unit" },
  { id: 37, name: "Fake Lime Juice", measure: "ml" },
  { id: 38, name: "Falernum", measure: "ml" },
  { id: 39, name: "Food Town Bars Lime Cordial", measure: "ml" },
  { id: 40, name: "Galliano Amaretto", measure: "ml" },
  { id: 41, name: "Galliano Autentico", measure: "ml" },
  { id: 42, name: "Galliano Espresso", measure: "ml" },
  { id: 43, name: "Giffard Bitter Syrop", measure: "ml" },
  { id: 45, name: "Gin bezalkoholowy", measure: "ml" },
  { id: 46, name: "Bacardi Carta Oro", measure: "ml" },
  { id: 48, name: "Half Half", measure: "ml" },
  { id: 49, name: "Hennessy V.S.", measure: "ml" },
  { id: 50, name: "Inca Bitters", measure: "drops" },
  { id: 51, name: "Tullamore DEW", measure: "ml" },
  { id: 52, name: "Islay Malt Spray", measure: "spray" },
  { id: 53, name: "Smith & Cross", measure: "ml" },
  { id: 54, name: "Kordiał z Żurawiny i Róży", measure: "ml" },
  { id: 55, name: "Laska cynamonu", measure: "stick" },
  { id: 56, name: "Lillet Blanc", measure: "ml" },
  { id: 57, name: "Liście mięty", measure: "leaves" },
  { id: 58, name: "Bombay Sapphire", measure: "ml" },
  { id: 59, name: "Luxardo Maraschino", measure: "ml" },
  { id: 60, name: "Martini Bitter", measure: "ml" },
  { id: 61, name: "Martini Extra Dry", measure: "ml" },
  { id: 62, name: "Martini Fiero", measure: "ml" },
  { id: 63, name: "Martini Rubino", measure: "ml" },
  { id: 64, name: "Martini Vibrante", measure: "ml" },
  { id: 65, name: "Mozart Black Dark Chocolate", measure: "ml" },
  { id: 66, name: "Napar z herbaty Earl Grey", measure: "ml" },
  { id: 67, name: "Noilly Prat", measure: "ml" },
  { id: 68, name: "Hayman’s Old Tom Gin", measure: "ml" },
  { id: 69, name: "Oleo Saccharum", measure: "ml" },
  { id: 70, name: "Orange Bitters", measure: "dash" },
  { id: 71, name: "Orgeat", measure: "ml" },
  { id: 72, name: "Rum Bar White Overproof", measure: "ml" },
  { id: 73, name: "Papidoux V.S.O.P.", measure: "ml" },
  { id: 74, name: "Peach Liqueur", measure: "ml" },
  { id: 75, name: "Peychaud's Bitters", measure: "dash" },
  { id: 76, name: "Pisco", measure: "ml" },
  { id: 77, name: "Plaster cytryny", measure: "slice" },
  { id: 78, name: "Prosecco", measure: "ml" },
  { id: 79, name: "Red Wine", measure: "ml" },
  { id: 80, name: "Ruby Port", measure: "ml" },
  { id: 82, name: "Jim Beam Rye", measure: "ml" },
  { id: 83, name: "Hayman’s Sloe Gin", measure: "ml" },
  { id: 84, name: "Sok grejpfrutowy", measure: "ml" },
  { id: 85, name: "Sok z cytryny", measure: "ml" },
  { id: 86, name: "Sok z limonki", measure: "ml" },
  { id: 87, name: "Sok z pomarańczy", measure: "ml" },
  { id: 88, name: "Bacardi Spiced", measure: "ml" },
  { id: 89, name: "Suze", measure: "ml" },
  { id: 90, name: "Syrop cukrowy", measure: "ml" },
  { id: 91, name: "Syrop malinowy", measure: "ml" },
  { id: 92, name: "Syrop miodowo-imbirowy", measure: "ml" },
  { id: 93, name: "Syrop miętowy", measure: "ml" },
  { id: 94, name: "Syrop piernikowy", measure: "ml" },
  { id: 95, name: "Syrop waniliowy", measure: "ml" },
  { id: 96, name: "Rooster Rojo Blanc", measure: "ml" },
  { id: 97, name: "Ginger Beer", measure: "top_up" },
  { id: 98, name: "Tonic", measure: "top_up" },
  { id: 99, name: "Three Cents Grapefruit Soda", measure: "top_up" },
  { id: 100, name: "Bacardi Carta Blanca", measure: "ml" },
  { id: 101, name: "Woda gazowana", measure: "top_up" },
  { id: 102, name: "Wrzątek", measure: "hot_water" },
  { id: 103, name: "Ostoya", measure: "ml" },
  { id: 104, name: "woda z kwiatu pomarańczy", measure: "drops" },
  { id: 105, name: "liści bazylii", measure: "leaves" },
  { id: 106, name: "marmolada z pomarańczy", measure: "tsp" },
  { id: 107, name: "ogórka", measure: "slice" },
  { id: 108, name: "oliwy truflowej", measure: "drops" },
  { id: 109, name: "przecier ananasowy", measure: "ml" },
  { id: 110, name: "przecieru z marakui", measure: "ml" },
  { id: 111, name: "różowy glitter", measure: "spray" },
  { id: 112, name: "zalewy z wiśni", measure: "ml" },
  { id: 113, name: "Ćwiartka limonki", measure: "quarter" },
  { id: 114, name: "Fernet Branca", measure: "ml" },
  { id: 115, name: "kawa przelewowa", measure: "ml"},
  { id: 116, name: "Jim Beam Black", measure: "ml"},
  { id: 117, name: "Fords", measure: "ml"},
  { id: 118, name: "Bacardi 8 yo", measure: "ml"}
];

// Miary używane w aplikacji
export const measureTypes = {
  ml: { name: "ml", fullName: "mililitry", type: "volume" },
  dash: { name: "dash", fullName: "dashes", type: "small_amount" },
  drops: { name: "krople", fullName: "krople", type: "small_amount" },
  leaves: { name: "liści", fullName: "liście", type: "garnish" },
  pinch: { name: "szczypta", fullName: "szczypta", type: "small_amount" },
  slice: { name: "plaster", fullName: "plaster", type: "garnish" },
  quarter: { name: "ćwiartka", fullName: "ćwiartka", type: "garnish" },
  stick: { name: "laska", fullName: "laska", type: "garnish" },
  spray: { name: "spray", fullName: "spray", type: "aromatic" },
  top_up: { name: "top up", fullName: "dopełnienie", type: "volume" },
  unit: { name: "szt", fullName: "sztuka", type: "unit" },
  hot_water: { name: "wrzątek", fullName: "gorąca woda", type: "special" },
  tsp: { name: "łyżeczka", fullName: "łyżeczka", type: "volume" }
};

// Funkcje pomocnicze do pracy z składnikami
export function getIngredientById(id) {
  return ingredients.find(ingredient => ingredient.id === id);
}

export function getIngredientId(name) {
  const ingredient = ingredients.find(ingredient => ingredient.name === name);
  return ingredient ? ingredient.id : null;
}

export function getAllIngredientNames() {
  return ingredients.map(ingredient => ingredient.name);
}

export function searchIngredients(searchTerm) {
  return ingredients.filter(ingredient => 
    ingredient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

// Nowe funkcje do pracy z miarami
export function getIngredientMeasure(id) {
  const ingredient = getIngredientById(id);
  return ingredient ? ingredient.measure : null;
}

export function getIngredientsByMeasure(measure) {
  return ingredients.filter(ingredient => ingredient.measure === measure);
}

export function formatIngredientWithMeasure(ingredient, amount) {
  if (!ingredient || !ingredient.measure) return `${amount} ${ingredient?.name || 'Nieznany składnik'}`;

  const measureInfo = measureTypes[ingredient.measure];
  if (!measureInfo) return `${amount} ${ingredient.name}`;

  // Specjalne formatowanie dla różnych miar
  switch (ingredient.measure) {
    case 'ml':
      return `${amount} ml ${ingredient.name}`;
    case 'dash':
      return amount === 1 ? `1 x dash ${ingredient.name}` : `${amount} x dash ${ingredient.name}`;
    case 'drops':
      return amount === 1 ? `1 kropla ${ingredient.name}` : `${amount} krople ${ingredient.name}`;
    case 'leaves':
      return amount === 1 ? `1 liść ${ingredient.name}` : `${amount} liści ${ingredient.name}`;
    case 'slice':
      return amount === 1 ? `1 plaster ${ingredient.name}` : `${amount} plastry ${ingredient.name}`;
    case 'quarter':
      return amount === 1 ? `1 ćwiartka ${ingredient.name}` : `${amount} ćwiartki ${ingredient.name}`;
    case 'stick':
      return `${amount} laska ${ingredient.name}`;
    case 'spray':
      return `${ingredient.name} Spray`;
    case 'top_up':
      return `${ingredient.name} - top up`;
    case 'unit':
      return amount === 1 ? `1 ${ingredient.name}` : `${amount} ${ingredient.name}`;
    case 'hot_water':
      return ingredient.name;
    case 'tsp':
      return `${amount} łyżeczka ${ingredient.name}`;
    case 'pinch':
      return `${amount} szczypta ${ingredient.name}`;
    default:
      return `${amount} ${ingredient.name}`;
  }
}

export function getMeasureStats() {
  const stats = {};
  Object.keys(measureTypes).forEach(measure => {
    stats[measure] = ingredients.filter(ing => ing.measure === measure).length;
  });
  return stats;
}
