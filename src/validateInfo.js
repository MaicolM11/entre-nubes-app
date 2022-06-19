export default function validateInfo(values) {
  let errors = {};

  if (!values.brand) {
    errors.brand = "Espacio requerido";
  }

  if (values.category === "Categoría") {
    errors.category = "Espacio requerido";
  }

  if (!values.unitPrice) {
    errors.unitPrice = "Espacio requerido";
  }

  if (!values.salePrice) {
    errors.salePrice = "Espacio requerido";
  }

  if (!values.presentation) {
    errors.presentation = "Espacio requerido";
  }

  if (!values.stock) {
    errors.stock = "Espacio requerido";
  }

  return errors;
}
