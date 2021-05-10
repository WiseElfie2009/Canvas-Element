var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.font = "30px Comic Sans MS";
ctx.fillStyle = "red";
ctx.textAlign = "center";
ctx.fillText("Gradient", canvas.width/2, canvas.height/2);

// Create gradient
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "purple");
grd.addColorStop(1, "magenta");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);

var Rgrd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");     

ctx.fillStyle = Rgrd;
ctx.fillRect(10, 10, 150, 80);      