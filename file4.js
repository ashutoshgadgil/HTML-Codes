function add()                      // function without arguments
{
    var num1=10;
    var num2=20;
    document.write("Addition is : "+(num1+num2));
}

function multiply(num1,num2)        // Function with arguments
{
    document.write("Multiplication is :"+(num1*num2));
}

function showFullName(firstName,lastName)  // Function retuning value
{
    return (firstName+" "+lastName);
}