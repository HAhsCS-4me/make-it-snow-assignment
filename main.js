//MAKE IT SNOW

//Set up Canvas and Context 
let cnv = document.getElementById('myCanvas');
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//Global Variables 
let snow = [];

let numSnow = 150; 

for (i = 0; i < numSnow; i++) {
    snow.push({
        x: Math.randomDec(0, cnv.width),
        y: Math.randomDec(0, cnv.height),
        r: Math.randomDec(2, 8),
        speed: Math.randomDec(0, 1.5)
    })
}

//Event listeners
addEventListener('keydown', keydownHandler); 

//Event Function
function keydownHandler(event) {
    console.log(event.keyCode); 
    if (event.keyCode == '39') { //Right Arrow key 
        snow.pop(); 
    } else if (event.keyCode == '37') { //Left Arrow Key 
        snow.push({
            x: Math.randomDec(0, cnv.width),
            y: Math.randomDec(0, cnv.height),
            r: Math.randomDec(2, 8),
            speed: Math.randomDec(0, 1.5)
        })
        numSnow ++; 
    }
    
}

requestAnimationFrame(draw);

function draw() {
    // Logic

    // Draw Background
    ctx.fillStyle = 'white';
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    //Draw Snow 
    for (i = 0; i < snow.length; i++) {
        //Move snow (faliing)
        snow[i].y += snow[i].speed;

        //Draw snow 
        ctx.beginPath();
        ctx.arc(snow[i].x, snow[i].y, snow[i].r, 0, 2 * Math.PI);
        ctx.fill();

        //Remove snow and add snow 
        if (snow[i].y > cnv.height) {
            //Remove snow
            snow.splice(i, 1); 
            //Add snow
            snow.push({
                x: Math.randomDec(0, cnv.width),
                y: 0,
                r: Math.randomDec(5, 15),
                speed: Math.randomDec(0, 1.5)
            })
        } 
    }

    // Request another Animation Frame
    requestAnimationFrame(draw);
}

