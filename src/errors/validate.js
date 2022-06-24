import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";

export const productValidation = (values) => {
  console.log(values)
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

export const salesmanValidation = (values) =>{
  const errors = {};
  const numberRegex = /^[0-9]*$/;
  const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/

    if(!values.fullname){
        errors.fullname = 'Nombre completo requerido'
    }

    if(!values.cc){
        errors.cc = ' Documento de identidad requerido'
    }else if (!numberRegex.test(values.cc)){
        errors.cc = 'El documento de identidad no puede contener letras'
    }

    if(!values.phone){
        errors.phone = 'El numero de telefono es requerido'
    }else if (!numberRegex.test(values.phone)){
        errors.phone = 'El numero de telefono no puede contener letras'
    }

    if(!values.email){
        errors.email = 'Direccion de correo requerida'
    }else if (!emailRegex.test(values.email)){
        errors.email= 'La entrada no es una direccion de correo valida'
    }

    if(!values.address){
        errors.address = 'La direcion es requerida'
    }

    if(!values.password){
        errors.password= "Contraseña requerida"
    }

    if(!values.repeatPassWord){
        errors.repeatPassWord = 'Se debe confirmar contraseña'
    }else if (!(values.password==values.repeatPassWord)){
        errors.repeatPassWord = 'Las contraseñas no coinciden'
    }
    return errors;
}
