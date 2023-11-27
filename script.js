let backVideo = document.getElementById("backVideo");
    let btnicon = document.getElementById("btnicon");

    btnicon.onclick = function(){
        backVideo.style.display = "block";

        if(backVideo.paused){
            backVideo.play();
            btnicon.src = "icons/pause.png";
        }
        else{
            backVideo.pause();
            btnicon.src = "icons/play.png";
        }
    }