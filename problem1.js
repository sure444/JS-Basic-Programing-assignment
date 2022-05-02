function factorial(n){
    f=1;
    for(i=1;i<=n;i++){
        f=f*i;
    }
    return f;
}
let a=+prompt("Enter a positive number");
let output=factorial(a);
alert(`Factorial of ${a} is ${output}`);