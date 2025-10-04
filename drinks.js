// drinks.js - Kompletna biblioteka drinków z kategoriami

// KOMPLETNA BIBLIOTEKA DRINKÓW
export const drinkLibrary = {
    "Wódka": [
        {
            name: "Bloody Mary",
            glass: "Collins",
            method: [
                "Do shakera wlewamy wszystkie składniki (z wyjątkiem oliwy truflowej)",
                "Mieszamy łyżeczką barmańską",
                "Szkło opruszamy picanto mix",
                "Przelewamy do szkła w pełni wypełnionego lodem",
                "Skrapiamy wierzch oliwą truflową"
            ],
            ingredients: [
                "50 ml Wódka",
                "100 ml Big Tom Tomato Juice",
                "10 ml Sok z cytryny",
                "10 ml Bloody Mary Mix",
                "3 krople oliwy truflowej"
            ],
            decoration: "Oliwka na szpadce - plus wierzch koktajlu skropiony oliwą truflową - picanto mix na szkle, slice ogórka"
        },
        {
            name: "Cosmopolitan",
            glass: "Nick & Nora",
            method: [
                "Do szklanicy wlewamy premix",
                "Mieszamy koktajl około 15 sekund",
                "Cedzimy do uprzednio zmrożonego szkła"
            ],
            ingredients: [
                "30 ml Wódka",
                "10 ml Aperol",
                "30 ml Kordiał z Żurawiny i Róży",
                "10 ml Esencji z trawy cytrynowej",
                "różowy glitter"
            ],
            decoration: "suszony, czerwony kwiatostan róży"
        },
        {
            name: "Espresso Martini",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki intensywnie wstrząsamy z dużą ilością lodu",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła"
            ],
            ingredients: [
                "40 ml Wódka",
                "20 ml Galliano Espresso",
                "10 ml Syrop Waniliowy",
                "1 espresso",
                "1 x dash Angostura Cocoa Bitters"
            ],
            decoration: "tarta fasola tonka + bezik"
        },
        {
            name: "Golden Cadillac",
            glass: "Nick & Nora",
            method: [
                "Wlewamy wszystkie składniki do shakera",
                "Wstrząsamy intensywnie",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła"
            ],
            ingredients: [
                "30 ml Creme De Cacao",
                "30 ml Galliano Autentico",
                "30 ml Half Half"
            ],
            decoration: "Bezik plus gorzka tarta czekolada + złoty pył"
        },
        {
            name: "Grasshooper",
            glass: "Nick & Nora",
            method: [
                "Wlewamy wszystkie składniki do shakera",
                "Wstrząsamy intensywnie",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła"
            ],
            ingredients: [
                "20 ml Creme De Cacao",
                "20 ml Creme De Menthe",
                "20 ml Wódka",
                "30 ml Half Half"
            ],
            decoration: "Bezik plus gorzka tarta czekolada"
        },
        {
            name: "Long Island Iced Tea",
            glass: "Swizzle Glass",
            method: [
                "Wlewamy wszystkie składniki do shakera (poza Colą)",
                "Wstrząsamy intensywnie",
                "Szkło uzupełniamy lodem i wlewamy 40 ml Coca Coli",
                "Na lód przelewamy powoli koktajl, cedząc pojedyńczo"
            ],
            ingredients: [
                "20 ml Gin",
                "20 ml Wódka",
                "20 ml Rum",
                "20 ml Cointreau",
                "20 ml Tequila",
                "10 ml syropu cukrowego",
                "20 ml soku z cytryny",
                "40 ml Coca Coli"
            ],
            decoration: "Plasterek cytryny"
        },
        {
            name: "Pornstar Martini",
            glass: "Coupe + kieliszek do wódki",
            method: [
                "Wszystkie składniki wstrząsamy z dużą ilością lodu",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła"
            ],
            ingredients: [
                "40 ml wódka",
                "20 ml Syropu waniliowego",
                "20 ml soku z limonki",
                "20 ml przecieru z marakui",
                "1 shot prosecco"
            ],
            decoration: "posypka z pudru buraczanego + kwiatostan róży"
        },
        {
            name: "Vodka Sour",
            glass: "Double Old Fashioned Glass",
            method: [
                "Wstrząsamy wszystko bez lodu (szybki dry shake)",
                "Kolejno dynamiczny shake z lodem",
                "Cedzimy całość na lód (kości) do szkła"
            ],
            ingredients: [
                "40 ml Wódka",
                "25 ml soku z cytryny",
                "15 ml syropu cukrowego",
                "20 ml Albumina",
                "1 x dash Angostura Bitters"
            ],
            decoration: "coin z pomarańczy"
        },
        {
            name: "Kyiv Mule",
            glass: "Collins",
            method: [
                "Do copper muga wlewamy wszystkie składniki",
                "Mieszamy łyżeczką w celu połączenia wszystkich składników",
                "Zasypujemy w pełni lodem"
            ],
            ingredients: [
                "40 ml Wódka",
                "15 ml soku z limonki",
                "10 ml syropu cukrowego",
                "100 ml Thomas Henry Spicy Ginger",
                "1 x dash Angostura Bitters"
            ],
            decoration: "2 szczypy mięty + ćwiartka limonki"
        }
    ],
    "Gin": [
        {
            name: "ARM & NAVY",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wstrząsamy z dużą ilością lodu.",
                "Cedzimy koktajl podwójnie.",
                "Spryskujemy całość olejkami cytrynowymi.",
            ],
            ingredients: [
                "50 ml London Dry Gin",
                "20 ml Orgeat",
                "20 ml soku z cytryny",
                "1 x dash Angostura Bitters",
            ],
            decoration: "olejki z cytryny + coin z cytryny"
        },
        {
            name: "AVIATION",
            glass: "Nick & Nora",
            method: [
                "Wstrząsamy wszystkie składniki z dużą ilością lodu.",
                "Cedzimy do uprzednio zmrożonego szkła.",
                "Okraszamy olejkami cytrynowymi.",
            ],
            ingredients: [
                "50 ml London Dry Gin",
                "10 ml Luxardo Maraschino",
                "5 ml Briottet - Violet",
                "15 ml soku z cytryny",
                "2,5 ml syrop cukrowy",
            ],
            decoration: "Wiśnia Koktajlowa + olejki cytrynowe"
        },
        {
            name: "BEE’S KNEES",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wstrząsamy z dużą ilością lodu.",
                "Cedzimy koktajl podwójnie.",
                "Spryskujemy całość olejkami pomarańczowymi",
            ],
            ingredients: [
                "50 ml London Dry Gin",
                "20 ml Syrop miodowo-imbirowy",
                "20 ml soku z cytryny",
                "20 ml soku z pomarańczy",
            ],
            decoration: "zest z pomarańczy przypięty do stópki"
        },
        {
            name: "BIJOU",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki mieszamy w szklanicy przez około 15 - 20",
                "Cedzimy do uprzednio zmrożonego szkła.",
                "Spryskujemy olejkami cytrynowymi.",
            ],
            ingredients: [
                "20 ml Aster Gin",
                "20 ml Martini Rubino",
                "20 ml Green Chartreuse",
                "1 x dash Orange Bitters",
            ],
            decoration: "Olejki z cytryny i wiśnia"
        },
        {
            name: "Bombay & Tonic",
            glass: "Copa Bombay",
            method: [
                "Do kieliszka wlewamy Gin",
                "zasypujemy w pełni lodem",
                "Dopełniamy cocktail tonikiem.",
            ],
            ingredients: [
                "40 ml Bombay Sapphire",
                "Top Up Thomas Henry Tonic",
            ],
            decoration: "1/4 limonki ułożona po środku koktajlu"
        },
        {
            name: "BRAMBLE",
            glass: "Collins",
            method: [
                "Do szkła wlewamy gin, sok z cytryny i cukier.",
                "Uzupełniamy szkło w 3/4 kruszonym lodem i intensywnie",
                "Dopełniamy kruszonym lodem, tak aby ponad rant wystawał lekki",
                "Nalewamy na wierzch likier Chambord.",
                "Dekorujemy i serwujemy z rurką.",
            ],
            ingredients: [
                "40 ml London Dry Gin Gin",
                "20 ml soku z cytryny",
                "10 ml syropu cukrowego",
                "15 ml Chambord",
            ],
            decoration: "kwiat gipsówki"
        },
        {
            name: "BREAKFAST MARTINI",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki mocno wstrząsamy z dużą ilością lodu.",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła.",
                "Okraszamy koktajl olejkami pomarańczowymi i dekorujemy żółtą różyczką",
            ],
            ingredients: [
                "50 ml London Dry Gin",
                "15 ml Cointreau",
                "20 ml sok z cytryny",
                "łyżeczka barmańska marmolady z pomarańczy",
            ],
            decoration: "olejki pomarańczowe i żółta różyczka położona na wierzchu."
        },
        {
            name: "CHARLIE CHAPLIN",
            glass: "",
            method: [],
            ingredients: [
                "30 ml Hayman’s Sloe Gin",
                "30 ml Archer’s",
                "30 ml sok z limonki",
            ],
            decoration: ""
        },
        {
            name: "CHRYSANTHEMUM",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wlewamy do szklanicy.",
                "Mieszamy około 15 sekund.",
                "Cedzimy całość do uprzednio zmrożonego szkła.",
                "zest z cytryny wycięty nożyczkami krawieckimi -",
            ],
            ingredients: [
                "60 ml Noilly Prat",
                "10 ml D.O.M. Benedictine",
                "1 x dash Absynth",
            ],
            decoration: "zest z cytryny wycięty nożyczkami krawieckimi -"
        },
        {
            name: "CLOVER CLUB",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wstrząsamy energicznie bez lodu.",
                "Kolejno mocny shake z dużą ilością lodu.",
                "Cedzimy podwójnie koktajl do uprzednio zmrożonego szkła.",
                "Na środku układamy odrobinę maliny iofilizowanej oraz",
            ],
            ingredients: [
                "40 ml London Dry Gin",
                "10 ml Martini Extra Dry",
                "20 ml soku z cytryny",
                "15 ml syropu malinowego",
                "2,5 ml cukru",
                "15 ml Albumina",
            ],
            decoration: "na środku koktajlu odrobinę maliny iofilizowanej + kwiat"
        },
        {
            name: "Corpse",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wstrząsamy z dużą ilością lodu.",
                "Zmrożone szkło spryskujemy absynthem.",
                "Cedzimy koktajl podwójnie.",
                "Spryskujemy całość olejkami cytrynowymi.",
                "Zest z cytryny karbowany przypinamy do stópki za pomocą",
            ],
            ingredients: [
                "20 ml London Dry Gin",
                "20 ml Cocchi Americano",
                "20 ml Cointreau",
                "20 ml soku z cytryny",
                "Absynth Spray",
            ],
            decoration: "zest z cytryny wycięty nożyczkami krawieckimi -"
        },
        {
            name: "DRY MARTINI",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wlewamy do szklanicy.",
                "Mieszamy z lodem dłużej - rozcieńczamy bardziej koktajl.",
                "Cedzimy na oliwkę do uprzednio zmrożonego szkła.",
                "Spryskujemy całość olejkami cytrynowymi.",
            ],
            ingredients: [
                "50 ml Fords (z zamrażarki*)",
                "10 ml Noilly Prat",
                "1 x dash Orange Bitters",
            ],
            decoration: "oliwka + olejki cytrynowe"
        },
        {
            name: "gimlet",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wlewamy do szklanicy.",
                "Mieszamy intensywnie przez około 20 sekund.",
                "Cedzimy do uprzednio zmrożonego szkła.",
                "Okraszamy olejkami grejpfrutowym + 3 krople oliwy mandarynkowej",
            ],
            ingredients: [
                "50 ml London Dry Gin",
                "20 ml Food Town Bars Lime Cordial",
            ],
            decoration: "olejki ze skórki grejpfrutowej + 3 krople oliwy mandarynkowej"
        },
        {
            name: "GIN BASIL SMASH",
            glass: "Old Fashioned",
            method: [
                "Bazylię układamy na dnie shakera.",
                "Przykrywamy ją połówką cytryny i dodajemy cukier.",
                "Ucieramy przyciskając na cytrynę.",
                "Dodajemy gin i wstrząsamy potężnie z dużą ilością lodu.",
                "Cedzimy podwójnie do szkła w pełni wypełnionego lodem.",
            ],
            ingredients: [
                "50 ml London Dry Gin",
                "20 ml syrop cukrowy",
                "1/2 cytryny",
                "8 liści bazylii",
            ],
            decoration: "3 liście bazylii"
        },
        {
            name: "GIN GIN MULE",
            glass: "Collins",
            method: [
                "Wszystkie składniki (z wyjątkiem piwa imbirowego)",
                "Cedzimy na lód do wysokiego szkła.",
                "Dopełniamy piwem imbirowym.",
                "Mieszamy łyżeczką i dekorujemy miętą oraz ogórkiem.",
            ],
            ingredients: [
                "40 ml London Dry Gin",
                "20 ml Syrop miodowo-imbirowy",
                "20 ml soku z limonki",
                "8 liści mięty",
                "2 plasterki ogórka",
                "Piwo Imbirowe - Top Up.",
            ],
            decoration: "Bukiet mięty + plasterek ogórka"
        },
        {
            name: "HANKY PANKY",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki mieszamy około 20 sekund w szklanicy.",
                "Cedzimy całość do uprzednio zmrożonego szkła.",
                "Okraszamy całość olejkami pomarańczowymi.",
                "Wrzucamy do środka kółko z pomarańczy.",
            ],
            ingredients: [
                "40 ml London Dry Gin",
                "40 ml Carpano Antica Formula",
                "2,5 ml Fernet Branca",
            ],
            decoration: "coin z pomarańczy"
        },
        {
            name: "LAST WORD",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wlewamy do shakera.",
                "Wstrząsamy niezwykle intensywnie.",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła.",
                "Okraszamy całość olejkami limonki i do środka wisienka.",
            ],
            ingredients: [
                "20 ml London Dry Gin",
                "20 ml Chartreuse Green",
                "20 ml Luxardo Maraschino",
                "20 ml Sok z limonki",
            ],
            decoration: "olejki z limonki + wiśnia koktajlowa"
        },
        {
            name: "Martinez",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki mieszamy przez około 15 sekund.",
                "kolejno cedzimy do uprzednio zmrożonego szkła.",
                "Okraszamy olejkami pomarańczowymi i do środka wrzucamy wiśnie",
            ],
            ingredients: [
                "50 ml London Dry Gin",
                "20 ml Carpano Antica",
                "10 ml Noilly Prat",
                "5 ml Cointreau",
                "1 x dash Orange Bitters",
                "1 x dash Angostura Bitters",
            ],
            decoration: "Wiśnia + olejki pomarańczowe"
        },
        {
            name: "NEGRONI",
            glass: "Whisky Glass",
            method: [
                "Wlewamy wszystkie składniki do szklanicy.",
                "Mieszamy przez około 10 - 15 sekund.",
                "Cedzimy do szkła po ściance (nie na bryłkę - tak aby nie zmazać",
                "Okraszamy całość olejkami pomarańczowymi i dekorujemy żółtkiem z pomarańczy",
            ],
            ingredients: [
                "20 ml London Dry Gin",
                "20 ml Martini Rubino",
                "20 ml Martini Bitter",
            ],
            decoration: "olejki pomarańczowe + kółko ,,coin” z pomarańczy."
        },
        {
            name: "RAMOS GIN FIZZ",
            glass: "Collins",
            method: [
                "Wstrząsamy wszystkie składniki intensywnie bez lodu.",
                "Wstrząsamy potężnie, doprawdy intensywnie koktajl przez około",
                "Cedzimy do szkła (doskonale kiedy jest zmrożone.",
                "Wypłukujemy shaker odrobiną wody gazowanej.",
                "Wlewamy powoli wodę gazowaną na środek koktajlu chcąc",
                "Z wierzchu kładziemy żółtą różyczkę.",
            ],
            ingredients: [
                "50 ml Ford’s",
                "20 ml syrop cukrowy",
                "15 ml soku z cytryny",
                "15 ml soku z limonki",
                "30 ml half half",
                "20 ml Albumina",
                "5 kropli wody z kwiatu pomarańczy",
                "40 ml wody gazowanej",
            ],
            decoration: "1 żółta różyczka + olejki z cytryny"
        },
        {
            name: "SINGAPORE SLING",
            glass: "Collins",
            method: [
                "Wszystkie składniki wstrząsamy intensywnie z lodem",
                "Cedzimy do szkła na lód.",
            ],
            ingredients: [
                "40 ml London Dry Gin",
                "15 ml Cherry Heering",
                "5 ml D.O.M. Benedictine",
                "5 ml Cointreau",
                "50 ml przecier ananasowy",
                "20 ml sok z limonki",
                "2,5 ml syrop z maliny",
            ],
            decoration: "suszka z limonki + wiśnia na szpadce"
        },
        {
            name: "Southside",
            glass: "Nick & Nora",
            method: [
                "Wstrząsamy wszystkie składniki z dużą ilością lodu.",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła.",
                "Dekorujemy miętą wsadzoną w czips z limonki.",
            ],
            ingredients: [
                "50 ml London Dry Gin",
                "15 ml syrop miętowy",
                "20 ml sok z limonki",
                "6 liści mięty",
            ],
            decoration: "mięta w czipsie limonkowym"
        },
        {
            name: "TUXEDO COCKTAIL",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki mieszamy około 20 sekund w szklanicy.",
                "Cedzimy całość do uprzednio zmrożonego szkła.",
                "Okraszamy całość olejkami cytrynowymi.",
                "Wrzucamy do środka wiśnie.",
            ],
            ingredients: [
                "30 ml Hayman’s Old Tom Gin",
                "30 ml Noilly Prat",
                "5 ml Luxardo Maraschino",
                "2 x dash Orange Bitters",
                "1 x dash Angostura Bitters",
                "1 x spray Absynth",
            ],
            decoration: "olejki cytrynowe + wiśnia"
        },
        {
            name: "vesper MARTINI",
            glass: "Mini Coupette",
            method: [
                "Wszystkie składniki wlewamy do shakera.",
                "Wstrząsamy całość niezwykle mocno.",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła.",
                "Spryskujemy całość dużym zestem i wkładamy go do środka.",
            ],
            ingredients: [
                "30 ml Beefeater London Dry Gin",
                "10 ml Belvedere Vodka",
                "5 ml Cocchi Americano",
            ],
            decoration: "Zest z cytryny włożony do środka"
        },
        {
            name: "WHITE LADY",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wstrząsamy bez lodu.",
                "Kolejno wstrząsamy z dużą ilością lodu.",
                "Cedzimy do uprzednio zmrożonego szkła.",
                "Okraszamy olejkami cytrynowymi i dekorujemy dwiema żółtymi różyczkami",
            ],
            ingredients: [
                "50 ml London Dry Gin",
                "20 ml Cointreau",
                "20 ml soku z cytryny",
                "5 ml cukru",
                "15 ml Albuminy",
            ],
            decoration: "2 żółte różyczki + olejki cytrynowe"
        },
        {
            name: "white NEGRONI",
            glass: "Whisky Glass",
            method: [
                "Wlewamy wszystkie składniki do szklanicy.",
                "Mieszamy przez około 10 - 15 sekund.",
                "Cedzimy do szkła po ściance (nie na bryłkę - tak aby nie zmazać",
                "Okraszamy całość olejkami grejpfrutowymi i i dekorujemy żółtkiem z grejpfruta",
            ],
            ingredients: [
                "20 ml London Dry Gin",
                "20 ml Suze",
                "20 ml Lillet Blanc",
            ],
            decoration: "olejki grejpfrutowe + zest z grejpfruta wycięty nożyczkami"
        },
        {
            name: "XX CENTURY COCKTAIL",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wstrząsamy z dużą ilością lodu.",
                "Cedzimy koktajl podwójnie.",
                "Spryskujemy całość olejkami cytrynowymi.",
                "Dekorujemy zestem z cytryny.",
            ],
            ingredients: [
                "20 ml London Dry Gin",
                "20 ml Cocchi Americano",
                "20 ml creme de cacao",
                "20 ml soku z cytryny",
            ],
            decoration: "zest z cytryny, przypięty do rantu szkła"
        }
    ],
        "Rum": [
        {
            name: "AIR MAIL",
            glass: "Champagne Flute",
            method: [
                "Wstrząsamy niezwykle intensywnie wszystkie składnik (z wyjątkiem Prosecco)",
                "Cedzimy do uprzednio zmrożonego szkła",
                "Dopełniamy Prosecco",
                "Dekorujemy"
            ],
            ingredients: [
                "50 ml Bacardi Carta Oro",
                "20 ml Syrop miodowo-imbirowy",
                "20 ml Soku z limonki",
                "40 ml Prosecco"
            ],
            decoration: "3 kosteczki imbiru na szpadce"
        },
        {
            name: "Caipirinha",
            glass: "Double Old Fashioned Glass",
            method: [
                "Ćwiartki limonki ucieramy za pomocą muddlera w szkle",
                "Dodajemy cachaçę i zasypujemy w pełni lodem",
                "Mieszamy intensywnie łyżą",
                "Dosypujemy kruszonego lodu i dekorujemy limonką układając ją na wierzchu/po środku koktajlu"
            ],
            ingredients: [
                "50 ml Leblon Cachaça",
                "15 ml Syrop cukrowy",
                "2 ćwiartki limonki"
            ],
            decoration: "1/4 limonki ułożona po środku koktajlu"
        },
        {
            name: "Classic Rum Swizzle",
            glass: "Collins",
            method: [
                "Do szkła wlewamy wszystkie składniki (z wyjątkiem Angostura Bitters)",
                "Do szkła z płynem wkładamy Swizzle Stick",
                "Zasypujemy w pełni kruszonym lodem",
                "Robimy Swizzle przez około 10 sekund",
                "Dopełniamy szkło kruszonym lodem, aby wystawało nieco ponad rant",
                "Na górę wlewamy Angostura Bitters",
                "Dekorujemy bukietem miętowym posypanym pudrem cytrusowym"
            ],
            ingredients: [
                "50 ml Bacardi Carta Blanca",
                "30 ml Soku z limonki",
                "20 ml Syrop cukrowy",
                "4 x dash Angostura Bitters"
            ],
            decoration: "Bukiet mięty + czips z limonki"
        },
        {
            name: "Corn 'n' Oil",
            glass: "Double Old Fashioned Glass",
            method: [
                "Wszystkie składniki wlewamy do szkła",
                "Mieszamy łyżeczką i dodajemy bryłkę lodową",
                "1/2 limonki wyciskamy za pomocą łokcia i wrzucamy do środka",
                "Mieszamy przez około 10 sekund i serwujemy"
            ],
            ingredients: [
                "20 ml Bacardi 4 Anejo Cuatro",
                "10 ml Smith & Cross",
                "20 ml Falernum",
                "10 ml Aperol",
                "1 x dash Angostura Bitters",
                "1/2 limonki"
            ],
            decoration: "1/2 limonki"
        },
        {
            name: "Cuba Libre",
            glass: "Collins",
            method: [
                "Ćwiartki limonki ucieramy za pomocą muddlera w szkle",
                "Dodajemy rum i zasypujemy w pełni lodem",
                "Dopełniamy koktajl colą",
                "Dekorujemy limonką"
            ],
            ingredients: [
                "40 ml Bacardi Cuatro Anejo",
                "1/2 limonki (2 ćwiartki)",
                "Cola - top up"
            ],
            decoration: "1/4 limonki ułożona po środku koktajlu"
        },
        {
            name: "Daiquiri",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki intensywnie wstrząsamy z dużą ilością lodu",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła",
                "Dekorujemy zestem z limonki"
            ],
            ingredients: [
                "50 ml Bacardi Carta Blanca",
                "20 ml Soku z limonki",
                "10 ml Syrop cukrowy"
            ],
            decoration: "Zest z limonki"
        },
        {
            name: "Dark 'n' Stormy",
            glass: "Collins",
            method: [
                "Szkło wypełniamy w pełni lodem",
                "Wlewamy Angosturę i piwo imbirowe, wciskamy ćwiartkę limonki",
                "Po lodzie wlewamy rum - tworzą się warstwy",
                "Dekorujemy miętą",
                "Serwujemy z rurką - przed konsumpcją zamieszać"
            ],
            ingredients: [
                "40 ml Smith & Cross",
                "1 x dash Angostura Bitters",
                "1 ćwiartka limonki",
                "Ginger Beer - top up"
            ],
            decoration: "2 szczypy mięty"
        },
        {
            name: "El Presidente",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki mieszamy przez około 15 sekund",
                "Cedzimy całość do uprzednio zmrożonego szkła",
                "Okraszamy koktajl olejkami pomarańczowymi",
                "Do środka wrzucamy wiśnię"
            ],
            ingredients: [
                "40 ml Bank’s Rum",
                "15 ml Lillet Blanc",
                "5 ml Cointreau",
                "2,5 ml Syrop malinowy",
                "2 x dash Orange Bitters"
            ],
            decoration: "Wiśnia + olejki pomarańczowe"
        },
        {
            name: "Fish House Punch",
            glass: "Collins",
            method: [
                "Wlewamy składniki do shakera",
                "Wstrząsamy intensywnie",
                "Cedzimy na lód",
                "Dekorujemy"
            ],
            ingredients: [
                "20 ml Hennessy V.S.",
                "20 ml Bacardi 4 Anejo Cuatro",
                "15 ml De Kuyper Peach Tree",
                "30 ml Napar z herbaty Earl Grey",
                "20 ml Soku z cytryny",
                "15 ml Oleo Saccharum"
            ],
            decoration: "Bukiet mięty (3 szczypy) + ćwiartka cytryny"
        },
        {
            name: "Fog Cutter",
            glass: "Collins",
            method: [
                "Wstrząsamy niezwykle intensywnie wszystkie składniki",
                "Cedzimy na lód do wysokiego szkła"
            ],
            ingredients: [
                "20 ml Pisco",
                "20 ml London Dry Gin",
                "20 ml Bacardi Carta Oro",
                "20 ml Orgeat",
                "30 ml Soku z cytryny",
                "30 ml Soku z pomarańczy",
                "10 ml Ruby Port"
            ],
            decoration: "Bukiet mięty + czips z ananasa - całość oprószona pudrem pomarańczowym"
        },
        {
            name: "Hemingway Daiquiri",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wstrząsamy intensywnie z lodem",
                "Cedzimy do uprzednio zmrożonego szkła",
                "Okraszamy olejkami grejpfrutowymi",
                "Wrzucamy wiśnię do środka"
            ],
            ingredients: [
                "40 ml Bacardi Carta Blanca",
                "20 ml Sok grejpfrutowy",
                "15 ml Soku z limonki",
                "10 ml Syrop cukrowy",
                "5 ml Maraschino Liqueur"
            ],
            decoration: "Olejki grejpfrutowe + wiśnia koktajlowa"
        },
        {
            name: "Hot Rum Grog",
            glass: "Irish Coffee Cup",
            method: [
                "Szkło uzupełniamy wrzątkiem i trzymamy przez chwilę aby je rozgrzać",
                "Wlewamy wszystkie składniki",
                "Dopełniamy wrzątkiem"
            ],
            ingredients: [
                "50 ml Bacardi Spiced",
                "20 ml Soku z cytryny",
                "15 ml Soku z grejpfruta",
                "15 ml Soku z pomarańczy",
                "20 ml Syrop waniliowy",
                "1 x dash Angostura Bitters",
                "Wrzątek"
            ],
            decoration: "Laska cynamonu + pół plasterka pomarańczy + kandyzowany imbir"
        },
        {
            name: "Mai Tai",
            glass: "Double Old Fashioned Glass",
            method: [
                "Wszystkie składniki wlewamy do shakera",
                "Dodajemy kości lodu i wstrząsamy",
                "Przelewamy wraz z lodem do szkła (Dirty Shake)",
                "Dopełniamy lodem",
                "Dekorujemy"
            ],
            ingredients: [
                "30 ml Bacardi Carta Blanca",
                "20 ml Smith & Cross",
                "15 ml Cointreau",
                "10 ml Orgeat",
                "30 ml Soku z limonki",
                "5 ml Syrop cukrowy"
            ],
            decoration: "Czips z ananasa + bukiet mięty oprószony pudrem"
        },
        {
            name: "Mojito",
            glass: "Collins",
            method: [
                "Limonkę ucieramy wraz z syropem miętowym",
                "Dodajemy miętę i rum",
                "Zasypujemy w pełni lodem kruszonym",
                "Intensywnie mieszamy łyżą barmańską",
                "Dopełniamy lodem",
                "Uzupełniamy wodą gazowaną",
                "Dekorujemy miętą i ją opruszamy"
            ],
            ingredients: [
                "50 ml Bacardi Cuatro Anejo",
                "1/2 limonki",
                "15 ml Syrop miętowy",
                "8 liści mięty",
                "Woda gazowana"
            ],
            decoration: "Bukiet mięty oprószony cukrem klasycznym lub cytrusowym"
        },
        {
            name: "Mojito Norblito",
            glass: "Collins",
            method: [
                "Premix wlewamy do shakera",
                "Wstrząsamy intensywnie",
                "Do szkła wlewamy splash wody gazowanej",
                "Cedzimy koktajl podwójnie do szkła na wodę",
                "Dopełniamy maksymalnie lodem",
                "Dekorujemy miętą"
            ],
            ingredients: [
                "50 ml Bacardi Carta Blanca",
                "30 ml Fake Lime Juice",
                "20 ml Syrop miętowy",
                "5 liści mięty"
            ],
            decoration: "Bukiet mięty oprószony pudrem klasycznym bądź cytrusowym"
        },
        {
            name: "Nuclear Daiquiri",
            glass: "Nick & Nora",
            method: [
                "Wstrząsamy niezwykle intensywnie wszystkie składniki",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła",
                "Dekorujemy"
            ],
            ingredients: [
                "30 ml Rum Bar White Overproof",
                "20 ml Green Chartreuse",
                "10 ml Falernum",
                "20 ml Sok z limonki",
                "10 ml Syrop cukrowy"
            ],
            decoration: "Mięta w czipsie limonkowym"
        },
        {
            name: "Old Cuban",
            glass: "Collins",
            method: [
                "Wszystkie składniki intensywnie wstrząsamy z dużą ilością lodu (z wyjątkiem prosecco)",
                "Cedzimy podwójnie do szkła na lód",
                "Dopełniamy Prosecco",
                "Dekorujemy"
            ],
            ingredients: [
                "50 ml Bacardi Cuatro Anejo",
                "20 ml Syrop waniliowy",
                "20 ml Sok z limonki",
                "1 x dash Angostura Bitters",
                "40 ml Prosecco",
                "5 liści mięty"
            ],
            decoration: "Mięta posypana pudrem"
        },
        {
            name: "Queen's Park Swizzle",
            glass: "Collins",
            method: [
                "Do szkła wrzucamy miętę",
                "Przyciskamy ją Swizzle Stick i wlewamy wszystkie składniki",
                "Dopełniamy w pełni kruszonym lodem",
                "Uprawiamy swizzle przez około 10-15 sekund",
                "Dopełniamy kruszonym lodem, aby ponad rant wystawał kopczyk",
                "Dekorujemy miętą i czipsem z ananasa - całość posypujemy cukrem pudrem cytrusowym"
            ],
            ingredients: [
                "30 ml Bacardi Carta Oro",
                "20 ml Smith & Cross",
                "10 ml Falernum",
                "20 ml Soku z limonki",
                "10 ml Syrop waniliowy",
                "10 liści mięty"
            ],
            decoration: "Bukiet mięty + czips z ananasa - całość oprószona pudrem"
        },
        {
            name: "Pisco Sour",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wstrząsamy bez lodu.",
                "Kolejno wstrząsamy z dużą ilością lodu",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła.",
            ],
            ingredients: [
                "50 ml Pisco",
                "30 ml soku z limonki",
                "20 ml syropu cukrowego",
                "20 ml albumina",
                "3 krople Inca Bitters",
            ],
            decoration: "3 krople Angostura Bitters na wierzchu koktajlu -"
        },
        {
            name: "Right Hand Cocktail",
            glass: "Old Fashioned",
            method: [
                "Wlewamy wszystkie składniki do szklanicy",
                "Intensywnie mieszamy przez około 15 sekund",
                "Cedzimy do szkła na bryłkę",
                "Okraszamy całość olejkami pomarańczowymi i dekorujemy coin na spinaczu przypiętym do rantu szkła"
            ],
            ingredients: [
                "30 ml Bacardi 8 yo",
                "20 ml Martini Bitter",
                "20 ml Martini Rubino",
                "5 ml Mozart Black Dark Chocolate"
            ],
            decoration: "Coin z pomarańczy przypięte na spinaczu do rantu szkła"
        },
        {
            name: "Zombie",
            glass: "Collins",
            method: [
                "Wlewamy wszystkie składniki do shakera",
                "Wstrząsamy z dużą ilością lodu",
                "Cedzimy na kości do wysokiego szkła"
            ],
            ingredients: [
                "30 ml Bacardi Carta Oro",
                "20 ml Smith & Cross",
                "10 ml Falernum",
                "30 ml Soku z grejpfruta",
                "20 ml Soku z limonki",
                "20 ml Syrop piernikowy",
                "5 ml Syrop malinowy",
                "1 x dash Angostura Bitters",
                "2 ml Absynth"
            ],
            decoration: "Bukiet mięty + tarta fasola tonka + imbir kandyzowany na szpadce"
        }
    ],
    "Tequila": [
        {
            name: "PINK CHIHUAHUA",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wstrząsamy bez lodu",
                "Kolejno wstrząsamy z lodem.",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła.",
            ],
            ingredients: [
                "40 ml Tequila",
                "15 ml soku z limonki",
                "5 ml soku z cytryny",
                "15 ml syropu malinowego",
                "5 ml Orgeat",
                "15 ml Albumina",
            ],
            decoration: "kwiat Gomfreny + pył czerwony"
        },
        {
            name: "margarita",
            glass: "Nick & Nora",
            method: [
                "Szkło dekorujemy solą - crustę umieszczamy,",
                "Wszystkie składniki wstrząsamy intensywnie z dużą ilością",
                "Serwis.",
            ],
            ingredients: [
                "40 ml Tequila",
                "20 ml Cointreau",
                "20 ml Soku z limonki",
                "dosłownie kilka kropli syropu cukrowego",
            ],
            decoration: "Wysokiej jakości sól na rancie (crusta tylko na połowie"
        },
                {
            name: "TOMMY’S MARGARITA",
            glass: "Old Fashioned",
            method: [
                "Wlewamy wszystkie składniki do shake",
                "Wstrząsamy z dużą ilością lodu.",
                "Cedzimy na lód do szkła..",
            ],
            ingredients: [
                "50 ml Tequila",
                "20 ml Agave Mix",
                "20 ml Soku z limonki",
            ],
            decoration: "czips z ananas"
        },
        {
            name: "LA PALOMA",
            glass: "Collins",
            method: [
                "Ściankę szklanki smarujemy limonką, bądź innym cytrusem. Posypujemy naszym pikantno - słonym miksem.",
                "Do szkła wlewamy wszystkie składniki i mieszamy łyżeczką barmańską",
                "Zasypujemy w pełni lodem i dekorujemy grejpfrutem.",
            ],
            ingredients: [
                "40 ml Tequila",
                "20 ml Agave Mix",
                "20 ml Soku z limonki",
                "100 ml Three Cents Grapefruit Soda",
            ],
            decoration: "mała ćwiartka grejpfruta + miks przypraw na rancie."
        }
    ],
    "Bezalkoholowe": [
        {
            name: "NEGRONI 0%",
            glass: "Whisky Glass",
            method: [
                "Wlewamy wszystkie składniki do szklanicy.",
                "Mieszamy przez około 10 - 15 sekund.",
                "Cedzimy do szkła po ściance (nie na bryłkę - tak aby nie zmazać stempla",
                "Okraszamy całość olejkami pomarańczowymi i dekorujemy żółtkiem z pomarańcz",
            ],
            ingredients: [
                "20 ml Gin bezalkoholowy",
                "20 ml Giffard Bitter Syrop",
                "20 ml Martini Vibrante",
            ],
            decoration: "olejki pomarańczowe + kółko ,,coin” z pomarańczy."
        },
        {
            name: "Martini Fiero spritz",
            glass: "Copa Martini",
            method: [
                "Wlewamy 80 ml Martini Fiero do kieliszka",
                "Dolewamy 100 ml Martini Prosecco",
                "Zasypujemy w pełni lodem",
            ],
            ingredients: [
                "80 ml Martini Fiero",
                "100 ml Martini Prosecco",
                "splash sody",
            ],
            decoration: "2 półplastry pomarańczy"
        },
        {
            name: "Martini Fiero & Tonik",
            glass: "Copa Martini",
            method: [
                "Wlewamy 80 ml Martini Fiero do kieliszka",
                "Zasypujemy w pełni lodem",
                "Uzupełniamy tonikiem Kinley",
                "Dekorujemy 2 półplastrami pomarańczy",
            ],
            ingredients: [
                "80 ml Martini Fiero",
                "top up Kinley tonik",
            ],
            decoration: "2 półplastry pomarańczy"
        },
        {
            name: "Vibrante/Floreale Tonik",
            glass: "Copa Martini",
            method: [
                "Wlewamy 40 ml Martini Vibrante/Floreale",
                "Zasypujemy w pełni lodem",
                "Uzupełniamy tonikiem Kinley",
                "Dekorujemy 2 półplastrami pomarańczy",
            ],
            ingredients: [
                "40 ml Vibrante/Floreale",
                "top up Kinley tonik",
            ],
            decoration: "2 półplastry pomarańczy"
        },
        {
            name: "Martini vibrante/floreale spritz",
            glass: "Copa Martini",
            method: [
                "Wlewamy 40 ml Martini Vibrante/Floreale do kieliszka",
                "Dolewamy 80 ml Prosecco bezalkoholowego bezalkoholowego oraz kordiał z czarnego bzu",
                "Zasypujemy w pełni lodem",
                "Dodajemy splash wody gazowanej oraz dekorujemy 2 półplastrami pomarańczy"
            ],
            ingredients: [
                "40 ml Martini Vibrante/Floreale",
                "80 ml Prosecco Medbubbles",
                "20 ml Belvoir Elderflower",
                "splash sody",
            ],
            decoration: "2 półplastry pomarańczy"
        }
    ],    "Whiskey": [
        {
            name: "Amaretto Sour",
            glass: "Nick & Nora",
            method: [
                "Wstrząsamy składniki bez lodu",
                "Kolejno energicznie z lodem",
                "Cedzimy koktajl do uprzednio zmrożonego szkła"
            ],
            ingredients: [
                "40 ml Galliano Amaretto",
                "10 ml Dewar’s 8 Caribbean Smooth",
                "30 ml soku z cytryny",
                "10 ml syropu cukrowego",
                "20 ml Albumina"
            ],
            decoration: "wierzch koktajlu posypany pudrem buraczanym oraz suszony kwiatostan róży"
        },
        {
            name: "Blood & Sand",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki (z wyjątkiem Islay Malt Spray) wstrząsamy z dużą ilością lodu",
                "Zanim przecedzimy koktajl, szkło spryskujemy Islay Malt Spray",
                "Cedzimy podwójnie koktajl do zmrożonego i okraszonego aromatem Islay Malt Spray szkła"
            ],
            ingredients: [
                "30 ml Dewar’s 12 YO",
                "20 ml Carpano Antica Formula",
                "20 ml Cherry Brandy",
                "30 ml sok z pomarańczy",
                "Islay Malt Spray"
            ],
            decoration: "wiśnia na szpadce + olejki pomarańczowe"
        },
        {
            name: "Boulevardier",
            glass: "Old Fashioned",
            method: [
                "Wlewamy składniki do szklanicy",
                "Mieszamy przez około 15 sekund",
                "Kolejno cedzimy do szkła z bryłką lodową ze stemplem (nie lejemy na lód, tylko po ściance aby nie rozmyć stempla)"
            ],
            ingredients: [
                "30 ml Maker’s Mark",
                "20 ml Martini Bitter",
                "20 ml Martini Rubino"
            ],
            decoration: "olejki pomarańczowe + coin z pomarańczy przypięte na spinaczu do rantu szkła"
        },
        {
            name: "Manhattan",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki mieszamy w szklanicy (potrzebujemy około 20 sekund mieszania)",
                "Cedzimy do uprzednio schłodzonego szkła",
            ],
            ingredients: [
                "50 ml Maker’s Mark",
                "20 ml Carpano Antica Formula",
                "2 x dash Angostura Bitters"
            ],
            decoration: "Wiśnia Koktajlowa + spray z olejków pomarańczowych"
        },
        {
            name: "Whisky Sour",
            glass: "Double Old Fashioned Glass",
            method: [
                "Wstrząsamy wszystko bez lodu (szybki dry shake)",
                "Kolejno dynamiczny shake z lodem",
                "Cedzimy całość na lód do szkła"
            ],
            ingredients: [
                "40 ml Dewar’s 8 Caribbean Smooth",
                "25 ml soku z cytryny",
                "15 ml syropu cukrowego",
                "20 ml Albumina",
                "1 x dash Angostura Bitters"
            ],
            decoration: "coin z pomarańczy"
        },
        {
            name: "Irish Coffee",
            glass: "Irish Coffee Cup",
            method: [
                "Do Irish Coffee Cup wlewamy wrzątek z ekspresu. Po chwili wylewamy",
                "Kolejno wlewamy Whiskey i syrop waniliowy",
                "Mieszamy łyżą barmańską",
                "Wlewamy kawę, tak aby zostało 1,5 centymetra przestrzeni od rantu szkła",
                "Z lodówki wyciągamy śmietankę i wstrząsamy ją",
                "po łyżce nalewamy śmietankę"
            ],
            ingredients: [
                "50 ml Tullamore DEW",
                "120 ml kawy przelewowej",
                "15 ml syropu waniliowego"
            ],
            decoration: "tarta fasola tonka na wierzch + gwiazdka anyżu"
        },        {
            name: "BRANDY CRUSTA",
            glass: "Champagne Flute",
            method: [
                "Szkło opruszamy cukrem pomarańczowym - uprzednio smarujemycytryną aby się cukier",
                "Wszystkie składniki wstrząsamy intensywnie.",
                "Cedzimy podwójnie do szkła."
            ],
            ingredients: [
                "40 ml Hennessy V.S.",
                "10 ml Cointreau",
                "10 ml Maraschino",
                "20 ml soku z cytryny",
                "5 ml syropu cukrowego",
            ],
            decoration: "cukier pomarańczowy plus duży zest z pomarańczy"
        },
        {
            name: "CAMERON'S KICK",
            glass: "Old Fashioned",
            method: [
                "Wstrząsamy wszystko z dużą ilością lodu.",
                "Cedzimy do szkła w pełni wypełnionego lodem."
            ],
            ingredients: [
                "20 ml Dewar’s 8 Caribbean Smooth",
                "20 ml Tullamore DEW",
                "25 ml soku z cytryny",
                "20 ml Orgeat",
            ],
            decoration: "coin z pomarańczy"
        },
        {
            name: "Corpse Reviver #1",
            glass: "Nick & Nora",
            method: [
                "Wlewamy wszystkie składniki do szklanicy.",
                "Mieszamy z dużą ilością lodu przez 20 sekund.",
                "Cedzimy do uprzednio zmrożonego szkła.",
                "Spray z olejków cytrynowych.",
            ],
            ingredients: [
                "20 ml Papidoux V.S.O.P.",
                "20 ml Hennessy V.S.",
                "20 ml Martini Rubino",
            ],
            decoration: "Olejki cytrynowe (serwujemy bez garnishu)"
        },
        {
            name: "Derby",
            glass: "Nick & Nora",
            method: [
                "Wszystkie składniki wstrząsamy intensywnie z dużą ilością lodu.",
                "Okraszamy całość olejkami grejpfrutowymi.",
                "Zest wycięty nożyczkami karbowanymi przypinamy na spinacz do rantu szkła",
            ],
            ingredients: [
                "50 ml Maker’s Mark",
                "30 ml soku grejpfrutowego",
                "20 ml Syrop miodowo-imbirowy",
            ],
            decoration: "zest z grejpfruta wycięty nożyczkami karbowanymi przypięty do rantu szkła"
        },
        {
            name: "HOT TODDY",
            glass: "Hot Toddy Cup",
            method: [
                "Szkło zalewamy wrzątkiem.",
                "Wylewamy wrzątek.",
                "Wlewamy whisky, cytrynę i syrop.",
                "Wkładamy laskę cynamonu i plaster cytryny.",
                "Zalewamy wrzątkiem ( z ekspresu)",
            ],
            ingredients: [
                "50 ml Dewar’s 8 Caribbean Smooth",
                "20 ml Syrop miodowo-imbirowy",
                "20 ml sok z cytryny",
                "Wrzątek",
                "Laska cynamonu",
                "plaster cytryn",
            ],
            decoration: "laska cynamonu + plaster cytryny"
        },
        {
            name: "JAPANESE COCKTAIL",
            glass: "Old Fashioned",
            method: [
                "Mieszamy wszystkie składniki w szklanicy.",
                "Cedzimy na bryłkę lodową do niskiego szkła.",
                "Okraszamy olejkami cytrynowymi i dekorujemy wiśnią koktajlową na szpadce.",
            ],
            ingredients: [
                "40 ml Hennessyy V.S.",
                "5 ml Orgeat",
                "3 x dash Angostura Bitters",
            ],
            decoration: "Olejki ze skórki cytrynowej + wiśnia koktajlowa"
        },
        {
            name: "NEW YORK SOUR",
            glass: "Double Old Fashioned Glass",
            method: [
                "Wstrząsamy wszystko bez lodu (szybki dry shake - bez wina",
                "Kolejno dynamiczny shake z lodem.",
                "Cedzimy całość na lód do szkła",
                "Czekamy chwilę i wlewamy na kostki lodu powoli wino.",
                "Kręcimy szklanką dookoła aby wino równo się rozłożyło.",
                "dekorujemy coinem z pomarańczy",
            ],
            ingredients: [
                "40 ml Jim Beam Black",
                "25 ml soku z cytryny",
                "15 ml syropu cukrowego",
                "20 ml albumina",
                "1 x dash Angostura Bitters",
                "15 ml Serenello Merlot",
            ],
            decoration: "coin z pomarańczy"
        },
        {
            name: "Loretto old fashioned",
            glass: "Old Fashioned",
            method: [
                "Wlewamy wszystkie składniki do szklanicy (lub bezpośrednio",
                "intensywnie mieszamy przez około 15 sekund.",
                "Kolejno cedzimy do szkła na bryłkę (jeżeli koktajl robimy",
                "Wykańczamy zestem z pomarańczy i dekorujemy wiśnią",
            ],
            ingredients: [
                "50 ml Maker’s Mark",
                "5 ml zalewy z wiśni",
                "3 x dash Angostura Bitters",
                "1 x dash Orange Bitters",
            ],
            decoration: "Kółko - coin z pomarańczy położony na bryłce + wiśnia"
        },
        {
            name: "PAPER PLANE",
            glass: "Nick & Nora",
            method: [
                "Wlewamy premix do shakera.",
                "Dodajemy sok z cytryny",
                "Wstrząsamy wszystko niezwykle intensywnie.",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła.",
                "Okraszamy całość olejkami pomarańczowymi i przypinamy zest do stópki",
            ],
            ingredients: [
                "20 ml Maker’s Mark",
                "20 ml Amaro Nonino",
                "20 ml Aperol",
                "20 ml soku z cytryny",
            ],
            decoration: "Zest z pomarańczy => przypięty do stópki."
        },
        {
            name: "PENICILLIN",
            glass: "Old Fashioned",
            method: [
                "Wlewamy składniki do shakera.",
                "Wstrząsamy intensywnie.",
                "Cedzimy na lód.",
                "Sprajujemy Islay Malt z atomizera.",
                "Dekorujemy kandyzowanym imbirem.",
            ],
            ingredients: [
                "50 ml Dewar’s 8 Caribbean Smooth",
                "20 ml syrop miodowo - imbirowy",
                "20 ml soku z cytryny",
                "Islay Malt Spray",
            ],
            decoration: "kandyzowany imbir na wykałaczce koktajlowej"
        },
        {
            name: "Sazerac",
            glass: "Szkło do koniaku - snifter",
            method: [
                "Szkło schładzamy uzupełniając lodem i wodą.",
                "Wszystkie składniki wlewamy do szklanicy (oprócz Absynth Spray)",
                "Mieszamy intensywnie przez około 15 sekund.",
                "Ze szkła wyrzucamy lód.",
                "Spryskujemy Absynthem.",
                "Okraszamy olejkami cytrynowymi (zest wyrzucamy - nie dekorujemy nim)",
            ],
            ingredients: [
                "20 ml Jim Beam Rye",
                "20 ml Hennessy V.S.",
                "3 x dash Peychaud's Bitters",
                "1 x dash Angostura Bitters",
                "5 ml syrop cukrowy",
                "Absynth Spray",
            ],
            decoration: "olejki ze skórki cytrynowej"
        },
        {
            name: "TRYNIDAD SOUR",
            glass: "Nick & Nora",
            method: [
                "Wstrząsamy wszystkie składniki z duża ilością lodu.",
                "Cedzimy podwójnie do uprzednio zmrożonego szkła.",
                "Ścieramy gorzką czekoladę na wierzch i dekorujemy gwiazdką anyżu.",
            ],
            ingredients: [
                "40 ml Angostura Aromatic Bitters",
                "15 ml Jim Beam Rye",
                "30 ml Orgeat",
                "20 ml soku z cytryny",
            ],
            decoration: "tarta gorzka czekolada + gwiazdka anyżu"
        },
        {
            name: "WHISKEY SMASH",
            glass: "Old Fashioned",
            method: [
                "Mięte kładziemy na spodzie shakera => przykrywamy ją cytryną",
                "Dodajemy syrop cukrowy i naciskamy na cytrynę muddlerem wyciskając z niej sok(intensywnie)",
                "Dolewamy bourbon i uprawiamy bardzo mocny shake.",
                "Cedzimy podwójnie na lód i dekorujemy miętą, którą finalnie",
            ],
            ingredients: [
                "50 ml Maker’s Mark",
                "20 ml syropu cukrowego",
                "1/2 cytryny",
                "8 liści mięty"
            ],
            decoration: "Bukiet mięty opruszony pudrem pomarańczowym"
        },
        {
            name: "VIEUX CAREE",
            glass: "Old Fashioned",
            method: [
                "Wszystkie składniki mieszamy w szklanicy.",
                "Cedzimy na bryłkę lodową- nie bezpośrednio na bryłkę, tak aby stempel się nie rozmył.",
                "Okraszamy olejkami cytrynowymi i dekorujemy coinem cytrynowym",
            ],
            ingredients: [
                "20 ml Jim Beam Rye",
                "20 ml Hennessy V.S.",
                "20 ml Martini Rubino",
                "10 ml D.O.M Benedictine",
                "2 x dash Peychaud's Bitters",
                "1 x dash Angostura Bitters",
            ],
            decoration: "coin z cytryny"
        }
    ]
};

