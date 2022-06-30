// import React from "react";
// import {
//   TableContainer,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   Paper,
//   TablePagination,
// } from "@mui/material";

// const headerCells = [
//   { name: "Nombre del Producto" },
//   { name: "Precio de Venta" },
//   { name: "Unidades" },
//   { name: "Precio por Cantidad" },
//   { name: "Quitar Producto" },
// ];

// const ProductsTable = ({ data }) => {
//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             {headerCells.map((cell, i) => {
//               return (
//                 <TableCell key={i} size="small" align="center">
//                   {cell.name}
//                 </TableCell>
//               );
//             })}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((product) => {
//             return (
//               <TableRow
//                 key={product.id}
//                 sx={{ "&last-child td, &:last-child th": { border: 0 } }}
//               >
//                 <TableCell align="center">{product.brand}</TableCell>
//                 <TableCell align="center">{product.sale_price}</TableCell>
//                 <TableCell align="center">{product.quantity}</TableCell>
//                 <TableCell align="center">{product.pricePerQuantity}</TableCell>
//                 <button>Test</button>
//               </TableRow>
//             );
//           })}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default ProductsTable;

import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
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

import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import { colors } from "../styles/colors";

const headerCells = [
  { name: "Nombre del Producto" },
  { name: "Precio de Venta" },
  { name: "Unidades" },
  { name: "Precio por Cantidad" },
  { name: "Quitar Producto" },
];

import { esES } from "@mui/material/locale";

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

const ProductsTable = ({ data }) => {
  const [rows, setRows] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 5));
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

  React.useEffect(() => {
    setRows(data);
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
                  <button>Test</button>
                </TableCell>
              </TableRow>
            );
          })}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>

        {/* <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.calories}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.fat}
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody> */}
        <TableFooter>
          <TableRow>
            <TablePagination
              labelDisplayedRows={({ from, to, count }) =>
                `Mostrando ${from} - ${to} de ${count} páginas`
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
    </TableContainer>
  );
};

export default ProductsTable;

{
  /* <Pagination
  count={3}
  variant="outlined"
  shape="rounded"
  hideNextButton={true}
  hidePrevButton={true}
  // showFirstButton
  // showLastButton
  style={{
    display: "flex",
    justifyContent: "center",
    padding: "15px",
  }}
  page={page}
  defaultPage={page}
  onChange={(e) => handleChangePage(e.target.textContent)}
/> */
}
