function preload(){
img = loadImage('dog_cat.jpg');
}

function setup(){
canvas = createCanvas(600,400);
canvas.center();


}

function draw(){
image(img,0,0,600,400);
fill('red');
noFill();
stroke('red');
rect(40,30 ,300,300);
text('Dog',70,70);

}