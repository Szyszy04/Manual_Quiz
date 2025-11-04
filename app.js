import { ingredients, getIngredientById } from './ingredients.js';

import { recipes, getRecipeWithNames, getRecipeWithNamesSimple } from './recipes.js';

import { vodkas, glassOptions, drinkGlasses, drinkDecorations, drinkCategories, findDrinkCategory } from './data.js';;

const { createApp, ref, computed } = Vue;

// Implementacja findDrinkByName używająca nowej struktury danych
function findDrinkByNameLocal(name) {
    const category = findDrinkCategory(name);
    if (!category) return null;

    return {
        name: name,
        category: category,
        glass: drinkGlasses[name] || "Unknown",
        decoration: drinkDecorations[name] || ""
    };
}

createApp({
    setup() {
        // ===== STAN APLIKACJI =====
        const currentScreen = ref('start');
        const selectedCategories = ref({
            proportions: true,
            review: false,
            vodka: false,
            builder: false
        });

        const selectedAlcoholCategories = ref({
            'Wódka': true,
            'Gin': false,
            'Whiskey': false,
            'Rum': false,
            'Tequila': false,
            'Bezalkoholowe': false
        });

        const questions = ref([]);
        const currentQuestionIndex = ref(0);
        const score = ref(0);
        const answerSelected = ref(false);
        const selectedAnswer = ref(null);

        // Stan dla trybu builder
        const builderStep = ref(1);
        const practiceMode = ref(false);
        const selectedIngredients = ref(new Set());
        const ingredientAmounts = ref({});
        const selectedGlass = ref('');
        const showBuilderRecipe = ref(false);
        const showDecorationSuccess = ref(false);

        // ===== FUNKCJE POMOCNICZE =====
        function getCategoryEmoji(category) {
            const emojiMap = {
                'Wódka': '🍀',
                'Gin': '🌿',
                'Whiskey': '🥃',
                'Rum': '🏴☠️',
                'Tequila': '🌵',
                'Bezalkoholowe': '🥤'
            };
            return emojiMap[category] || '🍸';
        }

        // Kategoryzacja składników dla buildera
        function categorizeIngredientsForBuilder() {
            const categorization = {
                "Główne alkohole": [
                    "Wódka", "Aster Gin", "Bombay Sapphire", "Archer's", "Old Tom Gin", "Sloe Gin", "Fords",
                    "Dewar's 12 YO", "Dewar's 8 Caribbean Smooth", "Maker's Mark", "Jim Beam Black", "Jim Beam Rye", "Tullamore DEW",
                    "Aged Rum", "Caribbean Blend Rum", "Gold Rum", "Jamaican Rum", "Overproof White Rum", "Rum", "Spiced Rum", "White Rum",
                    "Tequila", "Pisco", "Cachaça"
                ],
                "Dodatkowe alkohole": [
                    "Hennessy V.S.", "Cherry Brandy", "Papidoux V.S.O.P.", "Absynth", "Absynth Spray", "Islay Malt Spray",
                    "Carpano Antica Formula", "Cocchi Americano", "Lillet Blanc", "Martini Bitter", "Martini Extra Dry",
                    "Martini Fiero", "Martini Rubino", "Martini Vibrante", "Noilly Prat", "Prosecco", "Red Wine", "Ruby Port"
                ],
                "Likiery": [
                    "Amaro Nonino", "Aperol", "Briottet - Violet", "Chambord", "Chartreuse Green", "Cherry Heering",
                    "Cointreau", "Creme De Cacao", "Creme De Menthe", "D.O.M Benedictine", "Falernum",
                    "Galliano Amaretto", "Galliano Autentico", "Galliano Espresso",
                    "Luxardo Maraschino", "Mozart Black Dark Chocolate", "Peach Liqueur", "Suze", "Fernet Branca"
                ],
                "Soki i napoje": [
                    "Big Tom Tomato Juice", "Fake Lime Juice", "Sok grejpfrutowy", "Sok z cytryny", "Sok z limonki",
                    "Sok z pomarańczy", "przecier ananasowy", "przecieru z marakui", "zalewy z wiśni",
                    "Coca Cola", "Ginger Beer", "Tonic", "Three Cents Grapefruit Soda", "Woda gazowana", "Gin bezalkoholowy"
                ],
                "Syropy i mixy": [
                    "Food Town Bars Lime Cordial", "Kordiał z Żurawiny i Róży", "Giffard Bitter Syrop", "Oleo Saccharum",
                    "Orgeat", "Syrop cukrowy", "Syrop malinowy", "Syrop miodowo-imbirowy", "Syrop miętowy",
                    "Syrop piernikowy", "Syrop waniliowy", "Agave Mix", "Belvoir Elderflower", "Bloody Mary Mix"
                ],
                "Bittery i dodatki": [
                    "Angostura Aromatic Bitters", "Angostura Bitters", "Angostura Cocoa Bitters", "Inca Bitters",
                    "Orange Bitters", "Peychaud's Bitters", "Albumina", "Half Half", "woda z kwiatu pomarańczy", "oliwy truflowej"
                ],
                "Ozdoby i inne": [
                    "Laska cynamonu", "Liście mięty", "Plaster cytryny", "liści bazylii", "ogórka", "różowy glitter",
                    "Ćwiartka limonki", "Esencji z trawy cytrynowej", "Espresso", "Napar z herbaty Earl Grey",
                    "Wrzątek", "marmolada z pomarańczy", "kawa przelewowa"
                ]
            };
            return categorization;
        }

        function getSortedIngredients() {
            const categorization = categorizeIngredientsForBuilder();
            const sortedIngredients = [];
            const categoryOrder = [
                "Główne alkohole", "Dodatkowe alkohole", "Likiery",
                "Soki i napoje", "Syropy i mixy", "Bittery i dodatki", "Ozdoby i inne"
            ];

            for (const category of categoryOrder) {
                if (categorization[category] && categorization[category].length > 0) {
                    sortedIngredients.push({
                        type: 'category_group',
                        categoryName: category,
                        ingredients: categorization[category]
                    });
                }
            }
            return sortedIngredients;
        }

        function getAllIngredients() {
            return ingredients.map(ingredient => ingredient.name);
        }

        function generateWrongRecipe(drinkName) {
            const recipeWithNames = getRecipeWithNamesSimple(drinkName);
            if (!Array.isArray(recipeWithNames)) return [];

            return recipeWithNames.map(ingredient => ({
                name: ingredient.name,
                amount: Math.max(5, ingredient.amount + (Math.random() > 0.5 ?
                    (Math.random() > 0.5 ? 5 : 10) :
                    (Math.random() > 0.5 ? -5 : -10)
                ))
            }));
        }

        function shuffleArray(array) {
            if (!Array.isArray(array)) return [];
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }

        // ===== COMPUTED PROPERTIES =====
        const hasSelectedAlcoholCategories = computed(() =>
            Object.values(selectedAlcoholCategories.value).some(Boolean)
        );

        const selectedAlcoholCategoriesList = computed(() =>
            Object.keys(selectedAlcoholCategories.value).filter(category =>
                selectedAlcoholCategories.value[category]
            )
        );

        const hasSelectedCategories = computed(() =>
            Object.values(selectedCategories.value).some(Boolean)
        );

        const currentQuestion = computed(() => {
            if (!questions.value || questions.value.length === 0) return {};
            if (currentQuestionIndex.value < 0 || currentQuestionIndex.value >= questions.value.length) return {};
            return questions.value[currentQuestionIndex.value] || {};
        });

        const shuffledAnswers = computed(() => {
            if (!currentQuestion.value?.answers) return [];
            return currentQuestion.value.answers;
        });

        const correctAnswerIndex = computed(() =>
            currentQuestion.value?.correctIndex || 0
        );

        const progressWidth = computed(() => {
            if (!questions.value || questions.value.length === 0) return '0%';
            return `${((currentQuestionIndex.value || 0) / questions.value.length) * 100}%`;
        });

        const showRecipe = computed(() => {
            return currentQuestion.value.type === 'review' && answerSelected.value;
        });

        const showProportionsInfo = computed(() => {
            return currentQuestion.value.type === 'proportions' && answerSelected.value;
        });

        const currentRecipe = computed(() => {
            if (currentQuestion.value.type === 'review' && currentQuestion.value.drinkName) {
                return getRecipeWithNames(currentQuestion.value.drinkName);
            }
            return [];
        });

        const builderCorrectRecipeWithNames = computed(() => {
            if (currentQuestion.value.type === 'builder' && currentQuestion.value.drinkName) {
                return getRecipeWithNames(currentQuestion.value.drinkName);
            }
            return [];
        });

        const selectedIngredientsCount = computed(() => selectedIngredients.value.size);

        const correctIngredients = computed(() => {
            if (currentQuestion.value.type === 'builder' && currentQuestion.value.drinkName) {
                const recipe = getRecipeWithNamesSimple(currentQuestion.value.drinkName);
                if (recipe && Array.isArray(recipe)) {
                    return new Set(recipe.map(ing => ing.name));
                }
            }
            return new Set();
        });

        const hasCorrectIngredients = computed(() => {
            const selected = selectedIngredients.value;
            const correct = correctIngredients.value;
            if (!selected || !correct) return false;
            return selected.size === correct.size &&
                Array.from(selected).every(ing => correct.has(ing));
        });

        const correctGlass = computed(() => {
            if (currentQuestion.value.type === 'builder' && currentQuestion.value.drinkName) {
                const drink = findDrinkByNameLocal(currentQuestion.value.drinkName);
                return drink?.glass || '';
            }
            return '';
        });

        const hasCorrectGlass = computed(() => {
            return selectedGlass.value === correctGlass.value;
        });

        const groupedIngredientsForBuilder = computed(() => getSortedIngredients());

        const shuffledGlassOptions = computed(() => {
            if (currentQuestion.value.type === 'builder' && currentQuestion.value.allGlasses) {
                return currentQuestion.value.allGlasses;
            }
            return [];
        });

        // ===== FUNKCJE QUIZ =====
        function getDrinksFromSelectedCategories() {
            const availableDrinks = [];
            selectedAlcoholCategoriesList.value.forEach(category => {
                if (drinkCategories[category]) {
                    drinkCategories[category].forEach(drinkName => {
                        if (recipes[drinkName]) {
                            availableDrinks.push(drinkName);
                        }
                    });
                }
            });
            return availableDrinks;
        }

        function createBuilderQuestion() {
            const availableDrinks = getDrinksFromSelectedCategories();
            if (availableDrinks.length === 0) return null;

            const randomDrink = availableDrinks[Math.floor(Math.random() * availableDrinks.length)];
            const allGlasses = shuffleArray([...glassOptions]);
            const drinkInfo = findDrinkByNameLocal(randomDrink);

            return {
                type: 'builder',
                drinkName: randomDrink,
                allIngredients: getSortedIngredients(),
                allGlasses: allGlasses,
                correctRecipe: recipes[randomDrink],
                correctGlass: drinkInfo?.glass || '',
                decoration: drinkInfo?.decoration || ''
            };
        }

        function createProportionsQuestion(drinkName) {
            const recipe = recipes[drinkName];
            if (!recipe) return null;

            const mlIngredients = recipe.filter(item => {
                if (item.ingredientId) {
                    const ingredient = getIngredientById(item.ingredientId);
                    return ingredient && ingredient.measure === 'ml';
                }
                return false;
            });

            if (mlIngredients.length === 0) return null;

            const randomIngredient = mlIngredients[Math.floor(Math.random() * mlIngredients.length)];
            const ingredient = getIngredientById(randomIngredient.ingredientId);
            const correctAmount = randomIngredient.amount;
            const showCorrectAmount = Math.random() > 0.5;

            let displayAmount;
            if (showCorrectAmount) {
                displayAmount = correctAmount;
            } else {
                const variations = [5, 10];
                const variation = variations[Math.floor(Math.random() * variations.length)];
                const isAdd = Math.random() > 0.5;
                displayAmount = Math.max(5, correctAmount + (isAdd ? variation : -variation));
            }

            const questionText = `Czy w drinku "${drinkName}" używa się ${displayAmount} ml składnika ${ingredient.name}?`;

            return {
                type: 'proportions',
                drinkName: drinkName,
                ingredient: ingredient.name,
                correctAmount: correctAmount,
                displayAmount: displayAmount,
                correct: showCorrectAmount,
                question: questionText,
                answers: ['TAK', 'NIE'],
                correctIndex: showCorrectAmount ? 0 : 1,
                correctInfo: `Poprawna proporcja: ${correctAmount} ml ${ingredient.name}`
            };
        }

        function createQuestion(type, item) {
            if (type === 'proportions') {
                return createProportionsQuestion(item);
            } else if (type === 'review') {
                const drinkRecipe = getRecipeWithNamesSimple(item);
                if (!drinkRecipe) return null;

                const allIngredients = getAllIngredients();
                const isTrue = Math.random() > 0.5;
                let ingredient;

                if (isTrue) {
                    const x = Math.floor(Math.random() * drinkRecipe.length);
                    ingredient = drinkRecipe[x].name;
                } else {
                    const ingredientsNotInDrink = allIngredients.filter(ing =>
                        !drinkRecipe.some(recipeIng => recipeIng.name === ing)
                    );
                    if (ingredientsNotInDrink.length === 0) return null;
                    ingredient = ingredientsNotInDrink[Math.floor(Math.random() * ingredientsNotInDrink.length)];
                }

                const questionText = `Czy ${ingredient} jest składnikiem drinka ${item}?`;

                return {
                    type: 'review',
                    correct: isTrue,
                    question: questionText,
                    drinkName: item,
                    answers: ['TAK', 'NIE'],
                    correctIndex: isTrue ? 0 : 1
                };
            } else if (type === 'vodka') {
                if (!item) return null;

                if (Math.random() > 0.5) {
                    const correct = item.price;
                    const availableVodkas = vodkas.filter(v => v.name !== item.name && v.price);
                    if (availableVodkas.length === 0) return null;
                    const wrong = shuffleArray(availableVodkas.map(v => v.price))[0];
                    const options = shuffleArray([correct, wrong]);

                    return {
                        type: 'vodka',
                        subType: 'price',
                        question: `Ile kosztuje shota wódki "${item.name}"?`,
                        answers: options.map(price => price + " zł"),
                        correctIndex: options.indexOf(correct)
                    };
                } else {
                    const correct = item.ingredient;
                    const availableVodkas = vodkas.filter(v => v.ingredient !== correct && v.ingredient);
                    if (availableVodkas.length === 0) return null;
                    const wrong = shuffleArray(availableVodkas.map(v => v.ingredient))[0];
                    const options = shuffleArray([correct, wrong]);

                    return {
                        type: 'vodka',
                        subType: 'ingredient',
                        question: `Jaki jest surowiec wódki "${item.name}"?`,
                        answers: options,
                        correctIndex: options.indexOf(correct)
                    };
                }
            } else if (type === 'builder') {
                return createBuilderQuestion();
            }
            return null;
        }

        // ===== FUNKCJE NAWIGACJI =====
        function goToStart() {
            currentScreen.value = 'start';
            resetBuilderState();
        }

        function toggleAlcoholCategory(category) {
            selectedAlcoholCategories.value[category] = !selectedAlcoholCategories.value[category];
        }

        // ===== FUNKCJE BUILDER =====
        function toggleIngredient(ingredient) {
            if (!ingredient) return;

            if (selectedIngredients.value.has(ingredient)) {
                selectedIngredients.value.delete(ingredient);
            } else {
                selectedIngredients.value.add(ingredient);
            }
            selectedIngredients.value = new Set(selectedIngredients.value);
        }

        function selectGlass(glass) {
            selectedGlass.value = glass;
        }

        function checkIngredients() {
            if (hasCorrectIngredients.value) {
                builderStep.value = 2;
                ingredientAmounts.value = {};
                const correctRecipe = getRecipeWithNamesSimple(currentQuestion.value.drinkName);
                correctRecipe.forEach(ing => {
                    ingredientAmounts.value[ing.name] = '';
                });
            } else {
                showBuilderRecipe.value = true;
                if (!practiceMode.value) {
                    setTimeout(() => {
                        nextBuilderQuestion();
                    }, 5000);
                } else {
                    setTimeout(() => {
                        resetCurrentBuilderQuestion();
                    }, 5000);
                }
            }
        }

        function checkProportions() {
            const correct = getRecipeWithNamesSimple(currentQuestion.value.drinkName);
            if (!correct) return;

            let isCorrect = true;
            for (let ingredient of correct) {
                const userAmount = parseInt(ingredientAmounts.value[ingredient.name]) || 0;
                if (Math.abs(userAmount - ingredient.amount) > 0) {
                    isCorrect = false;
                    break;
                }
            }

            if (isCorrect) {
                builderStep.value = 3;
                selectedGlass.value = '';
            } else {
                showBuilderRecipe.value = true;
                if (!practiceMode.value) {
                    setTimeout(() => {
                        nextBuilderQuestion();
                    }, 3000);
                } else {
                    setTimeout(() => {
                        resetCurrentBuilderQuestion();
                    }, 3000);
                }
            }
        }

        function checkGlass() {
            if (hasCorrectGlass.value) {
                score.value++;
                showDecorationSuccess.value = true;
                setTimeout(() => {
                    nextBuilderQuestion();
                }, 3000);
            } else {
                showBuilderRecipe.value = true;
                if (!practiceMode.value) {
                    setTimeout(() => {
                        nextBuilderQuestion();
                    }, 3000);
                } else {
                    setTimeout(() => {
                        resetCurrentBuilderQuestion();
                    }, 3000);
                }
            }
        }

        function resetCurrentBuilderQuestion() {
            builderStep.value = 1;
            selectedIngredients.value = new Set();
            ingredientAmounts.value = {};
            selectedGlass.value = '';
            showBuilderRecipe.value = false;
            showDecorationSuccess.value = false;
        }

        function togglePracticeMode() {
            practiceMode.value = !practiceMode.value;
        }

        function nextBuilderQuestion() {
            builderStep.value = 1;
            selectedIngredients.value = new Set();
            ingredientAmounts.value = {};
            selectedGlass.value = '';
            showBuilderRecipe.value = false;
            showDecorationSuccess.value = false;

            const newQuestion = createBuilderQuestion();
            if (newQuestion) {
                questions.value[currentQuestionIndex.value] = newQuestion;
            }

            if (currentQuestionIndex.value < questions.value.length - 1) {
                currentQuestionIndex.value++;
                resetState();
            } else {
                currentScreen.value = 'result';
            }
        }

        // ===== GŁÓWNE FUNKCJE QUIZ =====
        function startQuiz() {
            if (!hasSelectedAlcoholCategories.value) {
                alert('Wybierz przynajmniej jedną kategorię alkoholu!');
                return;
            }

            const selectedQuestions = [];
            const availableDrinks = getDrinksFromSelectedCategories();

            if (selectedCategories.value.proportions) {
                availableDrinks.forEach(drink => {
                    const question = createQuestion('proportions', drink);
                    if (question) selectedQuestions.push(question);
                });
            }

            if (selectedCategories.value.review) {
                availableDrinks.forEach(drink => {
                    const question = createQuestion('review', drink);
                    if (question) selectedQuestions.push(question);
                });
            }

            if (selectedCategories.value.vodka) {
                vodkas.forEach(vodka => {
                    const question = createQuestion('vodka', vodka);
                    if (question) selectedQuestions.push(question);
                });
            }

            if (selectedCategories.value.builder) {
                for (let i = 0; i < 5; i++) {
                    const question = createQuestion('builder');
                    if (question) selectedQuestions.push(question);
                }
            }

            if (selectedQuestions.length === 0) {
                alert('Nie udało się utworzyć żadnych pytań dla wybranych kategorii.');
                return;
            }

            questions.value = shuffleArray(selectedQuestions);
            currentQuestionIndex.value = 0;
            score.value = 0;
            resetState();
            resetBuilderState();
            currentScreen.value = 'quiz';
        }

        function resetState() {
            answerSelected.value = false;
            selectedAnswer.value = null;
        }

        function resetBuilderState() {
            builderStep.value = 1;
            selectedIngredients.value = new Set();
            ingredientAmounts.value = {};
            selectedGlass.value = '';
            showBuilderRecipe.value = false;
            showDecorationSuccess.value = false;
        }

        function answerQuestion(idx) {
            if (answerSelected.value) return;

            answerSelected.value = true;
            selectedAnswer.value = idx;

            if (idx === correctAnswerIndex.value) {
                score.value++;
            }

            setTimeout(nextQuestion, 2000);
        }

        function getAnswerClass(idx) {
            if (!answerSelected.value) return '';
            if (idx === correctAnswerIndex.value) return 'correct';
            if (idx === selectedAnswer.value) return 'wrong';
            return '';
        }

        function nextQuestion() {
            if (currentQuestionIndex.value < questions.value.length - 1) {
                currentQuestionIndex.value++;
                resetState();
                resetBuilderState();
            } else {
                currentScreen.value = 'result';
            }
        }

        function restartQuiz() {
            currentScreen.value = 'start';
            resetBuilderState();
            resetState();
        }

        // ===== RETURN =====
        return {
            // Screen management
            currentScreen,
            goToStart,

            // Categories and selection
            selectedCategories,
            selectedAlcoholCategories,
            hasSelectedCategories,
            hasSelectedAlcoholCategories,
            selectedAlcoholCategoriesList,
            toggleAlcoholCategory,
            getCategoryEmoji,

            // Quiz state
            questions,
            currentQuestion,
            currentQuestionIndex,
            shuffledAnswers,
            correctAnswerIndex,
            answerSelected,
            selectedAnswer,
            score,
            progressWidth,

            // Quiz functions
            startQuiz,
            answerQuestion,
            getAnswerClass,
            nextQuestion,
            restartQuiz,

            // Recipe display
            showRecipe,
            currentRecipe,
            recipes,
            getRecipeWithNames,
            showProportionsInfo,

            // Builder functionality
            builderStep,
            practiceMode,
            togglePracticeMode,
            selectedIngredients,
            selectedIngredientsCount,
            ingredientAmounts,
            selectedGlass,
            showBuilderRecipe,
            showDecorationSuccess,
            groupedIngredientsForBuilder,
            shuffledGlassOptions,
            correctIngredients,
            hasCorrectIngredients,
            correctGlass,
            hasCorrectGlass,
            builderCorrectRecipeWithNames,
            toggleIngredient,
            selectGlass,
            checkIngredients,
            checkProportions,
            checkGlass,

            // Other
            glassOptions,
            findDrinkByNameLocal
        };

    }
}).mount('#app');
