function Mostrar()
{
    var numeroUno;
    var numeroDos;
    var respuesta;

    numeroUno = prompt("Ingrese un numero ");
    numeroDos = prompt("Ingrese otro numero ");
    if(numeroUno==numeroDos)
    {
        respuesta=numeroUno+""+numeroDos;   
    }
    else
    {   numeroUno = parseint(numeroUno);
        numeroDos = parseint(numeroDos);
        if(numeroUno>numeroDos)
        {
        respuesta = (numeroUno - numeroDos);
        }
        if(numeroUno<numeroDos)
        {
        respuestas = (numeroUno*numeroDos);
        }
    }   alert(respuesta);
}//
