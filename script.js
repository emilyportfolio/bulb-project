let bulb1=document.getElementById("bulb1")
let isOn=false
setInterval(function(){
    if(isOn){
        bulb1.src="light_off.jpg"
        isOn=false
    }else{
        bulb1.src="light_on.jpg"
        isOn=true
    }
},1000)
let bulb2=document.getElementById("bulb2")
let isOn2=false
setInterval(function(){
    if(isOn2){
        bulb2.src="light_off.jpg"
        isOn2=false
    }else{
        bulb2.src="light_on.jpg"
        isOn2=true
    }
},1000)