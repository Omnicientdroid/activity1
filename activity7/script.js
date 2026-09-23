function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    
    if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("sum").innerHTML = "Please enter valid numbers.";
    return; // Exit the function if inputs are not valid numbers
    }

    const sum = num1 + num2;
    const diff = num1 - num2;
    document.getElementById("sum").innerHTML = "Sum: " + sum;
    document.getElementById("diff").innerHTML = "Difference: " + diff;
}

function clearFields() {
    document.getElementById("sum").innerHTML = "";
    document.getElementById("diff").innerHTML = "";   
}