import React, { useState, useEffect } from "react";
import { colors } from "../styles/colors";
import { DataSpan, TotalPaymentContainer } from "../styles/style-components";
import { DeleteIconTableButtonContainer } from "../styles/style-components";
import { ReactComponent as Delete } from "../../assets/icons/delete.svg";

import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

const headerCells = [
  { name: "Nombre del Producto" },
  { name: "Precio de Venta" },
  { name: "Unidades" },
  { name: "Precio por Cantidad" },
  { name: "Quitar Producto" },
];

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const ProductsTable = ({ data, onDelete }) => {
  const totalEmptyRows = 4;
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(totalEmptyRows);
  const [totalPayment, setTotalPayment] = useState(0);
  let totalOrderPayment = 0;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, totalEmptyRows));
    setPage(0);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: colors.highlighted,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 12,
      fontWeight: "bold",
      fontFamily: "Roboto",
      whiteSpace: "nowrap",
    },
  }));

  const getTotalPayment = () => {
    rows.map((product) => {
      totalOrderPayment = +totalOrderPayment + product.pricePerQuantity;
    });
    setTotalPayment(totalOrderPayment);
  };

  useEffect(() => {
    setRows(data);
    getTotalPayment();
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            {headerCells.map((cell, i) => {
              return (
                <StyledTableCell key={i} size="small" align="center">
                  {cell.name}
                </StyledTableCell>
              );
            })}
          </TableRow>
        </TableHead>
        {rows.length ? (
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((product) => {
              return (
                <TableRow
                  key={product.id}
                  sx={{ "&last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{product.brand}</TableCell>
                  <TableCell align="center">${product.sale_price}</TableCell>
                  <TableCell align="center">{product.quantity}</TableCell>
                  <TableCell align="center">
                    ${product.pricePerQuantity}
                  </TableCell>
                  <TableCell align="center">
                    <DeleteIconTableButtonContainer
                      isFill={true}
                      onClick={() => onDelete(product.id)}
                    >
                      <Delete width={24} height={25} />
                    </DeleteIconTableButtonContainer>
                  </TableCell>
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 58 * emptyRows }}>
                <TableCell colSpan={5} />
              </TableRow>
            )}
          </TableBody>
        ) : (
          <TableBody>
            {[...Array(totalEmptyRows)].map((data, i) => {
              return (
                <TableRow key={i} style={{ height: 58 }}>
                  <TableCell colSpan={5} />
                </TableRow>
              );
            })}
          </TableBody>
        )}
        <TableFooter>
          <TableRow>
            <TablePagination
              labelDisplayedRows={({ from, to }) =>
                `Mostrando los productos del ${from} al ${to}`
              }
              rowsPerPageOptions={[]}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
      <TotalPaymentContainer>
        Total a Pagar: <DataSpan>${totalPayment}</DataSpan>
      </TotalPaymentContainer>
    </TableContainer>
  );
};

export default ProductsTable;
