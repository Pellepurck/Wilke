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
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}