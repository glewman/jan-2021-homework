const pizzaToppings = ['Bacon', 'Sausage', 'Pepperoni', 'Ham'];
function greetCustomer() {
    let greeting = `Welcome to The Pizza Place, our toppings are:`;
     for (let topping of pizzaToppings){
        greeting += ` ${topping}, `;
    }
    console.log(greeting);
}
greetCustomer();

function getPizzaOrder(size, crust, ...toppings) {
    let order =`One ${size} ${crust} crust pizza with `;
    for (let topping of pizzaToppings) {
        order +=` ${topping} `           }
    console.log(`${order}. Coming up!`);
    return [size, crust, toppings];
}
let myOrder = getPizzaOrder("Medium", "Thin", "Bacon");

function preparePizza([mySize, myCrust, myToppings]) {
    console.log("Cooking Pizza...");
    return {
        size: mySize,
        crust:myCrust,
        topping: myToppings
    };
}
let cookedPizza = preparePizza(myOrder);

function servePizza(cookedPizza) {
    let orderUp = `Order up! Here's your ${cookedPizza.size}, ${cookedPizza.crust} pizza with, `;
    for (let topping of cookedPizza.topping) {
        orderUp += `${topping}`
    }
    console.log(`${orderUp}. Enjoy!`)
    return cookedPizza;
}
servePizza(cookedPizza);
