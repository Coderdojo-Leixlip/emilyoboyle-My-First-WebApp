
function doOp(operation, num1, num2)  {
    var result; 
    if(operation === "add") {
        result = num1 + num2
    } else if (operation === "subtract") {
        result = num1 - num2;
    } else if (operation === "multiply"){
        result = num1 * num2;
    } else if (operation === "divide"){
        result = num1 / num2;
    } else{
        result="operation not defined. operation should be either add, subtract, multiply or divide.";
    }
    return result;
}