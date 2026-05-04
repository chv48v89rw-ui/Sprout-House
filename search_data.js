const foodData = [
    // Breakfast.html
    { name: "English Breakfast", link: "Breakfast.html#english-breakfast" },
    { name: "Kings Breakfast", link: "Breakfast.html#kings-breakfast" },
    { name: "ShakShuka", link: "Breakfast.html#shakshuka" },
    { name: "Pancakes", link: "Breakfast.html#pancakes" },
    { name: "Omelette", link: "Breakfast.html#omelette" },
    { name: "French Toast", link: "Breakfast.html#french-toast" },

    // AddOns.html
    { name: "Fries", link: "AddOns.html#fries" },
    { name: "Rice", link: "AddOns.html#rice" },
    { name: "Mashed Potatoes", link: "AddOns.html#mashed-potatoes" },
    { name: "Ugali", link: "AddOns.html#ugali" },
    { name: "Cheese", link: "AddOns.html#cheese" },
    { name: "Bacon", link: "AddOns.html#bacon" },
    { name: "Egg", link: "AddOns.html#egg" },
    { name: "Vegetables", link: "AddOns.html#vegetables" },
    { name: "Naan", link: "AddOns.html#naan" },
    { name: "Plain Bread", link: "AddOns.html#plain-bread" },
    { name: "Salsa", link: "AddOns.html#salsa" },
    { name: "Guacamole", link: "AddOns.html#guacamole" },
    { name: "Honey", link: "AddOns.html#honey" },
    { name: "Vanilla", link: "AddOns.html#vanilla" },
    { name: "Caramel", link: "AddOns.html#caramel" },
    { name: "Cinnamon", link: "AddOns.html#cinnamon" },
    { name: "Ginger", link: "AddOns.html#ginger" },

    // Beef.html
    { name: "Beef Stroganoff", link: "Beef.html#beef-stroganoff" },
    { name: "Pepper Steak", link: "Beef.html#pepper-steak" },
    { name: "T - Bone", link: "Beef.html#t-bone" },
    { name: "Chinese Beef Stir Fry", link: "Beef.html#chinese-beef-stir-fry" },

    // Beverage.html
    { name: "Cappuccino", link: "Beverage.html#cappuccino" },
    { name: "Americano", link: "Beverage.html#americano" },
    { name: "Mocha", link: "Beverage.html#mocha" },
    { name: "Latte", link: "Beverage.html#latte" },
    { name: "Machiatto", link: "Beverage.html#machiatto" },
    { name: "House Coffee", link: "Beverage.html#house-coffee" },
    { name: "Expresso", link: "Beverage.html#expresso" },
    { name: "Decaffe", link: "Beverage.html#decaffe" },
    { name: "African Tea", link: "Beverage.html#african-tea" },
    { name: "Masala Tea", link: "Beverage.html#masala-tea" },
    { name: "Lemon Tea", link: "Beverage.html#lemon-tea" },
    { name: "Dawa", link: "Beverage.html#dawa" },
    { name: "Apple", link: "Beverage.html#apple" },
    { name: "Mango", link: "Beverage.html#mango" },
    { name: "Passion", link: "Beverage.html#passion" },
    { name: "Carrot", link: "Beverage.html#carrot" },
    { name: "Orange", link: "Beverage.html#orange" },
    { name: "Pineapple Mint", link: "Beverage.html#pineapple-mint" },
    { name: "Mango", link: "Beverage.html#mango" },
    { name: "Passion", link: "Beverage.html#passion" },
    { name: "Melon", link: "Beverage.html#melon" },
    { name: "Apple", link: "Beverage.html#apple" },
    { name: "Carrot", link: "Beverage.html#carrot" },
    { name: "Passion", link: "Beverage.html#passion" },
    { name: "Lemon Orchard Spritz", link: "Beverage.html#lemon-orchard-spritz" },
    { name: "Mid Night Orchard", link: "Beverage.html#mid-night-orchard" },
    { name: "Blossom Fizz", link: "Beverage.html#blossom-fizz" },
    { name: "Spicy Ginger Mule", link: "Beverage.html#spicy-ginger-mule" },
    { name: "Tropical Grove", link: "Beverage.html#tropical-grove" },
    { name: "Virgin Kombucha", link: "Beverage.html#virgin-kombucha" },
    { name: "Sweet Escape", link: "Beverage.html#sweet-escape" },
    { name: "Apple Sparkle", link: "Beverage.html#apple-sparkle" },
    { name: "Orange Mojito", link: "Beverage.html#orange-mojito" },
    { name: "Passion Bloom", link: "Beverage.html#passion-bloom" },
    { name: "Pinacolada", link: "Beverage.html#pinacolada" },
    { name: "Strawberry Mojito", link: "Beverage.html#strawberry-mojito" },
    { name: "Spiced Mojito", link: "Beverage.html#spiced-mojito" },
    { name: "Lemonade/Pink Lemonade", link: "Beverage.html#lemonadepink-lemonade" },
    { name: "Mixed Orange", link: "Beverage.html#mixed-orange" },
    { name: "Banana Avocado", link: "Beverage.html#banana-avocado" },
    { name: "Mango Banana", link: "Beverage.html#mango-banana" },
    { name: "Tropical", link: "Beverage.html#tropical" },
    { name: "Coconut Oats & Dates", link: "Beverage.html#coconut-oats-dates" },
    { name: "Oreo", link: "Beverage.html#oreo" },
    { name: "Pinacolada", link: "Beverage.html#pinacolada" },
    { name: "Strawberry", link: "Beverage.html#strawberry" },
    { name: "Mocha", link: "Beverage.html#mocha" },
    { name: "Vanilla", link: "Beverage.html#vanilla" },
    { name: "Chocolate", link: "Beverage.html#chocolate" },
    { name: "Blueberry", link: "Beverage.html#blueberry" },
    { name: "Mango Berry", link: "Beverage.html#mango-berry" },

    // Burger.html
    { name: "Classic Beef", link: "Burger.html#classic-beef" },
    { name: "Classic Chicken", link: "Burger.html#classic-chicken" },
    { name: "Californian", link: "Burger.html#californian" },
    { name: "Sprouthouse King", link: "Burger.html#sprouthouse-king" },
    { name: "Sprouthouse Queen", link: "Burger.html#sprouthouse-queen" },

    // Chicken.html
    { name: "Grilled Chicken", link: "Chicken.html#grilled-chicken" },
    { name: "Chicken Curry", link: "Chicken.html#chicken-curry" },
    { name: "Chicken Tenders", link: "Chicken.html#chicken-tenders" },
    { name: "Chicken & Mushroom", link: "Chicken.html#chicken-and-mushroom" },
    { name: "Chicken Karafuu", link: "Chicken.html#chicken-karafuu" },

    // Fish.html
    { name: "Fish Fillet in Citrus Glaze", link: "Fish.html#fish-fillet-in-citrus-glaze" },
    { name: "Whole Fish in Coconut Sauce", link: "Fish.html#whole-fish-in-coconut-sauce" },
    { name: "Whole Fish Dry Fried", link: "Fish.html#whole-fish-dry-fried" },

    // Lamb.html
    { name: "Lamb Chops", link: "Lamb.html#lamb-chops" },
    { name: "Mutton Curry", link: "Lamb.html#mutton-curry" },

    // Pasta.html
    { name: "Bolognaise Spaghetti", link: "Pasta.html#bolognaise-spaghetti" },
    { name: "Mushroom Pasta", link: "Pasta.html#mushroom-pasta" },
    { name: "Creamy Garlic Chicken Pasta", link: "Pasta.html#creamy-garlic-chicken-pasta" },
    { name: "Alfredo", link: "Pasta.html#alfredo" },

    // Pizzas.html
    { name: "Chicken BBQ", link: "Pizzas.html#chicken-bbq" },
    { name: "Margherita", link: "Pizzas.html#margherita" },
    { name: "Meat Lovers", link: "Pizzas.html#meat-lovers" },
    { name: "Sausage Supreme", link: "Pizzas.html#sausage-supreme" },
    { name: "Santa Fe Pizza", link: "Pizzas.html#santa-fe-pizza" },
    { name: "Hawaiian", link: "Pizzas.html#hawaiian" },
    { name: "Oh My Veg", link: "Pizzas.html#oh-my-veg" },

    // Pork.html
    { name: "Pork Spare Ribs", link: "Pork.html#pork-spare-ribs" },
    { name: "Pork Chops", link: "Pork.html#pork-chops" },

    // Salads.html
    { name: "Greek Salad", link: "Salads.html#greek-salad" },
    { name: "Chicken Ceaser", link: "Salads.html#chicken-ceaser" },
    { name: "Garden Salad", link: "Salads.html#garden-salad" },
    { name: "Almond Mandarin Salad", link: "Salads.html#almond-mandarin-salad" },

    // Sandwiches.html
    { name: "Beef & Eggplant", link: "Sandwiches.html#beef-eggplant" },
    { name: "Chicken & Cheese", link: "Sandwiches.html#chicken-cheese" },
    { name: "Coffee Cream & Butternut", link: "Sandwiches.html#coffee-cream-butternut" },
    { name: "Garden Sandwich", link: "Sandwiches.html#garden-sandwich" },

    // SeaFood.html
    { name: "Pan Seared Prawns", link: "SeaFood.html#pan-seared-prawns" },
    { name: "Prawns Alfredo", link: "SeaFood.html#prawns-alfredo" },
    { name: "Prawns Curry", link: "SeaFood.html#prawns-curry" },
    { name: "Octopus", link: "SeaFood.html#octopus" },
    { name: "Calamari", link: "SeaFood.html#calamari" },

    // Soups.html
    { name: "Thai Chicken Soup", link: "Soups.html#thai-chicken-soup" },
    { name: "Cream of Mushroom Soup", link: "Soups.html#cream-of-mushroom-soup" },
    { name: "Butternut Squash & Ginger Soup", link: "Soups.html#butternut-squash-ginger-soup" },
    { name: "Classic Fish Soup", link: "Soups.html#classic-fish-soup" },

    // SproutHousePlatter.html
    { name: "Platter for Ten", link: "SproutHousePlatter.html#platter-for-ten" },
    { name: "Platter for Six", link: "SproutHousePlatter.html#platter-for-six" },

    // Starters.html
    { name: "Chicken Wings", link: "Starters.html#chicken-wings" },
    { name: "Loaded Fries", link: "Starters.html#loaded-fries" },
    { name: "Samosa", link: "Starters.html#samosa" },
    { name: "Chicken Satay", link: "Starters.html#chicken-satay" },
    { name: "Fish Fingers", link: "Starters.html#fish-fingers" },
    { name: "Chicken Pie", link: "Starters.html#chicken-pie" },
    { name: "Meat Pie", link: "Starters.html#meat-pie" },

    // Wraps.html
    { name: "Chicken Wrap", link: "Wraps.html#chicken-wrap" },
    { name: "Beef Wrap", link: "Wraps.html#beef-wrap" },
    { name: "Veg Wrap", link: "Wraps.html#veg-wrap" }
];