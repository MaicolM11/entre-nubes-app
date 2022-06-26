import React, { useEffect, useState } from "react";
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

const paginationComponentOptions = {
  rowsPerPageText: "Filas por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

const Table = ({ data }) => {
  console.log(data);
  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      paginationComponentOptions={paginationComponentOptions}
    />
  );
};

export default Table;
