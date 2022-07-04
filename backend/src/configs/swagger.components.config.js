module.exports = {
    components: {
        schemas: {

            Login: {
                type: "object",
                properties: {
                    email: { type: "string" },
                    password: { type: "string" }
                }
            },

            Category: {
                type: "object",
                properties: {
                    name: { type: "string" }
                },
                example: { name: "Bebidas" }
            },

            Product: {
                type: "object",
                properties: {
                    brand: { type: "string" },
                    category: { type: "string" },
                    buy_price: { type: "number" },
                    sale_price: { type: "number" },
                    presentation: { type: "string" },
                    stock: { type: "integer" },
                    img_url: { type: "string" },
                }
            },

            User: {
                type: "object",
                properties: {
                    fullname: { type: "string" },
                    email: { type: "string" },
                    password: { type: "string" },
                    cc: { type: "string" },
                    address: { type: "string" },
                    phone: { type: "string" },
                    rol: { type: "string" }
                }
            },

            Debtor: {
                type: "object",
                properties: {
                    fullname: { type: "string" },
                    cc: { type: "string" },
                    phone: { type: "string" },
                    cc: { type: "string" },
                    debts: { 
                        type: "array", 
                        items: {
                            type: "string",
                            description: "bills id"
                        }
                    }
                }
            },

            CreateBill: {
                type: "object",
                properties: {
                    location: { type: "string" },
                    sales: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                product: { type: "string" },
                                quantity: { type: "integer" }
                            }
                        }
                    }
                }
            },

            AppendProductsToBill: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        product: { type: "string" },
                        quantity: { type: "integer" }
                    }
                }
            },

            Bill: {
                type: "object",
                properties: {
                    location: { type: "string" },
                    total: { type: "integer" },
                    subtotal: { type: "integer" },
                    status: { type: "string" }
                }
            },
            Sale: {
                type: "object",
                properties: {
                    product: { 
                        type: "object", 
                        properties: {
                            brand: { type: "string" }
                        }
                    },
                    quantity: { type: "integer" },
                    buy_price: { type: "integer" },
                    sale_price: { type: "integer" }
                }
            }
        },
        securitySchemes: {
            jwt: {
                type: "http",
                scheme: "bearer",
                in: "header",
                bearerFormat: "JWT"
            },
        }
    }
};