function Mostrar()
{
//tomo la edad  
    var edad;
    edad = document.getElementById("edad").value;
    edad = parseInt(edad);
    if(edad<18||edad>12)
    {
        alert("Eres un adolecente");
    }


}//FIN DE LA FUNCIÓN