function Mostrar()
{
  var precio;
  var descuento;
  var precioFinal;
  
  precio = prompt("Ingrese numero ");
  precio = parseInt(precio);
  porcDescuento = prompt("Ingrese descuento ");
  porcDescuento = parseInt(porcDescuento);
  descuento = (precio *porcDescuento)/100;
  precioFinal = precio-descuento;
  iva = precioFinal*0.21;
  precioConIva = precioFinal + iva;
  alert("El resultado de iva " + precioConIva);
  
}
