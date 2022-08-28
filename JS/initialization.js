// ****************************************************
// ****************** INITIALIZATION ******************
// ****************************************************

// function init_canvas() - initializes canvas - sets canvas dimensions and draws gridcell
function init_canvas()
{
    //setting canvas dimensions
	canv=document.getElementById("canv");
	canv.width = canvasWidth;
	canv.height = canvasHeight;

	//filling canvas with gridcell
	ctx=canv.getContext("2d");
	ctx.fillStyle="black";
	ctx.fillRect(0,0,canv.width,canv.height);
}