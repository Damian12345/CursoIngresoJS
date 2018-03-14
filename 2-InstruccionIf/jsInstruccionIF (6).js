function Mostrar()
{
//tomo la edad  

var edad;
edad = document.getElementById("edad").value;
edad = parseInt(edad);
if(edad>=18)
{
    alert("Ya eres mayor de edad");
}
if(edad<=17&&edad>=13)
{
    alert("Aun eres adolescente");
}
if(edad<=12)
{
    alert("Aun eres un niño");
}


}//FIN DE LA FUNCIÓN