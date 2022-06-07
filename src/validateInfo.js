export default function validateInfo(values) {
  let errors = {};

  if (!values.brand) {
    errors.brand = "Espacio requerido";
  }

  if (!values.category) {
    errors.category = "Espacio requerido";
  }

  if (!values.buy_price) {
    errors.buy_price = "Espacio requerido";
  }

  if (!values.sale_price) {
    errors.sale_price = "Espacio requerido";
  }

  if (!values.presentation) {
    errors.presentation = "Espacio requerido";
  }

  if (!values.stock) {
    errors.stock = "Espacio requerido";
  }

  return errors;
}
