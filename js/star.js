var thetimer;
window.onload=init;
var count=0;
var gametime=0;
var gamebar;
function init(){
	var bplay = document.getElementById('buttonPlay');
	var bwords = document.getElementById('someWords');
	bwords.style.display="none";
	bplay.style.display="none";
}
function startgame(){
	var gameTimer = window.setInterval("changeTime()",1000);
	thetimer = window.setInterval("createstar()",600);
	var bstart = document.getElementById('intro');
	var bplay = document.getElementById('buttonPlay');
	var bwords = document.getElementById('someWords');
	bstart.style.display="none";
	bplay.style.display="block";
	bwords.style.display="block";
}
function changeTime(){
	gametime++;
	var obj = document.getElementById('game');
	obj.innerHTML = gametime;
}
function createstar(){
	count++;
	var star = document.createElement("img");
	document.body.appendChild(star);
	star.src="img/star.jpg";
	// star.classList.add('user_select');
	star.style.userSelect = "none";
	star.width=Math.floor(Math.random()*80+20);
	star.style.position="absolute";
	var x = Math.floor(Math.random()*500+100);
	var y = Math.floor(Math.random()*1350+50);
	star.style.top = x+"px";
	star.style.left = y+"px";
	gamebar = document.getElementById('gameProcess');
	var gamebigbar = document.getElementById('gameBorder');
	gamebar.style.top = gamebigbar.style.top;
	gamebar.style.width=count*5+"px";
	if (count>20) {gameover();}
	star.onclick=removestar;
}
function removestar(){
	this.parentNode.removeChild(this);
	count--;
	gamebar.style.width=count*5+"px";
}
function gameover(){
	alert("game over! Your score is "+gametime);
	window.clearInterval(thetimer);
	location.reload();
}
function pause(){
	alert("pause game");
}
function restart(){
	window.clearInterval(thetimer);
	location.reload();
}