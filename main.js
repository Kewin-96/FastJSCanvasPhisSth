// Canvas
let ctx; // canvas context ?
let canvasWidth = 500;
let canvasHeight = 500;

// particles
let particles = [];
let particlesCount = 200;

//interval variables
var interval;						//id of created interval
interval_timeout = 10;				//interval timeout (1/interval_timeout = frequency of calculating generations)

//DEBUG variables
let DEBUG_logIterator = 0;
let randomSpeedRange = 500;

//window.onload=function() - executes when loading site
window.onload=function()
{
	//initializing canvas and simulation
	init_canvas();

	// set interval ...
	particleTests();

	//DEBUG TESTS
	/*drawPixel(5,5,255,255,255);
	drawPixel(6,5,255,255,255);
	drawPixel(5,6,255,255,255);
	drawPixel(6,6,255,255,255);
	drawPixel(7,7,255,255,255);
	drawPixel(4,4,255,0,0);
	drawPixel(6,5,0,0,0);
	drawPixel(5,6,0,0,0);
	drawPixel(6,6,0,0,0);*/
	
	/*ctx.fillStyle ='white';
	ctx.fillRect(5,5,1,1);
	ctx.fillStyle ='white';
	ctx.fillRect(6,5,1,1);
	ctx.fillStyle ='white';
	ctx.fillRect(5,6,1,1);
	ctx.fillStyle ='white';
	ctx.fillRect(6,6,1,1);
	ctx.fillStyle ='white';
	ctx.fillRect(7,7,1,1);
	ctx.fillStyle ='red';
	ctx.fillRect(4,4,1,1);
	ctx.fillStyle ='black';
	ctx.fillRect(6,5,1,1);
	ctx.fillStyle ='black';
	ctx.fillRect(5,6,1,1);
	ctx.fillStyle ='black';
	ctx.fillRect(6,6,1,1);*/
}
function particleTests()
{
	interval = setInterval(simulation,interval_timeout);

	for(var i = 0; i < particlesCount; i++)
	{
		particles.push(new Particle(
			new Point(canvasWidth / 2.0, canvasHeight / 2.0), //new Point(parseInt((Math.random() * (canvasWidth - 1))), parseInt((Math.random() * (canvasHeight - 1)))),
			new Color(parseInt(Math.random() * 255), parseInt(Math.random() * 255), parseInt(Math.random() * 255)),
			new Point(parseInt((Math.random() - 0.5) * randomSpeedRange), parseInt((Math.random() - 0.5) * randomSpeedRange))));
	}
}