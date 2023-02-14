let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

let operand1 = null;

let operand2 = null;

let operator = null;

let condition = false;

buttons.map( button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerHTML) {
            case "C":
                display.innerText = "0";
                break;
            case "←":
                display.innerText = display.innerText.slice(0, -1);
                if (display.innerText.length == 0) {
                    display.innerText = "0";
                }
                break;
            case "=":
                if (operand1 != null) {
                    operand2 = display.innerText;
                    display.innerText = eval(operand1+operator+operand2);
                    operand1 = null;
                    operator = null;
                    operand2 = null;
                    condition = false;
                }
                break;
            case "+":
                operand1 = display.innerText;
                operator = "+";
                break;
            case "×":
                operand1 = display.innerText;
                operator = "*";
                break;
            case "-":
                operand1 = display.innerText;
                operator = "-";
                break;
            case "÷":
                operand1 = display.innerText;
                operator = "/";
                break;
                
            default:
                if (display.innerText == "0") {
                    display.innerText = e.target.innerText;    
                } else if (operand1 != null && !condition) {
                    display.innerText = e.target.innerText;    
                    condition = true;
                } else{
                    display.innerText += e.target.innerText;    
                }
                
        }
                            
    });
});