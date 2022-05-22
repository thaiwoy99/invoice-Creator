let serviceRequested = []
let WashCar ={
    Service:"wash car",
    Amount:10
}
let MowLawn ={
    Service:"mow Lawn",
    Amount:20
}
let pullWeeds ={
    Service:"pull weeds",
    Amount:30
}


const btn1= document.getElementById("btn-1")
const btn2= document.getElementById("btn-2")
const btn3= document.getElementById("btn-3")
let listItem = document.getElementById("service")
let priceItem =document.getElementById("price")
let sendIT=document.getElementById("sender")
let spa =document.getElementById("spa")
let Total  = 0;
let showlist = document.getElementById("pp")
let Show =showlist.getElementsByTagName("li")

let serv = listItem.getElementsByTagName("li")
let pri =priceItem.getElementsByTagName("li")

function render (){
     
    let list = ""
    let price=""
    
       
    for(var i =0;i<serviceRequested.length;i++){
       
        list += `<li>${ serviceRequested[i].Service} </li>`
    price += `<li>$ ${ serviceRequested[i].Amount}  </li>`
    
    
    Show[i].style.display= "block"

    }

    listItem.innerHTML=list
    priceItem.innerHTML=price
}





btn1.addEventListener("click", function(){
    if(serviceRequested.indexOf(WashCar)==-1){
    serviceRequested.push(WashCar)
    Total+=WashCar.Amount;
    spa.innerHTML=`$ ${Total}`
    

    render()
    
    
    }
    
})

btn2.addEventListener("click", function(){
    if(serviceRequested.indexOf(MowLawn)==-1){
    serviceRequested.push(MowLawn)
    Total+=MowLawn.Amount;
    spa.innerHTML=`$ ${Total}`
    
    render()
    
    
    
    }
    
})

btn3.addEventListener("click", function(){
    if(serviceRequested.indexOf(pullWeeds)==-1){
    serviceRequested.push(pullWeeds)
    Total+=pullWeeds.Amount;
    spa.innerHTML=`$ ${Total}`
    
    render()
    
    
    
    }
    
})


Show[0].addEventListener("click",function(){
    Show[0].style.display= "none"
    serv[0].style.display= "none"
    pri[0].style.display= "none"
   
   let rem1 =    serviceRequested.splice(0,1)
   console.log(rem1[0].Amount)

   Total=Total - rem1[0].Amount
   spa.innerHTML=`$ ${Total}`
   
    
    console.log(serviceRequested)
    
    

})

Show[1].addEventListener("click",function(){
    Show[1].style.display= "none"
    serv[1].style.display= "none"
    pri[1].style.display= "none"
    let rem2 =""
    if(serviceRequested.length==1){
    rem2 = serviceRequested.splice(serviceRequested.length-1,1)

}
    else{
      rem2 =  serviceRequested.splice(1,1)
    }
    Total=Total - rem2[0].Amount
    spa.innerHTML=`$ ${Total}`
 
    console.log(serviceRequested)
    
    
    

})

Show[2].addEventListener("click",function(){
    Show[2].style.display= "none"
    serv[2].style.display= "none"
    pri[2].style.display= "none"
    
   let rem3 = serviceRequested.splice(serviceRequested.length-1,1)
   Total=Total - rem3[0].Amount
   spa.innerHTML=`$ ${Total}`
   

    
    console.log(serviceRequested)

})

sendIT.addEventListener("click",function(){
    serviceRequested =[]
    render()
    Total =0;
    spa.innerHTML=`$ ${Total}`
    for (var i =0; i<Show.length;i++){
        Show[i].style.display= "none"
    }
    

    
})
