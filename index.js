 let time1active = false
 let time2active = false
function click1(){
    if(time1active || time2active){
        return
    }
    time1active = true
    var p1 =   document.getElementById("1")
    p1.style.visibility = "visible"
    var time = 60
   
    
   function updatetime(){
    if(time > 0 ){
        time--
        p1.innerHTML = time
        setTimeout(updatetime,1000)
    }
    else{
        p1.innerHTML = "time finished"
        time1active = false
    }
   }
    updatetime()

        
}
function click2(){
    if(time1active || time2active){
        return
    }
    
    var p2= document.getElementById("2")
    p2.style.visibility = "visible"
    var time1 = 120
    function updatetime1(){
        if(time1> 0){
            time1--
            p2.innerHTML = time1
            setTimeout(updatetime1,1000)
            
        }
        else{
            p1.innerHTML = "time finished"
            time2active = false
        }
    }
    updatetime1()
    
    
}
    