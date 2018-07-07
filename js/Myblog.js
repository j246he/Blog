function bigger(e){
	var pic = e.target;
	var motai = document.getElementById('motai');
	var modalpic = document.getElementById('modalpic');
	if(pic.id=="mypic"){
		modalpic.style.width="33%";
	}
	modalpic.src=pic.src;
	motai.style.display="block";
}

function closepic(){
	var motai = document.getElementById('motai');
	motai.style.display="none";
}