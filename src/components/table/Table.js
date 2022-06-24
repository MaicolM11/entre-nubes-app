import React, { useState } from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Nombre del Producto",
    selector: (row) => row.brand,
  },
  {
    name: "Precio de Venta",
    selector: (row) => row.sale_price,
  },
  // {
  //   name: "Unidades",
  //   selector: (row) => row.units,
  // },
  // {
  //   name: "Precio por Cantidad",
  //   selector: (row) => row.amountPrice,
  // },
  // {
  //   name: "Quitar Producto",
  //   selector: (row) => row.year,
  // },
];

const Table = ({ data }) => {
  return <DataTable columns={columns} data={data} />;
};

export default Table;
