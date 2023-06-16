colorbukkit = document.getElementById("colorbukkit");

let latestMouseEnterTime = -1;
function timer(startValue){
	setTimeout(function() {
		if(startValue != latestMouseEnterTime){
			return;
		}
		
	}, 2000);
}

async function startTimer(){
	await timer(latestMouseEnterTime);
}

colorbukkit.addEventListener("mouseenter", (event) => {
	latestMouseEnterTime = Date.now();
	startTimer();
})

colorbukkit.addEventListener("mouseleave", (event) => {
	latestMouseEnterTime = -1;
})
