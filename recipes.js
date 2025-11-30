// recipes.js - Przepisy z systemem ID składników i funkcje konwersji

import { getIngredientById, formatIngredientWithMeasure } from './ingredients.js';

// RECIPES Z SYSTEMEM ID
export const recipes = {
  "Vodka Sour": [
    {"ingredientId": 103, "amount": 40},
    {"ingredientId": 85, "amount": 25},
    {"ingredientId": 90, "amount": 15},
    {"ingredientId": 6, "amount": 20},
    {"ingredientId": 9, "amount": 1}
  ],

  "Bloody Mary": [
    {"ingredientId": 103, "amount": 50},
    {"ingredientId": 15, "amount": 100},
    {"ingredientId": 85, "amount": 10},
    {"ingredientId": 17, "amount": 10},
    {"ingredientId": 108, "amount": 3}
  ],

  "Cosmopolitan": [
    {"ingredientId": 103, "amount": 30},
    {"ingredientId": 11, "amount": 10},
    {"ingredientId": 54, "amount": 30},
    {"ingredientId": 35, "amount": 10},
    {"ingredientId": 111, "amount": 1}
  ],

  "Espresso Martini": [
    {"ingredientId": 103, "amount": 40},
    {"ingredientId": 42, "amount": 20},
    {"ingredientId": 95, "amount": 10},
    {"ingredientId": 36, "amount": 1},
    {"ingredientId": 10, "amount": 1}
  ],

  "Golden Cadillac": [
    {"ingredientId": 32, "amount": 30},
    {"ingredientId": 41, "amount": 30},
    {"ingredientId": 48, "amount": 30}
  ],

  "Grasshooper": [
    {"ingredientId": 32, "amount": 20},
    {"ingredientId": 33, "amount": 20},
    {"ingredientId": 103, "amount": 20},
    {"ingredientId": 48, "amount": 30}
  ],

  "Long Island Iced Tea": [
    {"ingredientId": 58, "amount": 20},
    {"ingredientId": 103, "amount": 20},
    {"ingredientId": 100, "amount": 20},
    {"ingredientId": 30, "amount": 20},
    {"ingredientId": 96, "amount": 20},
    {"ingredientId": 90, "amount": 10},
    {"ingredientId": 85, "amount": 20},
    {"ingredientId": 31, "amount": 40}
  ],

  "Pornstar Martini": [
    {"ingredientId": 103, "amount": 40},
    {"ingredientId": 95, "amount": 20},
    {"ingredientId": 86, "amount": 20},
    {"ingredientId": 110, "amount": 20},
    {"ingredientId": 78, "amount": 30}
  ],

  "Kyiv Mule": [
    {"ingredientId": 103, "amount": 40},
    {"ingredientId": 86, "amount": 15},
    {"ingredientId": 90, "amount": 10},
    {"ingredientId": 97, "amount": 100},
    {"ingredientId": 9, "amount": 1}
  ],

  "AIR MAIL": [
    {"ingredientId": 46, "amount": 50},
    {"ingredientId": 92, "amount": 20},
    {"ingredientId": 86, "amount": 20},
    {"ingredientId": 78, "amount": 40}
  ],

  "Caipirinha": [
    {"ingredientId": 21, "amount": 50},
    {"ingredientId": 90, "amount": 15},
    {"ingredientId": 113, "amount": 2}
  ],

  "Classic Rum Swizzle": [
    {"ingredientId": 100, "amount": 50},
    {"ingredientId": 86, "amount": 30},
    {"ingredientId": 90, "amount": 20},
    {"ingredientId": 9, "amount": 4}
  ],

  "Corn 'n' Oil": [
    {"ingredientId": 5, "amount": 20},
    {"ingredientId": 53, "amount": 10},
    {"ingredientId": 38, "amount": 20},
    {"ingredientId": 11, "amount": 10},
    {"ingredientId": 9, "amount": 1},
    {"ingredientId": 113, "amount": 2}
  ],

  "Cuba Libre": [
    {"ingredientId": 5, "amount": 40},
    {"ingredientId": 113, "amount": 1},
    {"ingredientId": 31, "amount": 100}
  ],

  "Daiquiri": [
    {"ingredientId": 100, "amount": 50},
    {"ingredientId": 86, "amount": 20},
    {"ingredientId": 90, "amount": 10}
  ],

  "Dark 'n' Stormy": [
    {"ingredientId": 53, "amount": 40},
    {"ingredientId": 9, "amount": 1},
    {"ingredientId": 113, "amount": 1},
    {"ingredientId": 97, "amount": 100}
  ],

  "El Presidente": [
    {"ingredientId": 22, "amount": 40},
    {"ingredientId": 56, "amount": 15},
    {"ingredientId": 30, "amount": 5},
    {"ingredientId": 91, "amount": 2.5},
    {"ingredientId": 70, "amount": 2}
  ],

  "Fish House Punch": [
    {"ingredientId": 49, "amount": 20},
    {"ingredientId": 5, "amount": 20},
    {"ingredientId": 74, "amount": 15},
    {"ingredientId": 66, "amount": 30},
    {"ingredientId": 85, "amount": 20},
    {"ingredientId": 69, "amount": 15}
  ],

  "Fog Cutter": [
    {"ingredientId": 76, "amount": 20},
    {"ingredientId": 58, "amount": 20},
    {"ingredientId": 46, "amount": 20},
    {"ingredientId": 71, "amount": 20},
    {"ingredientId": 85, "amount": 30},
    {"ingredientId": 87, "amount": 30},
    {"ingredientId": 80, "amount": 10}
  ],

  "Hemingway Daiquiri": [
    {"ingredientId": 100, "amount": 40},
    {"ingredientId": 84, "amount": 20},
    {"ingredientId": 86, "amount": 15},
    {"ingredientId": 90, "amount": 10},
    {"ingredientId": 59, "amount": 5}
  ],

  "Hot Rum Grog": [
    {"ingredientId": 88, "amount": 50},
    {"ingredientId": 85, "amount": 20},
    {"ingredientId": 84, "amount": 15},
    {"ingredientId": 87, "amount": 15},
    {"ingredientId": 95, "amount": 20},
    {"ingredientId": 9, "amount": 1},
    {"ingredientId": 102, "amount": 100}
  ],

  "Mai Tai": [
    {"ingredientId": 100, "amount": 30},
    {"ingredientId": 53, "amount": 20},
    {"ingredientId": 30, "amount": 15},
    {"ingredientId": 71, "amount": 10},
    {"ingredientId": 86, "amount": 30},
    {"ingredientId": 90, "amount": 5}
  ],

  "Mojito": [
    {"ingredientId": 5, "amount": 50},
    {"ingredientId": 113, "amount": 2},
    {"ingredientId": 93, "amount": 15},
    {"ingredientId": 57, "amount": 8},
    {"ingredientId": 101, "amount": 100}
  ],

  "Mojito Norblito": [
    {"ingredientId": 100, "amount": 50},
    {"ingredientId": 37, "amount": 30},
    {"ingredientId": 93, "amount": 20},
    {"ingredientId": 57, "amount": 5}
  ],

  "Nuclear Daiquiri": [
    {"ingredientId": 72, "amount": 30},
    {"ingredientId": 25, "amount": 20},
    {"ingredientId": 38, "amount": 10},
    {"ingredientId": 86, "amount": 20},
    {"ingredientId": 90, "amount": 10}
  ],

  "Old Cuban": [
    {"ingredientId": 5, "amount": 50},
    {"ingredientId": 95, "amount": 20},
    {"ingredientId": 86, "amount": 20},
    {"ingredientId": 9, "amount": 1},
    {"ingredientId": 78, "amount": 40},
    {"ingredientId": 57, "amount": 5}
  ],

  "Queen's Park Swizzle": [
    {"ingredientId": 46, "amount": 30},
    {"ingredientId": 53, "amount": 20},
    {"ingredientId": 38, "amount": 10},
    {"ingredientId": 86, "amount": 20},
    {"ingredientId": 95, "amount": 10},
    {"ingredientId": 57, "amount": 10}
  ],

  "Right Hand Cocktail": [
    {"ingredientId": 118, "amount": 30},
    {"ingredientId": 60, "amount": 20},
    {"ingredientId": 63, "amount": 20},
    {"ingredientId": 65, "amount": 5}
  ],

  "Zombie": [
    {"ingredientId": 46, "amount": 30},
    {"ingredientId": 53, "amount": 20},
    {"ingredientId": 38, "amount": 10},
    {"ingredientId": 84, "amount": 30},
    {"ingredientId": 86, "amount": 20},
    {"ingredientId": 94, "amount": 20},
    {"ingredientId": 91, "amount": 5},
    {"ingredientId": 9, "amount": 1},
    {"ingredientId": 1, "amount": 2}
  ],

  "Amaretto Sour": [
    {"ingredientId": 40, "amount": 40},
    {"ingredientId": 16, "amount": 10},
    {"ingredientId": 85, "amount": 30},
    {"ingredientId": 90, "amount": 10},
    {"ingredientId": 6, "amount": 20}
  ],

  "Blood & Sand": [
    {"ingredientId": 4, "amount": 30},
    {"ingredientId": 23, "amount": 20},
    {"ingredientId": 26, "amount": 20},
    {"ingredientId": 87, "amount": 30},
    {"ingredientId": 52, "amount": 1}
  ],

  "Boulevardier": [
    {"ingredientId": 19, "amount": 30},
    {"ingredientId": 60, "amount": 20},
    {"ingredientId": 63, "amount": 20}
  ],

  "Manhattan": [
    {"ingredientId": 19, "amount": 50},
    {"ingredientId": 23, "amount": 20},
    {"ingredientId": 9, "amount": 2}
  ],

  "Whisky Sour": [
    {"ingredientId": 16, "amount": 40},
    {"ingredientId": 85, "amount": 25},
    {"ingredientId": 90, "amount": 15},
    {"ingredientId": 6, "amount": 20},
    {"ingredientId": 9, "amount": 1}
  ],

  "Irish Coffee": [
    {"ingredientId": 51, "amount": 50},
    {"ingredientId": 115, "amount": 120},
    {"ingredientId": 95, "amount": 15}
  ],

  "BRANDY CRUSTA": [
    {"ingredientId": 49, "amount": 40},
    {"ingredientId": 30, "amount": 10},
    {"ingredientId": 59, "amount": 10},
    {"ingredientId": 85, "amount": 20},
    {"ingredientId": 90, "amount": 5}
  ],

  "CAMERON'S KICK": [
    {"ingredientId": 16, "amount": 20},
    {"ingredientId": 51, "amount": 20},
    {"ingredientId": 85, "amount": 25},
    {"ingredientId": 71, "amount": 20}
  ],

  "Corpse Reviver #1": [
    {"ingredientId": 73, "amount": 20},
    {"ingredientId": 49, "amount": 20},
    {"ingredientId": 63, "amount": 20}
  ],

  "Derby": [
    {"ingredientId": 19, "amount": 50},
    {"ingredientId": 84, "amount": 30},
    {"ingredientId": 92, "amount": 20}
  ],

  "HOT TODDY": [
    {"ingredientId": 16, "amount": 50},
    {"ingredientId": 92, "amount": 20},
    {"ingredientId": 85, "amount": 20},
    {"ingredientId": 102, "amount": 100},
    {"ingredientId": 55, "amount": 1},
    {"ingredientId": 77, "amount": 1}
  ],

  "JAPANESE COCKTAIL": [
    {"ingredientId": 49, "amount": 40},
    {"ingredientId": 71, "amount": 5},
    {"ingredientId": 9, "amount": 3}
  ],

  "NEW YORK SOUR": [
    {"ingredientId": 116, "amount": 40},
    {"ingredientId": 85, "amount": 25},
    {"ingredientId": 90, "amount": 15},
    {"ingredientId": 6, "amount": 20},
    {"ingredientId": 9, "amount": 1},
    {"ingredientId": 79, "amount": 15}
  ],

  "Loretto old fashioned": [
    {"ingredientId": 19, "amount": 50},
    {"ingredientId": 112, "amount": 5},
    {"ingredientId": 9, "amount": 3},
    {"ingredientId": 70, "amount": 1}
  ],

  "PAPER PLANE": [
    {"ingredientId": 19, "amount": 20},
    {"ingredientId": 7, "amount": 20},
    {"ingredientId": 11, "amount": 20},
    {"ingredientId": 85, "amount": 20}
  ],

  "PENICILLIN": [
    {"ingredientId": 16, "amount": 50},
    {"ingredientId": 92, "amount": 20},
    {"ingredientId": 85, "amount": 20},
    {"ingredientId": 52, "amount": 1}
  ],

  "Sazerac": [
    {"ingredientId": 82, "amount": 20},
    {"ingredientId": 49, "amount": 20},
    {"ingredientId": 75, "amount": 3},
    {"ingredientId": 9, "amount": 1},
    {"ingredientId": 90, "amount": 5},
    {"ingredientId": 2, "amount": 1}
  ],

  "TRYNIDAD SOUR": [
    {"ingredientId": 8, "amount": 40},
    {"ingredientId": 82, "amount": 15},
    {"ingredientId": 71, "amount": 30},
    {"ingredientId": 85, "amount": 20}
  ],

  "WHISKEY SMASH": [
    {"ingredientId": 19, "amount": 50},
    {"ingredientId": 90, "amount": 20},
    {"ingredientId": 77, "amount": 1},
    {"ingredientId": 57, "amount": 8}
  ],

  "VIEUX CAREE": [
    {"ingredientId": 82, "amount": 20},
    {"ingredientId": 49, "amount": 20},
    {"ingredientId": 63, "amount": 20},
    {"ingredientId": 34, "amount": 10},
    {"ingredientId": 75, "amount": 2},
    {"ingredientId": 9, "amount": 1}
  ],

  "ARM & NAVY": [
    {"ingredientId": 58, "amount": 50},
    {"ingredientId": 71, "amount": 20},
    {"ingredientId": 85, "amount": 20},
    {"ingredientId": 9, "amount": 1}
  ],

  "AVIATION": [
    {"ingredientId": 58, "amount": 50},
    {"ingredientId": 59, "amount": 10},
    {"ingredientId": 20, "amount": 5},
    {"ingredientId": 85, "amount": 15},
    {"ingredientId": 90, "amount": 2.5}
  ],

  "BEE'S KNEES": [
    {"ingredientId": 58, "amount": 50},
    {"ingredientId": 92, "amount": 20},
    {"ingredientId": 85, "amount": 20},
    {"ingredientId": 87, "amount": 20}
  ],

  "BIJOU": [
    {"ingredientId": 13, "amount": 20},
    {"ingredientId": 63, "amount": 20},
    {"ingredientId": 25, "amount": 20},
    {"ingredientId": 70, "amount": 1}
  ],

  "Bombay & Tonic": [
    {"ingredientId": 58, "amount": 40},
    {"ingredientId": 98, "amount": 100}
  ],

  "BRAMBLE": [
    {"ingredientId": 58, "amount": 40},
    {"ingredientId": 85, "amount": 20},
    {"ingredientId": 90, "amount": 10},
    {"ingredientId": 24, "amount": 15}
  ],

  "BREAKFAST MARTINI": [
    {"ingredientId": 58, "amount": 50},
    {"ingredientId": 30, "amount": 15},
    {"ingredientId": 85, "amount": 20},
    {"ingredientId": 106, "amount": 5}
  ],

  "CHARLIE CHAPLIN": [
    {"ingredientId": 83, "amount": 30},
    {"ingredientId": 12, "amount": 30},
    {"ingredientId": 86, "amount": 30}
  ],

  "CHRYSANTHEMUM": [
    {"ingredientId": 67, "amount": 60},
    {"ingredientId": 34, "amount": 10},
    {"ingredientId": 1, "amount": 1}
  ],

  "CLOVER CLUB": [
    {"ingredientId": 58, "amount": 40},
    {"ingredientId": 61, "amount": 10},
    {"ingredientId": 85, "amount": 20},
    {"ingredientId": 91, "amount": 15},
    {"ingredientId": 90, "amount": 2.5},
    {"ingredientId": 6, "amount": 15}
  ],

  "Corpse Reviver #2": [
    {"ingredientId": 58, "amount": 20},
    {"ingredientId": 29, "amount": 20},
    {"ingredientId": 30, "amount": 20},
    {"ingredientId": 85, "amount": 20},
    {"ingredientId": 2, "amount": 1}
  ],

  "DRY MARTINI": [
    {"ingredientId": 117, "amount": 50},
    {"ingredientId": 67, "amount": 10},
    {"ingredientId": 70, "amount": 1}
  ],

  "gimlet": [
    {"ingredientId": 58, "amount": 50},
    {"ingredientId": 39, "amount": 20}
  ],

  "GIN BASIL SMASH": [
    {"ingredientId": 58, "amount": 50},
    {"ingredientId": 90, "amount": 20},
    {"ingredientId": 77, "amount": 1},
    {"ingredientId": 105, "amount": 8}
  ],

  "GIN GIN MULE": [
    {"ingredientId": 58, "amount": 40},
    {"ingredientId": 92, "amount": 20},
    {"ingredientId": 86, "amount": 20},
    {"ingredientId": 57, "amount": 8},
    {"ingredientId": 107, "amount": 2},
    {"ingredientId": 97, "amount": 100}
  ],

  "HANKY PANKY": [
    {"ingredientId": 58, "amount": 40},
    {"ingredientId": 23, "amount": 40},
    {"ingredientId": 114, "amount": 2.5}
  ],

  "LAST WORD": [
    {"ingredientId": 58, "amount": 20},
    {"ingredientId": 25, "amount": 20},
    {"ingredientId": 59, "amount": 20},
    {"ingredientId": 86, "amount": 20}
  ],

  "Martinez": [
    {"ingredientId": 58, "amount": 50},
    {"ingredientId": 23, "amount": 20},
    {"ingredientId": 67, "amount": 10},
    {"ingredientId": 30, "amount": 5},
    {"ingredientId": 70, "amount": 1},
    {"ingredientId": 9, "amount": 1}
  ],

  "NEGRONI": [
    {"ingredientId": 58, "amount": 20},
    {"ingredientId": 63, "amount": 20},
    {"ingredientId": 60, "amount": 20}
  ],

  "RAMOS GIN FIZZ": [
    {"ingredientId": 117, "amount": 50},
    {"ingredientId": 90, "amount": 20},
    {"ingredientId": 85, "amount": 15},
    {"ingredientId": 86, "amount": 15},
    {"ingredientId": 48, "amount": 30},
    {"ingredientId": 6, "amount": 20},
    {"ingredientId": 104, "amount": 5},
    {"ingredientId": 101, "amount": 40}
  ],

  "SINGAPORE SLING": [
    {"ingredientId": 58, "amount": 40},
    {"ingredientId": 27, "amount": 15},
    {"ingredientId": 34, "amount": 5},
    {"ingredientId": 30, "amount": 5},
    {"ingredientId": 109, "amount": 50},
    {"ingredientId": 86, "amount": 20},
    {"ingredientId": 91, "amount": 2.5}
  ],

  "Southside": [
    {"ingredientId": 58, "amount": 50},
    {"ingredientId": 93, "amount": 15},
    {"ingredientId": 86, "amount": 20},
    {"ingredientId": 57, "amount": 6}
  ],

  "TUXEDO COCKTAIL": [
    {"ingredientId": 68, "amount": 30},
    {"ingredientId": 67, "amount": 30},
    {"ingredientId": 59, "amount": 5},
    {"ingredientId": 70, "amount": 2},
    {"ingredientId": 9, "amount": 1},
    {"ingredientId": 2, "amount": 1}
  ],

  "vesper MARTINI": [
    {"ingredientId": 58, "amount": 30},
    {"ingredientId": 103, "amount": 10},
    {"ingredientId": 29, "amount": 5}
  ],

  "WHITE LADY": [
    {"ingredientId": 58, "amount": 50},
    {"ingredientId": 30, "amount": 20},
    {"ingredientId": 85, "amount": 20},
    {"ingredientId": 90, "amount": 5},
    {"ingredientId": 6, "amount": 15}
  ],

  "white NEGRONI": [
    {"ingredientId": 58, "amount": 20},
    {"ingredientId": 89, "amount": 20},
    {"ingredientId": 56, "amount": 20}
  ],

  "XX CENTURY COCKTAIL": [
    {"ingredientId": 58, "amount": 20},
    {"ingredientId": 29, "amount": 20},
    {"ingredientId": 32, "amount": 20},
    {"ingredientId": 85, "amount": 20}
  ],

  "Pisco Sour": [
    {"ingredientId": 76, "amount": 50},
    {"ingredientId": 86, "amount": 30},
    {"ingredientId": 90, "amount": 20},
    {"ingredientId": 6, "amount": 20},
    {"ingredientId": 50, "amount": 3}
  ],

  "Martini Fiero & Tonik": [
    {"ingredientId": 62, "amount": 80},
    {"ingredientId": 98, "amount": 100}
  ],

  "Vibrante/Floreale Tonik": [
    {"ingredientId": 64, "amount": 40},
    {"ingredientId": 98, "amount": 100}
  ],

  "PINK CHIHUAHUA": [
    {"ingredientId": 96, "amount": 40},
    {"ingredientId": 86, "amount": 15},
    {"ingredientId": 85, "amount": 5},
    {"ingredientId": 91, "amount": 15},
    {"ingredientId": 71, "amount": 5},
    {"ingredientId": 6, "amount": 15}
  ],

  "margarita": [
    {"ingredientId": 96, "amount": 40},
    {"ingredientId": 30, "amount": 20},
    {"ingredientId": 86, "amount": 20},
    {"ingredientId": 90, "amount": 2}
  ],

  "TOMMY'S MARGARITA": [
    {"ingredientId": 96, "amount": 50},
    {"ingredientId": 3, "amount": 20},
    {"ingredientId": 86, "amount": 20}
  ],

  "LA PALOMA": [
    {"ingredientId": 96, "amount": 40},
    {"ingredientId": 3, "amount": 20},
    {"ingredientId": 86, "amount": 20},
    {"ingredientId": 99, "amount": 100}
  ],

  "NEGRONI 0%": [
    {"ingredientId": 45, "amount": 20},
    {"ingredientId": 43, "amount": 20},
    {"ingredientId": 64, "amount": 20}
  ],

  "Martini Fiero spritz": [
    {"ingredientId": 62, "amount": 80},
    {"ingredientId": 78, "amount": 100},
    {"ingredientId": 101, "amount": 20}
  ],

  "Martini vibrante/floreale spritz": [
    {"ingredientId": 64, "amount": 40},
    {"ingredientId": 78, "amount": 80},
    {"ingredientId": 14, "amount": 20},
    {"ingredientId": 101, "amount": 20}
  ]
};

