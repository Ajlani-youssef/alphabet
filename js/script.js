var couleurList=["#F1C3D0","#DB8DB2","#C993D4","#9FA3E3","#7095E1","#59ADD0","#51C0BF","#B2E289"];
setInterval( () => {
	let lettres = document.getElementsByName("colorer");
	lettres.forEach(element => element.style.backgroundColor=couleurList[Math.floor(Math.random()*8)])
},300);
/*var myCanvas = document.getElementById("myCanvas");
var dessiner = myCanvas.getContext("2d");
myCanvas.addEventListener("mousedown",function(e){
	var mouseX=e.pageX - this.offsetLeft ;
	var mouseY=e.pageY - this.offsetTop ;
	var paint = true ;
	addClick(e.pageX - this.offsetLeft - e.pageY - this.offsetTop);
	redraw();
});
myCanvas.addEventListener("mousemove",function(e){
	if(paint){
		addClick(e.pageX - this.offsetLeft - e.pageY - this.offsetTop,true);
		redraw();
	}
});
myCanvas.addEventListener("mouseup",function(e){
	paint = false ;
});
var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

function addClick(x, y, dragging)
{
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
}
function redraw(){
  dessiner.clearRect(0, 0, 200, 100); 
  
  dessiner.strokeStyle = "#fff";
  dessiner.lineJoin = "round";
  dessiner.lineWidth = "4";
  for(let i=0; i < clickX.length; i++) {		
    dessiner.beginPath();
    if(clickDrag[i] && i){
      dessiner.moveTo(clickX[i-1], clickY[i-1]);
     }else{
       dessiner.moveTo(clickX[i]-1, clickY[i]);
     }
     dessiner.lineTo(clickX[i], clickY[i]);
     dessiner.closePath();
     dessiner.stroke();
  }
}*/
let lesLettres = document.getElementsByName("colorer");
lesLettres.forEach(element => element.addEventListener("mouseenter",function(){
	element.setAttribute("name" , "");
	element.style.backgroundColor = "#FFFFFF";
}));
lesLettres.forEach(element => element.addEventListener("mouseleave",function(){
	element.setAttribute("name" , "colorer");
	element.style.backgroundColor=couleurList[Math.floor(Math.random()*8)];
}));
lesLettres.forEach(element => element.addEventListener("click",function(){
}));
