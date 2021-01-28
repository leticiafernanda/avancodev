function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(n){
    return document.getElementById("history-value").innerText = n;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(n){
    if (n == ""){
        document.getElementById("output-value").innerText = n;
    }else document.getElementById("output-value").innerText = getFormattedNumber(n) ;
}
function getFormattedNumber(n){
    if (n == ""){
        return "";
    }
    var num= Number(n);
    var value = num.toLocaleString("en")
    return value;
}
function reverseNumberFormat(n){
    return Number(n.replace(/,/g,''))
}
var operador = document.getElementsByClassName("operador");
for (var i = 0; i< operador.lenght;i++){
    operador[i].addEventListener('click',function(){
        if (this.id == "clear"){
            printHistory("");
            printOutput("");
        }
        else if (this.id =="backspace"){
            var output=reverseNumberFormat(getOutput()).toString();
            if (output){
                output=output.substr(0,output.length-1)
                printOutput(output);
            }
            else{
                var output=getOutput();
                var history=getHistory();
                if(output=="" && history!=""){
                    if (isNaN(history[history.length-1])){
                        history=history.substr(0,history-length-1);
                    }
                }
                if(output != "" || history != ""){
                    output=output == ""?output:reverseNumberFormat(output);
                    history=history+output;
                    if(this.id=="="){
                        var resultado=eval(history);
                        printOutput(resultado);
                        printHistory("");
                    }
                    else{
                        history=history+this.id;
                        printHistory(history);
                        printOutput("");
                    }
                }
            }
        }
    });
}
var numero = document.getElementsByClassName("numero");
for (var i = 0; i<numero.length;i++){debugger
    numero[i].addEventListener('click',function(){
        var output=reverseNumberFormat(getOutput());
        if(output!=NaN){
            output=output+this.id;
            printOutput(output);

        }
    })
}
