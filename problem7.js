let N=+prompt("Enter the value of N(positive integer) to find Nth term of the series:- 1 , 4, 9, 16, 25, 36, 49, 64, 81, .......");
if(N<0||N==0){
    alert("ERROR");

}else{
    let nth=N*N;
    alert(`The ${N}th term, of the series is ${nth}`);
}


