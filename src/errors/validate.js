const numberRegex = /^[0-9]*$/;
const negativeNumberRegex = /^-\d+$/;
const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

export const categoryValidation = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Nombre de la categoría requerida";
  }

  return errors;
};

export const debtorValidation = (values) => {
  const errors = {};

  if (!values.fullName) {
    errors.fullName = "Nombre requerido";
  }

  if (!values.cc) {
    errors.cc = " Documento de identidad requerido";
  } else if (!numberRegex.test(values.cc)) {
    errors.cc = "El documento de identidad no puede contener letras";
  }

  if (!values.phone) {
    errors.phone = "El número de teléfono es requerido";
  } else if (!numberRegex.test(values.phone)) {
    errors.phone = "El número de teléfono no puede contener letras";
  } else if (!(values.phone.split("").length == 10)) {
    errors.phone = "Un número telefónico consta de 10 numeros";
  }

  return errors;
};

export const increaseStockValidation = (value) => {
  const errors = {};

  if (negativeNumberRegex.test(value.numberValue) || value.numberValue <= 0) {
    errors.numberValue = "El valor ingresado debe ser mayor a 0";
  } else if (!numberRegex.test(value.numberValue)) {
    errors.numberValue = "Solo dede ingresar números";
  }

  return errors;
};

export const loginValidation = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Usuario requerido";
  }

  if (!values.password) {
    errors.password = "Contraseña requerida";
  }

  return errors;
};

export const createProductValidation = (values, selectedCategory) => {
  const errors = {};

  if (!values.brand) {
    errors.brand = "Nombre del producto requerido";
  }

  if (selectedCategory.name === "Categoría") {
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

export const editProductValidation = (values) => {
  const errors = {};

  if (!values.brand) {
    errors.brand = "Nombre del producto requerido";
  }

  if (!values.category) {
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

export const salesmanValidation = (values) => {
  const errors = {};

  if (!values.fullname) {
    errors.fullname = "Nombre requerido";
  }

  if (!values.cc) {
    errors.cc = " Documento de identidad requerido";
  } else if (!numberRegex.test(values.cc)) {
    errors.cc = "El documento de identidad no puede contener letras";
  }

  if (!values.phone) {
    errors.phone = "El número de teléfono es requerido";
  } else if (!numberRegex.test(values.phone)) {
    errors.phone = "El número de teléfono no puede contener letras";
  } else if (!(values.phone.split("").length == 10)) {
    errors.phone = "Un número telefónico consta de 10 numeros";
  }

  if (!values.email) {
    errors.email = "Direccion de correo requerida";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "La entrada no es una direccion de correo valida";
  }

  if (!values.address) {
    errors.address = "La direcion es requerida";
  }

  if (!values.password) {
    errors.password = "Contraseña requerida";
  }

  if (!values.repeatPassWord) {
    errors.repeatPassWord = "Se debe confirmar contraseña";
  } else if (!(values.password == values.repeatPassWord)) {
    errors.repeatPassWord = "Las contraseñas no coinciden";
  }

  return errors;
};

export const timeValidation = (value) => {
  const errors = {};

  if (negativeNumberRegex.test(value.minutesTime) || value.minutesTime <= 0) {
    errors.minutesTime = "Ingresar minutos mayor a 0";
  } else if (!numberRegex.test(value.minutesTime)) {
    errors.minutesTime = "Ingresar minutos en números";
  }

  return errors;
};
