/* variables */

let resultado = 0;
let valor = 0;
let opcion = 0;
let euro = 188.41;
let dolar = 176.78;
let pesoMex = 9.06;
let usd = 0;
let eur = 0;
let mxn = 0;

let hora = prompt("Hola! ¿cuántas horas lleva el día en su reloj?");

/* condicionales */

if (hora >= 6 && hora < 12) {
    alert("A estas horas del día son Buenos días!");
} else if (hora >= 12 && hora < 24 && hora > 0) {
    alert("A estas horas del día son Buenas tardes");
} else {
    alert("No especificó un horario");
} 

/* do while */

do{
    opcion=Number(prompt(`Le gustaría convertir "ARS a: \n
1. $USD \n
2. $EUR \n
3. $MXN \n
0. Salir`))
switch (opcion){
        case 1:
            
            let usd = prompt("Ingrese un valor");
                alert("TOTAL: $USD " + (resultado = usd * dolar));
        break;
        case 2:
            let eur = prompt("Ingrese un valor");
            alert ("TOTAL: $EUR " + (resultado = eur * dolar));
        break;
        case 3:
            let mxn = prompt("Ingrese un valor");
            alert("TOTAL: $MXN" + (resultado = mxn * pesoMex))
    case 0:
        alert("Hasta luego")
    }

}
while(opcion!=0) 
