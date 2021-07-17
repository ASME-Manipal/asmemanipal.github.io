// ///////////////////////////
// //GLOBAL VARIABLES
// ///////////////////////////
// var width = 1920;
// var height = 1080;
// var speed = 20;
// var number = 500;
// var maxNumber = 5000;
// var wind = 0;
// var size = 5;

// var numFlakeTypes = 20;
// var allFlakes = [];
// var flakeTypes = [];
// var genArray = [];

// var ground = [];
// var frame = 0;
// var sky = {r: 150, g: 205, b: 255};
// var day = true;
// var pause = false;
// var clickStart = 0;

// Number.prototype.mod = function(n) {
//     return ((this%n)+n)%n;
// };

// //tree variables
// var branchAngleMin = 15;
// var	branchAngleMax = 35;
// var	branchLengthMin = .55;
// var	branchLengthMax = .95;
// var	branchWidthMin = .6;
// var	branchWidthMax = .8;

// ////////////////////////
// // CANVAS SETUP
// ///////////////////////
// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');

// var b_canvas = document.createElement('canvas');
// b_canvas.width = width;
// b_canvas.height = height;
// var b_ctx = b_canvas.getContext('2d');

// var g_canvas = document.createElement('canvas');
// g_canvas.width = width;
// g_canvas.height = height;
// var g_ctx = g_canvas.getContext('2d');

// var img = new Image();
// img.src = 'http://easymemecreator.com/popular/Crazy_Cat.gif';

// /////////////////
// // LISTENERS
// /////////////////
// function addListeners() {
//   canvas.addEventListener('mousedown', function(event) {
//     var x = event.pageX,
//         y = event.pageY;
//     drawTree(x,y);
//   });
  
//   document.body.addEventListener('keydown', function(e) {

//     switch (e.keyCode) {
//       case 37: //left
//         document.getElementById("windSlider").value--;
//         changeWind(wind-1);
//         break;
//       case 39: //right
//         document.getElementById("windSlider").value++;
//         changeWind(wind+1);
//         break;
//       case 38: //up
//         document.getElementById("speedSlider").value--;
//         changeSpeed(speed-1);
//         break;
//       case 40: //down
//         document.getElementById("speedSlider").value++;
//         changeSpeed(speed+1);
//         break;
//     }

//   });
  
// }

// //////////////
// //CONTROLS
// //////////////
// function toggle(button) {
//   if (button.value == "Stop") {
//     console.log(button.value);
//     button.value = "Start";
//     pause = true;
//   } else {
//     button.value = "Stop";
//     pause = false;
//     animate();
//   }
// }

// function changeSpeed(newSpeed) {
//   speed = newSpeed;
// }

// function changeNumber(newNumber) {
//   number = newNumber;
//   flakes = allFlakes.slice(0, newNumber);
// }

// function changeWind(newWind) {
//   wind = newWind;
// }

// function changeSize(newSize) {
//   size = newSize;
//   allFlakes.map(flake => flake.size = Math.random() * size + 3);
// }

// ////////////////////
// //MAKE FUNCTIONS
// ////////////////////
// function makeFlakeType(f_ctx, x, y, size, width, g) {
//   if (g > 1) return;
//   var yPos;
//   if (!genArray[g]) {
//     size = Math.random() * size + size/4;
//     width = Math.random() * width + width/5;
//     yPos = Math.random() * size;
//     genArray.push({ size: size, width: width, yPos: yPos });
//   } else {
//     size = genArray[g].size;
//     width = genArray[g].width;
//     yPos = genArray[g].yPos;
//   }
//   f_ctx.translate(x,y);
//   for (var i = 0; i < 6; i++) {
//     f_ctx.rotate(Math.PI*2/6);
//     f_ctx.beginPath(); 
//     f_ctx.moveTo(0,0); 
//     f_ctx.lineTo(0 - width/2,0); 
//     f_ctx.lineTo(0 - width/2,0 - size);
//     f_ctx.lineTo(0 + width/2,0 - size); 
//     f_ctx.lineTo(0 + width/2,0); 
//     f_ctx.lineTo(0,0); 
//     f_ctx.closePath();
//     f_ctx.fill(); 
//     makeFlakeType(f_ctx, 0, yPos, size, width, g+1);
//   }
//   f_ctx.translate(-x,-y);
// }

