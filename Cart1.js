let add = document.getElementById("add")
console.log(add);
add.addEventListener("click",()=>{
   let num=document.getElementById("num")
   console.log(num.value++);
})
let sub= document.getElementById("sub")
console.log(sub);
sub.addEventListener("click",()=>{
   let num=document.getElementById("num")
   console.log(num.value--);
   if(num.value<0){
    num.value=0
   }
   
})
let cart = document.getElementById("cart")
let demo = document.getElementById("demo")
cart.addEventListener("click",()=>{
    let num=document.getElementById("num")
    demo.innerText=num.value
})