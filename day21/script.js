// conditional statement 
// 1 if 
// 2 if else
// 3 else if
// 4 switch

let a=5 ;
if(a>1){
    document.getElementById("demo").innerHTML="true , a is greater than 1";
}
let num=0;
if(num==10){
    document.getElementById("demo1").innerHTML="num is equal to 10";
}else{
    document.getElementById("demo1").innerHTML="num is not equal to 10";
}

//promt
let num1=parseInt(prompt("Enter your first no."));
let num2=parseInt(prompt("Enter your second no."));
let result= num1 + num2;
document.getElementById("demo2").innerHTML=" sum of no. is : " + result ;

let num3=parseInt(prompt("enter your lucky no."));
if(num3==3){
    document.getElementById("demo3").innerHTML="lucky no.";
}else{
    document.getElementById("demo3").innerHTML="not lucky no.";
}


// else if 
let b = parseInt(prompt("enter any no."));
if(b>50 && b<100){
    document.getElementById("demo4").innerHTML="value is b/w 50 & 100 👀";
}else if(b>1 && b<50){
    document.getElementById("demo4").innerHTML="value is b/w 1 & 50 👍";

}else{
    document.getElementById("demo4").innerHTML="value is less than 1 or greater than 100 👌";

}

let no = parseInt(prompt("enter no."));
if(no==1){
    document.getElementById("demo5").innerHTML="composite no.";
}else if(no%2 == 0 ){
    document.getElementById("demo5").innerHTML="even  no.";

}else{
    document.getElementById("demo5").innerHTML="odd no.";

}