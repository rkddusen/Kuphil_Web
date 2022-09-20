document.querySelector(".audio1").addEventListener("click",function(){
    let play1 = new Audio("./image/442hz.mp3");
    play1.loop = true;
    play1.volume = 0.8;
    play1.play();
})