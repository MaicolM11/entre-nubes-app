import { updateStockToProduct, getAllByIds } from './product.controller';

// update sales
export const findProductsAndUpdate = async (sales) => {

    const products = await getAllByIds(sales.map(sale => sale.product));

    for await (let prod of products) {
        if(prod.stock < sales.find(x => x.product == prod._id).quantity) {
            throw new Error("stock not available")
        }
    }
    console.log("entra");
    for await (let sale of sales) {
        await updateSale(sale);
    }
}

// sale { product, quantity }
export const updateSale = async (sale) => {
    const product = await updateStockToProduct(sale.product, -sale.quantity)
    sale.buy_price = product.buy_price;
    sale.sale_price = product.sale_price;
}