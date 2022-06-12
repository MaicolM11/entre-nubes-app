import { updateStockToProduct } from './product.controller';

// update sales
export const findProductsAndUpdate = async (sales) => {
    for (let sale of sales) {
        await updateSale(sale);
    }
}

// sale { product, quantity }
export const updateSale = async (sale) => {
    const product = await updateStockToProduct(sale.product, -sale.quantity)
    sale.buy_price = product.buy_price;
    sale.sale_price = product.sale_price;
}