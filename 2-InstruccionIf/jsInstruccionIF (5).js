function Mostrar()
{
//tomo la edad  
    var edad;
    edad = document.getElementById("edad").value;
    edad = parseInt(edad);
    if(edad>18||edad<12)
    {
        alert("No sos un adolescente ");
    }

}//FIN DE LA FUNCIÓN