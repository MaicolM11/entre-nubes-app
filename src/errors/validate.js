export const productValidation = (values) => {
  const errors = {};
  const numberRegex = /^[0-9]*$/;

  if (!values.brand) {
    errors.brand = "Nombre del producto requerido";
  }

  if (values.category === "Categoría") {
    errors.category = "Categoría requerida";
  }

  if (!values.unitPrice) {
    errors.unitPrice = "Precio unitario requerido";
  } else if (!numberRegex.test(values.unitPrice)) {
    errors.unitPrice = "El precio por unidad sólo es de números";
  }

  if (!values.salePrice) {
    errors.salePrice = "Precio de venta requerido";
  } else if (!numberRegex.test(values.salePrice)) {
    errors.salePrice = "El precio de venta sólo es de números";
  }

  if (!values.presentation) {
    errors.presentation = "Presentación requerida";
  }

  if (!values.stock) {
    errors.stock = "Unidades de stock requeridas";
  } else if (!numberRegex.test(values.stock)) {
    errors.stock = "El stock sólo es de números";
  }

  return errors;
};
