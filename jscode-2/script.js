var dis=document.querySelector(".try .out");
document.querySelector(".try .check").addEventListener("click",function(e){
    var num=document.querySelector(".try .number").value;
    e.preventDefault();
    try{
        if(num<5){
            throw"input is too low";
        }else if(num >10){
            throw"input is too height";
        }

    }catch(err){
       dis.innerHTML= err;
    }
});



const c=document.querySelector('.con .flag');
const ctx = c.getContext("2d");


ctx.lineWidth=3;
ctx.strokeStyle="black";
ctx.strokeRect(10,10,400,300);



ctx.fillStyle="green";
ctx.fillRect(12,12,396,296);

var centerX=c.width/2;
var centerY=c.height/2;

ctx.beginPath();
ctx.arc(centerX,centerY,80,0,2*Math.PI,false);
ctx.fillStyle="red";
ctx.fill();
ctx.stroke();

let x=12;
let y=30;
let sum= x+y;
console.log(`sum is ${sum}. the end`);
