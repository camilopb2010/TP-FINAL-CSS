let precio1 = 0;
let precio2 = 0;
let precio3 = 0;
let salida = "salida";
function pedidoF(){
    precio1 = precio1 + 15000;
}
function sacarPedidoF(){
  if(precio1 === 0){
    precio1 = 0;
  }else{
    precio1 = precio1 - 15000;
  }
}
function pedidoJC(){
    precio2 =precio2 + 10000;
}
function sacarPedidoJC(){
  if(precio2 === 0){
    precio2 = 0;
  }else{
    precio2 = precio2 - 10000;
  }
}
function pedidoA(){
  precio3 = precio3 + 20000;
}
function sacarPedidoA(){
  if(precio3 === 0){
    precio3 = 0;
  }else{
    precio3 = precio3 - 20000;
  }
}

function pedidoCompleto(){
   let precio = "El total de su compra es: $";
 let preciototal = precio1 + precio2 + precio3;
let fin = precio + preciototal;
document.getElementById(salida).innerHTML = fin;
}
function borrarPedido(){
  fin = 0;
}