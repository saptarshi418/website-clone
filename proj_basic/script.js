var crser = document.querySelector("#cursor")
var crserb = document.querySelector("#cursor-back")


document.addEventListener("mousemove",function(dets){
    crser.style.left = dets.x+"px"
    crser.style.top = dets.y+"px"
    crserb.style.left = dets.x - 190+"px"
    crserb.style.top = dets.y - 190+"px"
})

gsap.to("#nav",{
   backgroundColor :"#000",
   duration:0.5,
   height:"120px",
   scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        
        start:"top -10%",
        end:"top -11%",
        scrub:2
    }
   
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
        
        start: "top -25%",
        end: "top -70%",
        scrub:2
    }
})



