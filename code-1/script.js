// let tag = document.querySelector('.bom .lon');

// const p1=tag.children[0];
// p1.textContent = location.href;

// const p2=tag.children[1];
// p2.textContent = location.protocol;

// const p3=tag.children[2];
// p3.textContent = location.hostname;

// const p4=tag.children[3];
// p4.textContent = location.port;

// const p5=tag.children[4];
// p5.textContent = location.pathname;



// const save = document.querySelector('.pt1 .save');
// const message = document.querySelector('.pt1 .mess');

// save.addEventListener('click', function(){
//     message.textContent = "your file is save";

// });

// setTimeout(()=>{
//     message.textContent = "";
// }, 3000);


// const startcount = document.querySelector('.pt2 .btn');
// const display = document.querySelector('.pt2 .display');

// startcount.addEventListener('click', meter);

// function meter(){
//     var count = 59;
//     display.textContent = count;


//     setInterval(() => {
//         count-- ;
//         display.textContent = count;
//     },1000);
// }


// const startTime = document.querySelector('.clock .time');
// const clock = document.querySelector('.clock .dis');

// startTime.addEventListener('click', startClock);
// function startClock(){
//     let date = new Date();
//     let hours = date.getDate();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
    
//      minutes = formate(minutes);
//      seconds = formate(seconds);
    
//     let time = hours + ":" + minutes + ":" + seconds;

//     clock.textContent = time;


//     setInterval(startClock,1000);
// }

// function formate(value){
//     if(value<10){
//         value = '0' + value;
//     }
//     return value;
// }



// //  error handle system

// try{
//     alert("hi everyone");
//     alert(pr);
// }
// catch(err){
//     console.log(err);
// }
// finally{
//     console.log("good work");
// }



//   handle error

var bejal = document.querySelector(".try .check").addEventListener('click', jame);