function suma(op1, op2, op3) {
    let resultado = op1 + op2 + op3;
    console.log("suma es igual a" + resultado)
    return resultado;
};


function resta(op1, op2 = 1) {
    if (operacion == "subs") {
        let resultado = op1 - op2;
        console.log("resta es igual a" + resultado)
        return resultado;
    }
};


function multiplicacion(operacion, op1, op2 = 1) {
    if (operacion == "mult") {
        let resultado = op1 * op2;
        console.log("multiplicacion es igual a" + resultado)
        return resultado;
    }
};


function division(operacion, op1, op2 = 1) {
    if (operacion == "div") {
        let resultado = op1 / op2;
        console.log("division es igual a" + resultado)
        return resultado;
    }
};

function cuadrado(numero) {
    const result = numero * numero;
    console.log('El cuadrado de ' + numero + ' es ' + result);
    return result;
}



//Main===================================================================

suma("sum", 12, 1,1);
resta("subs", 20,);
multiplicacion("mult", 20,);
division("div", 36,);
cuadrado(8);

suma("sum", 12,2,2);
resta("subs", -12,);
multiplicacion("mult", 0,);
division("div", 0,);
cuadrado(2);

suma("sum", -1,4,4);
resta("subs", 1,);
multiplicacion("mult", 1,);
division("div", 1,);
cuadrado(10);




module.exports = { suma, resta, multiplicacion, division }

