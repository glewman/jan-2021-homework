const pizzaToppings = ['Sausage', 'Cheese', 'Pepperoni', 'Bacon'];
function greetCustomer() {
   let greeting = `Welcome to The Pizza Place, our toppings are, `;
   for(let topping of pizzaToppings) {
       greeting += `${topping}. `;
   }
   console.log(greeting);
}; 
greetCustomer();

function getPizzaOrder(size, crust, ...toppings){
    let order =`One ${size} ${crust} crust pizza with `;
    for (let topping of pizzaToppings) {
        order += ` ${topping} `;
    }
    console.log(`${order}. Coming up!`);
    return [size, crust, toppings];
}
let customerOrder = getPizzaOrder("Large","Thin", "Bacon");

function preparePizza(pizzaSize, pizzaCrust, pizzaToppings){
    console.log("...Cooking Pizza....");
    let pizza = {
        pizzaSize: 'Large',
        pizzaCrust: 'Thin',
        pizzaToppings: 'Bacon'
    }
    pizza.pizzaSize;
    pizza.pizzaCrust;
    pizza.pizzaToppings;

}
preparePizza();

function servePizza(pizza){
let orderReady = `Order up! here's your ${pizza.size} ${pizza.crust} crust pizza with`;
for (let pizza of pizzaToppings) {
    `orderReady += $(pizzaToppings'.)
}
};
servePizza();