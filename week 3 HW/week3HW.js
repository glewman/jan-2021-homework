const pizzaToppings = ['Bacon', 'Sausage', 'Pepperoni', 'Ham']

function greetCustomer() {
let greeting = 'Welcome to The Pizza Place, our toppings are: ';
for (let pizza of pizzaToppings) {
  greeting += `${pizza}.`
}
console.log(greeting);
}
greetCustomer()

function getPizzaOrder(size, crust, ...toppings) {
let pizzaOrder = `One ${size} ${crust} pizza with, `;
for (let topping of pizzaToppings) {
  pizzaOrder += `${topping}, `
}
console.log(`${pizzaOrder}. Coming up!`)
return [size, crust, toppings];
}
getPizzaOrder("Large", "Thin", "Bacon");


function preparePizza([mySize, myCrust, myToppings]) {
console.log("Cooking Pizza....");
return {
  size: mySize,
  crust: myCrust,
  toppings: myToppings
}
}
let pizzaDone = preparePizza("Large", "Thin", "Bacon");

function servePizza(pizza) {
let order = `Order up! Here's your ${pizza.size}, ${pizza.crust} pizza with, `;
for (let topping of pizza.toppings){
  order += `${topping}. Enjoy!`
}
console.log(`${order}`);
return pizza;
}

servePizza(pizzaDone);
