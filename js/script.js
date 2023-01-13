// play video on click of video tag in the page 

$(document).ready(function () {
    var video = document.getElementById("video-player");
    video.addEventListener("click", function () {
        if (video.paused) {
            video.play();
            // autoplay video
            video.controls = true;
        } else {
            video.pause();
            video.controls = false;
        }
    });
});


const openPopup = document.getElementById("poster");
const close = document.getElementById("close");
const popUp = document.getElementById('pop_up');
const video = document.getElementById("video-player");

openPopup.addEventListener('click', function (e) {
    console.log("open");
    e.preventDefault();
    popUp.style.display = "block";
    video.controls = true;
});

close.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.style.display = "none";
    video.pause();
    video.controls = false;
});
