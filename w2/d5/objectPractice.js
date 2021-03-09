class Pizza {
    
    
    constructor() {
        // this.size = size;
        // this.crust = crust;
        this.toppings = ["cheese"];
    }


    addTopping(topping) {
        this.toppings.push(topping);
    }

    setSize(size) {
        this.size = size;
    }

    getSize() {
        return this.size;
    }

    getPrice() {
        const basePrice = 10;
        const toppingPrice = 2;
        return basePrice + (this.toppings.length * toppingPrice);
    }
    
    set size(size) {
        if (size === 's' || size === 'm' || size === '1') {
            this._size = size;
        }
    }
}

let pizza = new Pizza();

pizza.getPrice;
pizza.size = 's';

// const pizza = new Pizza();
// pizza.setSize('m');
// pizza.getSize(); 

console.log(Pizza.constructor);

let pizza1 = new Pizza ("large", "cheesey");
console.log(pizza1.toppings);
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
pizza1.addTopping("achovies")
console.log(pizza1.toppings);

let pizza2 = new Pizza();
console.log(pizza2.toppings);
pizza2.addTopping("more cheese");
console.log(pizza2.toppings);
