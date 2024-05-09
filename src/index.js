import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const myCart = [];
const myWhishList = [];

console.log("Welcome to your Shopee Cart!")

const item1 = await createItem("Hotwheels ferrari", 20.99, 1);
const item2 = await createItem("Hotwheels lamborghini", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item1)

await cartService.displayCart(myCart);

//await cartService.deleteItem(myCart, item2.name)

console.log("Total Shopee cart is: ")
await cartService.calculateTotal(myCart);

