
var canvas = new fabric.Canvas("myCanvas");

ballX = 0;
ballY = 0;
holeY = 400;
holeX = 800;


blockImageWidth = 5;
blockImageHeight = 5;

function loadImg(){
	fabric.Image.fromURL("golf-h.png", function(Img){
		holeObject = Img;
		holeObject.scaleToWidth(50);
		holeObject.scaleToHeight(50);
		holeObject.set({
			top:holeY,
			left:holeX
		})
		canvas.add(holeObject);
	})
	newImage();
}

function newImage()
{
	fabric.Image.fromURL("ball.png", function(Img){
		ballObject = Img;
		ballObject.scaleToWidth(50);
		ballObject.scaleToHeight(50);
		ballObject.set({
			top:ballY,
			left:ballX
		})
		canvas.add(ballObject);
	})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(ballX==holeX&&ballY==holeY){
		canvas.remove(ballObject);
		document.getElementById("hd3").innerHTML="você atingiu o objetivo!!!";
		document.getElementById("myCanvas").style.borderColor = "red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ballY>=0){
			ballY = ballY - blockImageHeight;
			canvas.remove(ballObject);
			newImage();
		}
	}

	function down()
	{
		if(ballY<=450){
			ballY = ballY + blockImageHeight;
			canvas.remove(ballObject);
			newImage();
		}
	}

	function left()
	{
		if(ballX >5)
		{
			ballX = ballX - blockImageWidth;
			canvas.remove(ballObject);
			newImage();
		}
	}

	function right()
	{
		if(ballX <=1050)
		{
			ballX = ballX + blockImageWidth;
			canvas.remove(ballObject);
			newImage();
		}
	}
	
}

