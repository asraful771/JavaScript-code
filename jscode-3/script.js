// "use strict"

// // // default  parameter

// // function message(text){
// //     console.log(`${text}`);
// // }
// // message("I love my country");

// // function c(line = "This is secend line" ){
// //     console.log(`${line}`);
// // }
// // c();
// // c(" see output using console");

// // // rest parameter

// // function resting(x,y, ...p){
// //     console.log(`x = ${x}, y = ${y}, p = ${p}`);
// // }

// // resting(12,13,14,15);

// // // spread operator

// // function addp(x,y,z){
// //     return x+y+z;
// // }
// // let number=[20,30,40];
// // console.log(addp(...number));
// // let number1 = [4,...number,5,6,7];
// // console.log(number1);

// // let p1 = {
// //     mname : "Shamim" ,
// //     age : 26,
// // }
// // let p2={
// //     nationality: "bangladashi",
// //     work:'fulto',
// // }

// // let person = {...p1,...p2}
// // console.log(person);

// // // object literals 

// // function info(name,age){
// //     return{
// //         name: name,
// //         age: age
// //     }
// // }

// // console.log(info("Shamim hossin",26));

// // function info(name,age){
// //     return{
// //         name,
// //         age
// //     }
// // }

// // console.log(info("Ali hossin",27));

// // let passage ={
// //     body:function(){
// //         return`Hi, I'm Shamim object `
// //     }
// // }
// // console.log(passage.body());

// // let sassage ={
// //     body(){
// //         return`Hi, I'm sassage object `
// //     }
// // }
// // console.log(sassage.body());

// // // let sassage ={
// // //     'body name'(){
// // //         return`Hi, I'm sassage object `
// // //     }
// // // }
// // // console.log(sassage['body name']());


// var ber=[10,20,30,40,50]
// for(var x=0;x<ber.length; x++){
//     console.log(ber[x]);
// }
// var bar=[11,22,33,44,55];
// bar.forEach(lily);
// function lily(x){
//     console.log(x);
// }
// var y=[111,222,333,444,555];
// y.forEach(function(p){console.log(p)});

// var m=[5,6,7,8,9,10];
// var o=[];
// m.forEach(function (x){
//     o.push(x*x);
// });
// console.log(o);

// var a = [5,6,7,8,9,10];
// console.log(a);
// a.forEach(function(x,index,arr){
//     arr[index]=x+5;
// });
// console.log(a);

// var b = [50,16,27,38,59,510];
// console.log(b);
// b.forEach(function(x,index,arr){
//     arr[index]=x/2;
// });
// console.log(b);

//  ---------- ==========   Map and filter array function -----==============;

// map function js

const number= [2,13,4,45,6,17,80];
const minus = number.map(function(p){
    return p-1; // This is minus function.
});
console.log(number);
console.log(minus);

const plus =number.map(function(y){
    return y+2; // This is plus maping function. 
});
console.log(plus);

const squer = number.map(function(s){
    return s*s; //This is quer maing function.
});
console.log(squer);


//  filter function js

const small = number.filter(function(x){
    return x<20;
});
console.log(`The filter number smaller then 20 is: ${small}`);

const large=number.filter(function(x){
    return x>10;
});
console.log(`the filter large than 10 is: ${large} `);


// arrow function 

// nrmalfunction

function text(){console.log(`This is normal function`)}
text();
const text1= () =>console.log(`This is arrow function `);
text1();

function text3(){return "Hi, This is normal function "}
console.log(text3);
let text4 = ()=>  `Hi, This is arrow RETURN function`;
console.log(text4);

const text5=(num1, num2,num3) => num1-num2+num3;

console.log(text5(10,20,30,));

var student=[
    {
        id:101,
        name:'Tonmoy',
        gpa:4.13
    },
    {
        id:102,
        name:'Toma',
        gpa:3.65
    },
    {
        id:103,
        name:'Alom',
        gpa:2.69
    },
    {
        id:104,
        name:'Ahamim',
        gpa:3.23
    },
    
    {
        id:105,
        name:'Shamim',
        gpa:3.26
    },
    
    {
        id:106,
        name:'Anis',
        gpa:2.60
    }
]
console.log(student);

function studentName(){
    return student.filter(function(x){
        return x.gpa>3
    }).map(function(y){return y.name });
}

console.log(studentName());

const studentName1 = () => student.filter((x)=>x.gpa<3).map((y)=>y.name);
console.log(studentName1());
// Arrow function end.

