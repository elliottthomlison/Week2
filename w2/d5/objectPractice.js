class Pizza {
    
    
    constructor() {
        // this.size = size;
        // this.crust = crust;
        this.toppings = ["cheese", "poop"]
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

    setPrice(price) {
        this.price = price; 
    }

    getPrice() {
        const basePrice = 10;
        const toppingPrice = 2;
        return basePrice + (this.toppings.length * toppingPrice);
    }

    
    set size(size) {
        if (size === 's' || size === 'm' || size === 'l') {
            this._size = size;
        }
    }

    // set price(price) {
    //     if (price === 'cheap' || price === 'soso' || price === 'baller') {
    //         this._price = price;
    //     }
    // }
}

let pizza = new Pizza();
pizza.setSize('l');
// pizza.setPrice('soso')
pizza.price
 
console.log(pizza)

// console.log(Pizza.constructor);

// let pizza1 = new Pizza ("large", "cheesey");
// console.log(pizza1.toppings);
// pizza1.addTopping("mushrooms");
// pizza1.addTopping("peppers");
// pizza1.addTopping("achovies")
// pizza1.addTopping("diapers");
// pizza1.addTopping("penis");
// console.log(pizza1.toppings);

// let pizza2 = new Pizza();
// console.log(pizza2.toppings);
// pizza2.addTopping("more cheese");
// console.log(pizza2.toppings);