// function makeFlakeTypes() {
  
//   for (var i = 0; i < numFlakeTypes; i++) {
//     genArray = [];
//     var f_canvas = document.createElement('canvas');
//     f_canvas.width = 200;
//     f_canvas.height = 200;
//     var f_ctx = f_canvas.getContext('2d');
//     f_ctx.fillStyle = 'rgba(255,255,255,.4)';
//     makeFlakeType(f_ctx, 100, 100, 20, 4, 0);
//     flakeTypes.push(f_canvas);
    
//   }
  
// }

// function addFlakeType() {
//   var f_canvas = document.createElement('canvas');
//   f_canvas.width = 200;
//   f_canvas.height = 200;
//   var f_ctx = f_canvas.getContext('2d');
//   makeFlakeType(f_ctx, 50, 50, 10, 2, 0);
//   flakeTypes.push(f_canvas);
// }


// function makeFlake() {
  
//   var flakeSize = Math.random() * size + 3;
//   var x = Math.random() * width;
//   var y = Math.random() * height - height;
//   var flakeType = Math.floor(Math.random() * flakeTypes.length);
//   var speed = Math.random() * 5 + 2;
//   var r = parseInt(Math.random() * 255);
//   var g = parseInt(Math.random() * 255);
//   var b = parseInt(Math.random() * 255);
//   return {
//     x: x,
//     y: y,
//     size: flakeSize,
//     type: flakeType,
//     speed: speed,
//     r: r,
//     g: g,
//     b: b
//   };
// }


// //////////////////////////////
// // DRAW FUNCTIONS
// //////////////////////////////
// function drawBranches(x, y, width, length, generation) {
//   var branchWidth = width * 
//       (Math.random() * (branchWidthMax - branchWidthMin) + branchWidthMin);
//   var branchLength = length *
//       (Math.random() * (branchLengthMax - branchLengthMin) + branchLengthMin);
//   g_ctx.beginPath(); 

//   g_ctx.moveTo(x,y); 
//   g_ctx.lineTo(x,y - branchLength); 
//   g_ctx.lineTo(x - branchWidth,y - branchLength); 
//   g_ctx.lineTo(x - branchWidth,y); 
//   g_ctx.lineTo(x,y); 

//   g_ctx.closePath();
//   g_ctx.fillStyle = '#2B2116';
  
//   g_ctx.fill(); 
//   if (generation > 8) return;
  
//   g_ctx.save();
//   //draw left branch
//   g_ctx.translate(x - branchWidth/4,y - branchLength);
//   g_ctx.rotate(Math.PI*2/-((Math.random()* 
//                           (360/branchAngleMax - 360/branchAngleMin) + 
//                           (360/branchAngleMin))));
//   drawBranches(0, 0, branchWidth, branchLength, generation+1);
//   g_ctx.restore();

//   g_ctx.save();
//   //draw right branch
//   g_ctx.translate(x,y - branchLength + branchWidth/2);
//   g_ctx.rotate(Math.PI*2/((Math.random()* 
//                          (360/branchAngleMax - 360/branchAngleMin) + 
//                          (360/branchAngleMin))));
//   drawBranches(0, 0, branchWidth, branchLength, generation+1);
// 	g_ctx.restore();
  
// }

// function drawTree(x,y) {
//   if (y > height - ground[x]) {
//     var d = (height + 5 - y)/15;
//     drawBranches(x,y,15/d,60/d,0);
//     ctx.drawImage(g_canvas, 0, 0);
//   }
  
