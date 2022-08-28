let particleThickness = 3;

// draw 1 rectangle/pixel
function drawPixel(x, y, r, g, b)
{
	x = parseInt(x);
	if(x < 0)
		return;
	else if(x > canvasWidth - 1)
		return;

	y = parseInt(y);
	if(y < 0)
		return;
	else if(y > canvasHeight - 1)
		return;
		
	r = parseInt(r);
	if(r < 0)
		r = 0;
	else if(r > 255)
		r = 255;
		
	g = parseInt(g);
	if(g < 0)
		g = 0;
	else if(g > 255)
		g = 255;
		
	b = parseInt(b);
	if(b < 0)
		b = 0;
	else if(b > 255)
		b = 255;

	// fix - I don't know why, but assigning r=0, g=0, b=0 doesn't work ...
	if(r == 0 && g == 0 && b == 0)
		ctx.fillStyle ='black';

	// color
	ctx.fillStyle ='#' + ((r << 16) + (g << 8) + b).toString(16);
	
	// draw rectangle
	ctx.fillRect(parseInt(x), parseInt(y), particleThickness, particleThickness);
}