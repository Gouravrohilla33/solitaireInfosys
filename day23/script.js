// switch case ...............................................................................................
let day ;
switch(new Date().getDate()){
    case 0 : day= "sunday";
    break;
    case 1 : day= "monday";
    break;
    case 2 : day= "tuesday";
    break;
    case 3 : day= "wednesday";
    break;
    case 4 : day= "thrusday";
    break;
    case 5 : day= "friday";
    break;
    case 6 : day= "saturday";
    break;
}
document.getElementById("test1").innerHTML="Today is :" + day ;
//  function...............................................................................................
function hy(){
    document.write("hy everyone");

}
hy();
function employee(name,designation){
    document.getElementById("test2").innerHTML="my name is :" + name ;
    document.getElementById("test3").innerHTML="my designation is :" + designation ;
}
ename = prompt("enter your name");
edesignation = prompt("enter your designation");
employee(ename,edesignation);

let check;
function checkno(num){
    if(num%2==0){
        document.getElementById("test4").innerHTML="Given no.= is even";

    }
    else{
         document.getElementById("test5").innerHTML="Given no.= is odd";

    }
}
let num1=parseInt(prompt("enter no. "));
checkno(num1);


function sum(a,b){
    add = a+b;
    document.getElementById("test6").innerHTML="sum of no. is =" + add;
    
}
let num2=parseInt(prompt("enter first no. "));
let num3=parseInt(prompt("enter second no. "));
sum(num2,num3);


function area(l,b){
    arearec = l*b;
    document.getElementById("test7").innerHTML="area of rectangle is =" + arearec+"cm<sup>2</sup>";

}
let num4=parseInt(prompt("enter length in cm "));
let num5=parseInt(prompt("enter width is cm "));
area(num4,num5);


// events..................................................................................................

function welcome(){
    alert("welcome to my page");
}
