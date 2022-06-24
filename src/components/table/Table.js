import React from "react";
import DataTable, { createTheme } from "react-data-table-component";
// import { useTable, usePagination } from "react-table";

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
    selector: (row) => row.amountPrice,
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
  // const table = useTable(
  //   {
  //     columns,
  //     data,
  //     initialState: {
  //       pageSize: 5,
  //       pageIndex: 0,
  //     },
  //   },
  //   usePagination
  // );

  return (
    // {table}
    <DataTable
      columns={columns}
      data={data}
      pagination
      paginationComponentOptions={paginationComponentOptions}
    />
  );
};

export default Table;
