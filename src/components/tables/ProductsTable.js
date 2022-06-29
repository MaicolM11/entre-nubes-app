import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const ProductsTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Nombre del Producto</TableCell>
            <TableCell>Precio de Venta</TableCell>
            <TableCell>Unidades</TableCell>
            <TableCell>Precio por Cantidad</TableCell>
            <TableCell>Quitar Producto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((product) => {
            return (
              <TableRow
                key={product.id}
                sx={{ "&last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{product.brand}</TableCell>
                <TableCell>{product.sale_price}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>{product.pricePerQuantity}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;
