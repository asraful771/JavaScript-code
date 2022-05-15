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