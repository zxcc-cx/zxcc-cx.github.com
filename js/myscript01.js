function changeImage(){
	element=document.getElementById('myimage')
	if (element.src.match("bulbon")){
		element.src="../image/pic_bulboff.gif";
	}else{
		element.src="../image/pic_bulbon.gif";
	}
 }