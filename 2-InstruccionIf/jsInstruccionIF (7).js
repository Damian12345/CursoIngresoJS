function Mostrar()
{
//tomo la edad  

var edad;
var estado;
edad = document.getElementById("edad").value;
estado = document.getElementById("estadoCivil");
edad = parseInt(edad);
if(edad<=18&&edad=="estadoCivil")
{
    alert("Es muy pequeño para no ser soltero");
}

}//FIN DE LA FUNCIÓN