// Funkcje pomocnicze do pracy z drinkami
export function findDrinkByName(drinkName) {
  for (const [category, drinks] of Object.entries(drinkLibrary)) {
    const drink = drinks.find(d => d.name === drinkName);
    if (drink) {
      return drink;
    }
  }
  return null;
}

export function getAllDrinkCategories() {
  return Object.keys(drinkLibrary);
}

export function getDrinksByCategory(category) {
  return drinkLibrary[category] || [];
}

export function getAllDrinks() {
  const allDrinks = [];
  Object.values(drinkLibrary).forEach(categoryDrinks => {
    allDrinks.push(...categoryDrinks);
  });
  return allDrinks;
}

export function searchDrinks(searchTerm) {
  const results = [];
  const lowerSearchTerm = searchTerm.toLowerCase();

  Object.entries(drinkLibrary).forEach(([category, drinks]) => {
    drinks.forEach(drink => {
      if (drink.name.toLowerCase().includes(lowerSearchTerm) ||
          drink.ingredients.some(ingredient => 
            ingredient.toLowerCase().includes(lowerSearchTerm)
          ) ||
          drink.glass.toLowerCase().includes(lowerSearchTerm)) {
        results.push({ ...drink, category });
      }
    });
  });

  return results;
}

export function getDrinksByGlass(glassType) {
  const results = [];
  Object.entries(drinkLibrary).forEach(([category, drinks]) => {
    drinks.forEach(drink => {
      if (drink.glass === glassType) {
        results.push({ ...drink, category });
      }
    });
  });
  return results;
}

export function getDrinksByIngredient(ingredient) {
  const results = [];
  const lowerIngredient = ingredient.toLowerCase();

  Object.entries(drinkLibrary).forEach(([category, drinks]) => {
    drinks.forEach(drink => {
      if (drink.ingredients.some(ing => 
          ing.toLowerCase().includes(lowerIngredient)
        )) {
        results.push({ ...drink, category });
      }
    });
  });

  return results;
}
