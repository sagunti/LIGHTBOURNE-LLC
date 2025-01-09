import { valida } from "./validar-formulario2.js";
import { validados } from "./validar-formulario2.js";

const inputs = document.querySelectorAll("input");


inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

const textareas = document.querySelectorAll("textarea");

textareas.forEach((textarea) =>{
  textarea.addEventListener("blur",(textarea)=>{
    validados(textarea.target);
  });
});