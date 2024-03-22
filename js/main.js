document.addEventListener('DOMContentLoaded', function(){
	
	const playVideo = document.getElementById("video")
	const videoProgress = document.querySelector(".video-progress")

	playVideo.addEventListener("click", () => {
		videoProgress.classList.add("progress-start")
		if ( playVideo.paused ) {
			playVideo.play()
			videoProgress.classList.remove("progress-paused")
		}	else {
			playVideo.pause()
			videoProgress.classList.add("progress-paused")
		}
		
	})
})