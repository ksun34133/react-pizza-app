export const types = ["veg", "nonveg"];
export const sizeList = {
  regular: "Regular",
  medium: "Medium",
  large: "Large",
};
export const crustList = {
  hand_toasted: "Hand Toasted",
  wheat_thin: "Wheat Thin",
  cheese_burst: "Cheese Burst",
  fresh_pan: "Fresh Pan",
};
export const priceList = {
  hand_toasted: { regular: 250, medium: 350, large: 450 },
  wheat_thin: { regular: 200, medium: 350, large: 500 },
  cheese_burst: { regular: 300, medium: 400, large: 550 },
  fresh_pan: { regular: 200, medium: 400, large: 600 },
  toppings: {
    veg: { regular: 35, medium: 60, large: 80 },
    nonveg: { regular: 50, medium: 75, large: 95 },
  },
};

export const topings = {
  veg: {
    grilled_mushrooms: "Grilled Mushrooms",
    onion: "Onion",
    capsicum: "Crisp Capsicum",
    tomato: "Fresh Tomato",
    paneer: "Paneer",
    pepper: "Red Pepper",
    jalapeno: "Jalapeno",
    corn: "Golder corn",
    olive: "Black Olive",
  },
  nonveg: {
    barbecue_chicken: "Barbecue Chicken",
    pery_pery_chicken: "Pery-Pery Chicken",
    chicken_sausage: "Chicken Sausage",
    chicken_tikka: "Chicken Tikka",
    chicken_keema: "Chicken Keema",
    chicken_pepperoni: "Chicken Pepperoni",
  },
};

export const pizzaList = [
  {
    id: 1,
    title: "Peppy Paneer",
    type: "veg",
    crust: "wheat_thin",
    price: 200,
    size: "regular",
    image: "peppy-paneer.jpg",
    description:
      "Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika",
  },
  {
    id: 2,
    title: "Deluxe Veggie",
    type: "veg",
    crust: "hand_toasted",
    price: 350,
    size: "medium",
    image: "deluxe-veggie.jpg",
    description:
      "Veg delight - onion, capsicum, grilled mushroom, corn & paneer",
  },
  {
    id: 3,
    title: "Veg Extravaganza",
    type: "veg",
    crust: "cheese_burst",
    price: 300,
    size: "regular",
    image: "veg-extravaganza.jpg",
    description:
      "Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese",
  },
  {
    id: 4,
    title: "Chicken Golden Delight",
    type: "nonveg",
    crust: "fresh_pan",
    price: 600,
    size: "large",
    image: "chicken-golden-delight.jpg",
    description:
      "Double pepper barbecue chicken, golden corn and extra cheese, true delight",
  },
  {
    id: 5,
    title: "Non Veg Supreme",
    type: "nonveg",
    crust: "hand_toasted",
    price: 250,
    size: "regular",
    image: "non-veg-supreme.jpg",
    description:
      "Supreme combination of black olives, onion, capsicum, grilled mushroom, pepper barbecue chicken",
  },
  {
    id: 6,
    title: "Chicken Pepperoni",
    type: "nonveg",
    crust: "cheese_burst",
    price: 400,
    size: "medium",
    image: "chicken-pepperoni.jpeg",
    description:
      "A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
  },
];
