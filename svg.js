var svgImage = document.getElementById("svgImage");
var btn = document.getElementById("clearbtn");
var mousex, mousey;


svgImage.addEventListener("mousemove", function(e) {
    mousex = e.offsetX;
    mousey = e.offsetY;
});


var addDot = function(e){
    if (svgImage.hasChildNodes()){
	var startx = svgImage.lastChild.getAttribute("cx");
	var starty = svgImage.lastChild.getAttribute("cy");
	var c = document.createElementNS("http://www.w3.org/2000/svg", "line");
	c.setAttribute("x1", startx);
	c.setAttribute("y1", starty);
	c.setAttribute("x2", mousex);
	c.setAttribute("y2", mousey);
	c.setAttribute("style", "stroke: #000000;stroke-width:2");
	document.getElementById("svgImage").appendChild(c);
	addCircle(mousex.toString(), mousey.toString(), "20");
    }
    else{
	addCircle(mousex.toString(), mousey.toString(), "20");
    }
}

var addCircle = function(x,y,r){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    
    c.setAttribute("cx", x);
    
    c.setAttribute("cy", y);
    
    c.setAttribute("r", r);
    
    c.setAttribute("fill", "black");

    return c;
//    document.getElementById("svgImage").appendChild(c);
}


var clrSVG = function(){
    while (svgImage.hasChildNodes()){
	svgImage.removeChild(svgImage.lastChild);
    }
}

btn.addEventListener("click", clrSVG);
svgImage.addEventListener("click", addDot);