// Funkcja do konwersji receptury z ID na nazwy z odpowiednimi miarami
export function getRecipeWithNames(recipeName) {
  const recipe = recipes[recipeName];
  if (!recipe) return [];

  return recipe.map(item => {
    if (item.ingredientId) {
      const ingredient = getIngredientById(item.ingredientId);
      if (ingredient) {
        return {
          name: formatIngredientWithMeasure(ingredient, item.amount),
          amount: item.amount,
          ingredient: ingredient.name,
          measure: ingredient.measure
        };
      } else {
        return {
          name: `Nieznany składnik (ID: ${item.ingredientId})`,
          amount: item.amount,
          ingredient: 'Nieznany składnik',
          measure: 'unit'
        };
      }
    } else {
      // Fallback dla starych formatów
      return {
        name: `${item.amount} ${item.name || 'Nieznany składnik'}`,
        amount: item.amount,
        ingredient: item.name || 'Nieznany składnik',
        measure: 'unit'
      };
    }
  });
}

// Funkcja do konwersji receptury z ID na nazwy bez formatowania (dla kompatybilności)
export function getRecipeWithNamesSimple(recipeName) {
  const recipe = recipes[recipeName];
  if (!recipe) return [];

  return recipe.map(item => {
    if (item.ingredientId) {
      const ingredient = getIngredientById(item.ingredientId);
      return {
        name: ingredient ? ingredient.name : `Nieznany składnik (ID: ${item.ingredientId})`,
        amount: item.amount
      };
    } else {
      return {
        name: item.name || 'Nieznany składnik',
        amount: item.amount
      };
    }
  });
}

