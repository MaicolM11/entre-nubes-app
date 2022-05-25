let body = {
    brand: 'AGUILA',
    category: '628e6236e9705a349432b231',
    buy_price: 1800,
    sale_price: 2200,
    presentation: '350 ML',
    stock: 120,
    img_url: 'NO HAY'
  };

const {buy_price, ...data} = body;
data.buy_price = buy_price + 1000;
console.log(data);