// }

// function drawSky() {
//   if (frame.mod(3) === 0) {
//       if (day) {
//         if (sky.g > -10) {
//           sky.r--;
//           sky.g--;
//           sky.b--;
//         } else if (sky.b > -10) {
//           sky.b--;
//         } else {
//           day = false;
//         }
//       } else {
//         if (sky.b < 100) {
//           sky.b++;
//         } else if (sky.g < 355) {
//           sky.b++;
//           sky.g++;
//           sky.r++;
//         } else {
//           day = true;
//         }
//       }
      
//       var color = "rgb("+sky.r+","+sky.g+","+sky.b+")";
//       var topColor = "rgb("+(sky.r-150)+","+(sky.g-150)+","+(sky.b-150)+")";
//       //var color = "rgb("+0+","+0+","+355+")";
//       //document.getElementById("canvas").style.background = color;
//       var background = document.getElementById('canvas');
//       background.style.backgroundImage = 'linear-gradient('
//         + 0 + ', ' + color + ', ' + topColor + ')';
//     }
// }

// function addJutter(f) {
//   if (!f.jutter) {
//     f.jutter = Math.ceil(Math.random() * 150);
//     f.jutterx = (Math.random() * 1 - .5);
//   } else {
//     f.jutter--;
//   }
//   f.x = (f.x + f.jutterx).mod(width + f.size*10);
  
// }

// function drawFlakes() {
//   //f_ctx.clearRect(0, 0, width, height); 
  
//   for (var i = 0; i < flakes.length; i++) {
//     var f = flakes[i];
//     f.y = (f.y + f.speed * speed/100)%height;
//     f.x = (f.x + wind*speed/500).mod(width+f.size*10);
//     addJutter(f);
//     //console.log(f.x);
      
//     //f_ctx.fillRect(f.x, f.y, f.size, f.size);
//     //f_ctx.fillStyle  = "rgb("+f.r+","+f.g+","+f.b+")";
//     //f_ctx.fillStyle = "white";
//     //f_ctx.fill();
//     ctx.drawImage(flakeTypes[f.type], f.x-f.size*10, f.y, f.size*10, f.size*10);

//     if (f.y >= height - ground[parseInt(f.x)]) {
//       ground[parseInt(f.x)]+=f.size;
//       f.y = -(f.size * 10);
//       f.x = Math.random() * (width + f.size*5);
//     }
//   }
//   //ctx.drawImage(f_canvas, 0, 0);
// }

// function drawGround() {
//   ctx.fillStyle = "white";
//   for (var i = 0; i < ground.length; i++) {
//       ground[i] = (ground[(i-1).mod(ground.length)] + ground[i] + ground[(i+1).mod(ground.length)])/3;
//       ctx.fillRect(i, height-ground[i], 1, ground[i]);
//     }
// }

// function drawTrees() {
//   ctx.drawImage(g_canvas, 0, 0);
// }

// function animate() {
//   if (pause) return;
//   if (frame % 100 === 0) {
//     //flakeTypes.shift();
//     //addFlakeType();
//   }
//   frame++;
//   ctx.clearRect(0, 0, canvas.width, canvas.height);   

//   drawSky();
//   drawGround();
//   drawTrees();
//   drawFlakes();
  
  

//   setTimeout(animate, 1);
// }

// //////////////////////////////
// // START
// //////////////////////////////
// function main() { 
  
//   addListeners();

//   //setup initial ground height
//   for (var i = 0; i < width; i++) {
//     ground.push(20);
//   }
  
//   makeFlakeTypes();
  
//   //make all the flakes
//   for (var i = 0; i < maxNumber; i++) {
//     allFlakes.push(makeFlake());
//   }
//   flakes = allFlakes.slice(0, number);
  
//   addFlakeType();
  
//   // call the animate function manually for the first time
//   animate();
// }

// //img.onload = function() {
//   main();
// //};


