var followCount = document.querySelector("#followNum")
var followButton = document.querySelector("#btn")
var clickTime = 0

followButton.addEventListener("click", function(){
	   if(clickTime == 0){
	   	followCount.innerHTML = "10k" 
	    followButton.innerHTML = "Following"
	    followButton.style.backgroundColor = "#F3F5F7"
	    followButton.style.color = "black"
	    clickTime = 1
	   }else{
	   	followCount.innerHTML = "9,999"
	    followButton.innerHTML = "Follow"
	    followButton.style.backgroundColor = "#458eff"
	    followButton.style.color = "white"
	    clickTime = 0
	   }
})









