//Lectura de HTML desde JS: Elementos, clases y ID
const h1 = document.querySelector('h1')
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', btnOnClick);   //Método más usado para escuchar eventos

function btnOnClick(event){
   console.log({event});
   event.preventDefault(); //Previene recargar página al dar click en enviar
   const unirInputs = input1.value + input2.value; //Método para concatenar elementos de los input
   /*const sumaInputs = +input1.value + +input2.value; //Método para sumar elementos de los input
   pResult.innerText ="Resultado: " + sumaInputs;*/
   pResult.innerHTML ="Resultado: " + unirInputs;
}