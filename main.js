var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthOfLine = 2;

    var widht=screen.width;
    newWidth= screen.width-70;
    newHeight=sreen.height-300;


    if(width<992){
          document.getElementById("myCanvas").width=newWidth;
          document.getElementById("myCanvas").height=newHeight;
          document.getElementById.style.overflow="hidden";
    }
    canvas.addEventListener("touchstart" ,myTouchstart);

    function myTouchstart(e){
        console.log("mytouchstart");
        lastPositionOfX=e.touches[0].clientX;
        lastPositionOfY=e.touches[0].clientY;
    }
    

    canvas.addEventListener("touchmove", myTouchMove);
    function myTouchMove(e)
    {

         currentPositionOfTouchX = e.touches [0].clientX - canvas.offsetLeft;
         currentPositionOfTouchY = e.touches [0].clientY - canvas.offsetTop;

       ctx.beginPath();
       ctx.strokeStyle=color;
       ctx.lineWidth = widthOfLine;

       console.log("Ultima posição das cordenadas x e y =");
       console.log("x=" + corentPositionOfX + "y =" + corentPositionOfY);
       ctx.moveTo (lastPositionOfX , lastPositionOfY);

       console.log("Ultima posição das cordenadas x e y =");
       console.log("x=" + corentPositionOfTouchX + "y =" + corentPositionOfTouchY);
        ctx.lineTo (corentPositionOfTouchX , corentPositionOfTouchY);
        ctx.stroke();


        lastPositionOfX = currentPositionOfTouchX; 
        lastPositionOfY = currentPositionOfTouchY;
    }