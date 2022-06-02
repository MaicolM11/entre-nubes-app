import Product from "../../src/models/Product";
import Category from "../../src/models/Category";
import { connectDB, dropCollections } from "../../src/database";

const product = {
  brand: "Aguila",
  category: "",
  buy_price: 1500,
  sale_price: 2000,
  presentation: "125 ml",
  stock: 10
};

beforeAll(async () => await connectDB(process.env.MONGO_URL_TEST));

afterAll(async () => await dropCollections());


describe("Database models", () => {


  it("create category", async () => {
    const newCategory = new Category({ name: "cerveza" });
    const savedCategory = await newCategory.save();
    expect(savedCategory.name).toBe(newCategory.name);
    product.category = savedCategory._id;
  });

  it("create duplicate category", async () => {
    const newCategory = new Category({ name: "cerveza" });
    expect(newCategory.save()).rejects.toThrow()
  });

  it("create & save product", async () => {
    const newProduct = new Product(product);
    const savedProduct = await newProduct.save();
    expect(savedProduct.brand).toBe(newProduct.brand);
    expect(savedProduct.category).toBe(newProduct.category);
    expect(savedProduct.buy_price).toBe(newProduct.buy_price);
    expect(savedProduct.sale_price).toBe(newProduct.sale_price);
    expect(savedProduct.presentation).toBe(newProduct.presentation);
    expect(savedProduct.stock).toBe(newProduct.stock);
  });

  it("incorrect id category", async () => {
    product.category = "a";
    const newProduct = new Product(product);
    expect(newProduct.save()).rejects.toThrow()
  });



});