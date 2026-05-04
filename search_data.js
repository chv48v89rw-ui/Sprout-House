const foodData = [
    // Breakfast.html
    { name: "English Breakfast", link: "Breakfast.html" },
    { name: "Kings Breakfast", link: "Breakfast.html" },
    { name: "ShakShuka", link: "Breakfast.html" },
    { name: "Pancakes", link: "Breakfast.html" },
    { name: "Omelette", link: "Breakfast.html" },
    { name: "French Toast", link: "Breakfast.html" },

    // AddOns.html
    { name: "Fries", link: "AddOns.html" },
    { name: "Rice", link: "AddOns.html" },
    { name: "Mashed Potatoes", link: "AddOns.html" },
    { name: "Ugali", link: "AddOns.html" },
    { name: "Cheese", link: "AddOns.html" },
    { name: "Bacon", link: "AddOns.html" },
    { name: "Egg", link: "AddOns.html" },
    { name: "Vegetables", link: "AddOns.html" },
    { name: "Naan", link: "AddOns.html" },
    { name: "Plain Bread", link: "AddOns.html" },
    { name: "Salsa", link: "AddOns.html" },
    { name: "Guacamole", link: "AddOns.html" },
    { name: "Honey", link: "AddOns.html" },
    { name: "Vanilla", link: "AddOns.html" },
    { name: "Caramel", link: "AddOns.html" },
    { name: "Cinnamon", link: "AddOns.html" },
    { name: "Ginger", link: "AddOns.html" },

    // Beef.html
    { name: "Beef Stroganoff", link: "Beef.html" },
    { name: "Pepper Steak", link: "Beef.html" },
    { name: "T - Bone", link: "Beef.html" },
    { name: "Chinese Beef Stir Fry", link: "Beef.html" },

    // Beverage.html
    { name: "Cappuccino", link: "Beverage.html" },
    { name: "Americano", link: "Beverage.html" },
    { name: "Mocha", link: "Beverage.html" },
    { name: "Latte", link: "Beverage.html" },
    { name: "Machiatto", link: "Beverage.html" },
    { name: "House Coffee", link: "Beverage.html" },
    { name: "Expresso", link: "Beverage.html" },
    { name: "Decaffe", link: "Beverage.html" },
    { name: "African Tea", link: "Beverage.html" },
    { name: "Masala Tea", link: "Beverage.html" },
    { name: "Lemon Tea", link: "Beverage.html" },
    { name: "Dawa", link: "Beverage.html" },
    { name: "Apple", link: "Beverage.html" },
    { name: "Mango", link: "Beverage.html" },
    { name: "Passion", link: "Beverage.html" },
    { name: "Carrot", link: "Beverage.html" },
    { name: "Orange", link: "Beverage.html" },
    { name: "Pineapple Mint", link: "Beverage.html" },
    { name: "Mango", link: "Beverage.html" },
    { name: "Passion", link: "Beverage.html" },
    { name: "Melon", link: "Beverage.html" },
    { name: "Apple", link: "Beverage.html" },
    { name: "Carrot", link: "Beverage.html" },
    { name: "Passion", link: "Beverage.html" },
    { name: "Lemon Orchard Spritz", link: "Beverage.html" },
    { name: "Mid Night Orchard", link: "Beverage.html" },
    { name: "Blossom Fizz", link: "Beverage.html" },
    { name: "Spicy Ginger Mule", link: "Beverage.html" },
    { name: "Tropical Grove", link: "Beverage.html" },
    { name: "Virgin Kombucha", link: "Beverage.html" },
    { name: "Sweet Escape", link: "Beverage.html" },
    { name: "Apple Sparkle", link: "Beverage.html" },
    { name: "Orange Mojito", link: "Beverage.html" },
    { name: "Passion Bloom", link: "Beverage.html" },
    { name: "Pinacolada", link: "Beverage.html" },
    { name: "Strawberry Mojito", link: "Beverage.html" },
    { name: "Spiced Mojito", link: "Beverage.html" },
    { name: "Lemonade/Pink Lemonade", link: "Beverage.html" },
    { name: "Mixed Orange", link: "Beverage.html" },
    { name: "Banana Avocado", link: "Beverage.html" },
    { name: "Mango Banana", link: "Beverage.html" },
    { name: "Tropical", link: "Beverage.html" },
    { name: "Coconut Oats & Dates", link: "Beverage.html" },
    { name: "Oreo", link: "Beverage.html" },
    { name: "Pinacolada", link: "Beverage.html" },
    { name: "Strawberry", link: "Beverage.html" },
    { name: "Mocha", link: "Beverage.html" },
    { name: "Vanilla", link: "Beverage.html" },
    { name: "Chocolate", link: "Beverage.html" },
    { name: "Blueberry", link: "Beverage.html" },
    { name: "Mango Berry", link: "Beverage.html" },

    // Burger.html
    { name: "Classic Beef", link: "Burger.html" },
    { name: "Classic Chicken", link: "Burger.html" },
    { name: "Californian", link: "Burger.html" },
    { name: "Sprouthouse King", link: "Burger.html" },
    { name: "Sprouthouse Queen", link: "Burger.html" },

    // Chicken.html
    { name: "Grilled Chicken", link: "Chicken.html" },
    { name: "Chicken Curry", link: "Chicken.html" },
    { name: "Chicken Tenders", link: "Chicken.html" },
    { name: "Chicken & Mushroom", link: "Chicken.html" },
    { name: "Chicken Karafuu", link: "Chicken.html" },

    // Fish.html
    { name: "Fish Fillet in Citrus Glaze", link: "Fish.html" },
    { name: "Whole Fish in Coconut Sauce", link: "Fish.html" },
    { name: "Whole Fish Dry Fried", link: "Fish.html" },

    // Lamb.html
    { name: "Lamb Chops", link: "Lamb.html" },
    { name: "Mutton Curry", link: "Lamb.html" },

    // Pasta.html
    { name: "Bolognaise Spaghetti", link: "Pasta.html" },
    { name: "Mushroom Pasta", link: "Pasta.html" },
    { name: "Creamy Garlic Chicken Pasta", link: "Pasta.html" },
    { name: "Alfredo", link: "Pasta.html" },

    // Pizzas.html
    { name: "Chicken BBQ", link: "Pizzas.html" },
    { name: "Margherita", link: "Pizzas.html" },
    { name: "Meat Lovers", link: "Pizzas.html" },
    { name: "Sausage Supreme", link: "Pizzas.html" },
    { name: "Santa Fe Pizza", link: "Pizzas.html" },
    { name: "Hawaiian", link: "Pizzas.html" },
    { name: "Oh My Veg", link: "Pizzas.html" },

    // Pork.html
    { name: "Pork Spare Ribs", link: "Pork.html" },
    { name: "Pork Chops", link: "Pork.html" },

    // Salads.html
    { name: "Greek Salad", link: "Salads.html" },
    { name: "Chicken Ceaser", link: "Salads.html" },
    { name: "Garden Salad", link: "Salads.html" },
    { name: "Almond Mandarin Salad", link: "Salads.html" },

    // Sandwiches.html
    { name: "Beef & Eggplant", link: "Sandwiches.html" },
    { name: "Chicken & Cheese", link: "Sandwiches.html" },
    { name: "Coffee Cream & Butternut", link: "Sandwiches.html" },
    { name: "Garden Sandwich", link: "Sandwiches.html" },

    // SeaFood.html
    { name: "Pan Seared Prawns", link: "SeaFood.html" },
    { name: "Prawns Alfredo", link: "SeaFood.html" },
    { name: "Prawns Curry", link: "SeaFood.html" },
    { name: "Octopus", link: "SeaFood.html" },
    { name: "Calamari", link: "SeaFood.html" },

    // Soups.html
    { name: "Thai Chicken Soup", link: "Soups.html" },
    { name: "Cream of Mushroom Soup", link: "Soups.html" },
    { name: "Butternut Squash & Ginger Soup", link: "Soups.html" },
    { name: "Classic Fish Soup", link: "Soups.html" },

    // Starters.html
    { name: "Chicken Wings", link: "Starters.html" },
    { name: "Loaded Fries", link: "Starters.html" },
    { name: "Samosa", link: "Starters.html" },
    { name: "Chicken Satay", link: "Starters.html" },
    { name: "Fish Fingers", link: "Starters.html" },
    { name: "Chicken Pie", link: "Starters.html" },
    { name: "Meat Pie", link: "Starters.html" },

    // Wraps.html
    { name: "Chicken Wrap", link: "Wraps.html" },
    { name: "Beef Wrap", link: "Wraps.html" },
    { name: "Veg Wrap", link: "Wraps.html" }
];