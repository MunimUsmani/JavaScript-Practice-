// class is a es6 feature that provides a more structured and cleaner way to work with objects
class Product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax){
       return this.price + (this.price * salesTax);
    }
}   

    const salesTax = 0.05;

const Product1 = new Product("T-Shirt",10.77);
const Product2 = new Product("Hoodie",15.11);
const Product3 = new Product("Jeans",22.50);

    Product1.displayProduct();

    const total1 = Product1.calculateTotal(salesTax);
    console.log(`Your bill including tax $${total1.toFixed(2)}`);

    Product2.displayProduct();
    const total2 = Product2.calculateTotal(salesTax);
    console.log(`Your bill including tax $${total2.toFixed(2)}`);

    Product3.displayProduct();
    const total3 = Product3.calculateTotal(salesTax);
    console.log(`Your bill including tax $${total3.toFixed(2)}`);

