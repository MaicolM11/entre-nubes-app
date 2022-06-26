import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

const orders = [
  {
    id: 1,
    brand: "Papas de Todito",
    sale_price: 5678,
    quantity: 1,
    pricePerQuantity: 232,
  },
  {
    id: 2,
    brand: "Aguilita",
    sale_price: 333,
    quantity: 1,
    pricePerQuantity: 111,
  },
];

const columns = [
  {
    name: "Nombre del Producto",
    selector: (row) => row.brand,
  },
  {
    name: "Precio de Venta",
    selector: (row) => row.sale_price,
  },
  {
    name: "Unidades",
    selector: (row) => row.quantity,
  },
  {
    name: "Precio por Cantidad",
    selector: (row) => row.pricePerQuantity,
  },
  {
    name: "Quitar Producto",
    button: true,
    cell: () => <button>Delete</button>,
  },
];

function GetToTheChopper({ data }) {
  const newData = [];
  const pushDatas = () => {
    for (const product of data) {
      newData.push(product);
    }
  };

  const [myData, setMyData] = useState(orders);

  useEffect(() => {
    pushDatas();
    const timer = setInterval(() => {
      // create a new object with a new reference in memory
      const deepClone = JSON.parse(JSON.stringify(myData));
      deepClone[0].quantity = `${deepClone[0].quantity} ${new Date()}`;

      setMyData(deepClone);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <DataTable columns={columns} data={myData} pagination />;
}

export default GetToTheChopper;
