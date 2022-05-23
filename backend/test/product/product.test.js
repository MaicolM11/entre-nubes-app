const mongoose = require("mongoose");
import  Product  from "../../models/Product";
import { setUp, dropDatabase } from "../../connection";


setUp()

const product = {
    brand: "Aguila",
    category: "Cerveza",
    buy_price: 1500,
    sale_price: 2000,
    presentation: "125 ml",
    stock: 10
};




describe("Product model", () => {
  it.only("create & save product", async () => {
        const newProduct = new Product(product);
        const savedProduct = await newProduct.save();
    // Object Id should be defined when successfully saved to MongoDB.
        expect(savedProduct.brand).toBe(newProduct.brand);
        expect(savedProduct.category).toBe(newProduct.category);
        expect(savedProduct.buy_price).toBe(newProduct.buy_price);
        expect(savedProduct.sale_price).toBe(newProduct.sale_price);
        expect(savedProduct.presentation).toBe(newProduct.presentation);
        expect(savedProduct.stock).toBe(newProduct.stock);
  },30000);

  
});