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

