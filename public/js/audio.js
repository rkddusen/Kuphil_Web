let audio = new Audio('../image/442hz_30s.mp4');

    audio.addEventListener('ended', function(){
        this.currentTime = 0;
        this.play();
    }, false);

$(document).ready(function(){
    $("#play").show();
    $("#pause").hide();

    // moai1을 클릭하면 moai2를 보여줌
    $("#play").click(function(){
        $("#play").hide();
        $("#pause").show();
        audio.currentTime=0;
        audio.play();
    });

    // moai2을 클릭하면 moai1를 보여줌
    $("#pause").click(function(){
        $("#play").show();
        $("#pause").hide();
        audio.pause();
    });
});