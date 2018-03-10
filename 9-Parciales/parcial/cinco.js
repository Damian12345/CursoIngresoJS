function Mostrar()
{
    var hora
    hora = prompt("Ingrese la hora ");
    hora = parseInt(hora);
    var respuesta;

    switch(hora)
    {
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            respuesta = "Es de noche ";
            if(hora<3)
            {
                respuesta = respuesta + "voy al bar ";
            }
            break
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            respuesta = "ES de mañana ";
            if(hora<11)
            {
                respuesta = respuesta + "a desayunar ";
            }
            break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            respuesta ="Es de tarde ";
            if(hora<14)
            {
                respuesta = respuesta + "a merendar ";
            }
            break;
            default:
            respuesta("mmmm");

            
    }
        alert(respuesta);


}
