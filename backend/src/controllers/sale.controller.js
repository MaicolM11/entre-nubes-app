import Sale from '../models/Sale';

// create sales and return id
export const createSalesAndGetIds = async  (sales) => {
    let sales_ids = [];

    for (let sale in sales) {
        let newSale = await createSale(sale);
        sales_ids.push(newSale._id)
    }

    return sales_ids;
}

// sale { prod_id, quantity, buy_price, sale_price }
export const createSale = async (sale) => {
    const newSale = new Sale(sale);
    const saveSale = await newSale.save();
    return saveSale;
}