// const numb = document.querySelector(".number");
// let counter = 0;
// setInterval(() => {
//   if(counter == 100 ){
//     clearInterval();
//   }else{
//     counter+=1;
//     numb.textContent = counter + "%";
//   }
// }, 80);

var ctx = document.getElementById('circularLoader').getContext('2d');
var al = 0;
var start = 4.72;
var cw = ctx.canvas.width;
var ch = ctx.canvas.height;
var diff;
function progressSim(){
	diff = ((al / 100) * Math.PI*2*10).toFixed(2);
	ctx.clearRect(0, 0, cw, ch);
	ctx.lineWidth = 17;
	ctx.fillStyle = "#ffffff";
	ctx.strokeStyle = "#ffffff";
	ctx.textAlign = "center";
	ctx.font="28px Raleway";
	ctx.fillText(al+'%', cw*.52, ch*.5+5, cw+12);
	ctx.beginPath();
	ctx.arc(100, 100, 75, start, diff/10+start, false);
	ctx.stroke();
	if(al >= 100){
		clearTimeout(sim);
	    // Add scripting here that will run when progress completes
	}
	al++;
}
var sim = setInterval(progressSim, 50);