// Funkcje pomocnicze do pracy z przepisami
export function getAllRecipeNames() {
  return Object.keys(recipes);
}

export function getRecipeById(recipeName) {
  return recipes[recipeName] || [];
}

export function searchRecipesByIngredient(ingredientId) {
  const results = [];
  Object.entries(recipes).forEach(([recipeName, ingredients]) => {
    if (ingredients.some(ing => ing.ingredientId === ingredientId)) {
      results.push(recipeName);
    }
  });
  return results;
}

export function getRecipesWithIngredientNames() {
  const recipesWithNames = {};
  Object.entries(recipes).forEach(([recipeName, ingredients]) => {
    recipesWithNames[recipeName] = getRecipeWithNames(recipeName);
  });
  return recipesWithNames;
}

// Funkcja do analizy składników w przepisie
export function analyzeRecipe(recipeName) {
  const recipe = getRecipeWithNames(recipeName);
  if (!recipe.length) return null;

  const totalAmount = recipe.reduce((sum, ingredient) => {
    return sum + (typeof ingredient.amount === 'number' ? ingredient.amount : 0);
  }, 0);

  const alcoholicIngredients = recipe.filter(ingredient => {
    const name = ingredient.ingredient.toLowerCase();
    return name.includes('gin') || 
           name.includes('rum') || 
           name.includes('whisky') || 
           name.includes('whiskey') || 
           name.includes('wódka') || 
           name.includes('tequila') ||
           name.includes('brandy') ||
           name.includes('cognac') ||
           name.includes('bourbon') ||
           name.includes('vodka');
  });

  // Analiza miar
  const measureStats = {};
  recipe.forEach(ingredient => {
    const measure = ingredient.measure || 'unit';
    measureStats[measure] = (measureStats[measure] || 0) + 1;
  });

  return {
    recipeName,
    totalIngredients: recipe.length,
    totalAmount,
    alcoholicIngredients: alcoholicIngredients.length,
    measureStats,
    ingredients: recipe
  };
}

// Funkcja do filtrowania przepisów po miarach
export function getRecipesByMeasure(measure) {
  const results = [];
  Object.entries(recipes).forEach(([recipeName, ingredients]) => {
    const hasTargetMeasure = ingredients.some(ing => {
      const ingredient = getIngredientById(ing.ingredientId);
      return ingredient && ingredient.measure === measure;
    });
    if (hasTargetMeasure) {
      results.push(recipeName);
    }
  });
  return results;
}
