import { updateStockToProduct, getAllByIds } from './product.controller';

// update sales
export const findProductsAndUpdate = async (sales) => {

    const products = await getAllByIds(sales.map(sale => sale.product));
    
    if(products.length !== sales.length) {
        throw new Error("Any product doesn't exist")
    }

    for await (let prod of products) {
        let productOfBill = sales.find(x => x.product == prod._id);
        if(prod.stock < productOfBill.quantity) {
            throw new Error("Stock not available")
        }
    }

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