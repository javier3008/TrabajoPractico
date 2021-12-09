/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function dividir() {
    var num1 = document.getElementById("numero1").value;
    num1 = parseInt(num1);
    var num2 = document.getElementById("numero2").value;
    num2 = parseInt(num2);
    var res = num1 / num2;
    if (num1.value === "" || isNaN(num1) || /^\s+$/.test(num1)) {
        alert("Debe ingersar un numero");
        return false;
    }
    
    if (num2.value === "" || isNaN(num2) || /^\s+$/.test(num2)) {
        alert("Debe ingersar un numero");
        return false;
    } 
    if(num2 === 0){
        alert("EL SEGUNDO NUMERO NO PUEDE SER CERO");
    }
    else {
        alert("el resultado es " + res);
    }
}
