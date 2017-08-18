var fs = require('fs');
const dir = fs.readdirSync('./videos').map((item)=>{return './videos/' + item;});

window.onload = function() {
    var video = document.getElementById("videoDisplay");
    var index = 0;
    loadVideo(video, dir[index]);
    video.onended = function() {
	index++;
	if (index >= dir.length) {
	    index = 0;
	}
	loadVideo(video, dir[index]);
    };
    window.onkeypress = function(e) {
	console.log(e);
	if(e.code === 'Space') {
	    displayMatch();
	}
	if(e.code === 'KeyV') {
	    displayVideo();
	}
    };
};

function displayMatch() {
    $("#videoDisplay").fadeOut(750);
    $("#matchDisplay").fadeIn(750);
}

function displayVideo() {
    $("#matchDisplay").fadeOut(750);
    $("#videoDisplay").fadeIn(750);
}

function loadVideo(videoElement, newVideo) {
    videoElement.src = newVideo;
    videoElement.height = window.innerHeight;
}



