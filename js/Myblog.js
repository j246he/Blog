$(function (){
	$("body").delegate(".comment","propertychange input",function (){
		// if there is something in the textarea, then the button is abled,
		// 	otherwise the button is disabled.
		if($(this).val().length>0){
			$(".send").prop("disabled",false);
		}
		else{
			$(".send").prop("disabled",true);
		}
	});
	//button click event
	$(".send").click(function (){
		//get the input of textarea
		var $text = $(".comment").val();
		//create the element node
		var $textNote = createEle($text);
		//append to the messageList
		$(".messageList").prepend($textNote);
	});

	//event of like
	$("body").delegate(".handleTop","click",function (){
		$(this).html(parseInt($(this).html())+1);
	});
	//event of dislike
	$("body").delegate(".handleDown","click",function (){
		$(this).html(parseInt($(this).html())+1);
	});
	//event of delete
	$("body").delegate(".handleDel","click",function (){
		$(this).parents(".note").remove();
	});

	//create element of a note
	function createEle(text){
		var $textNote = $("<div class=\"note\">\n"+
            "<p class=\"noteInfo\">"+text+"</p>\n"+
            "<p class=\"infoHandle\">\n"+
              "<span class=\"infoTime\">"+createTime()+"</span>\n"+
              "<span class=\"infoOperation\">\n"+
                "<a href=\"javascript:;\" class=\"handleTop\">0</a>\n"+
                "<a href=\"javascript:;\" class=\"handleDown\">0</a>\n"+
                "<a href=\"javascript:;\" class=\"handleDel\">delete</a>\n"+
              "</span>\n"+
            "</p>\n"+
          "</div>"
			);
		return $textNote;
	}
	//create the time of our format
	function createTime(){
		var date = new Date();
		var month = date.getMonth()+1;
		var currentTime = date.getFullYear()+"-"+
		month+"-"+
		date.getDate()+" "+
		date.getHours()+":"+
		date.getMinutes()+":"+
		date.getSeconds();
		return currentTime;
	}

});
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