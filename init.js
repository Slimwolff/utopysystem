let canvas = document.getElementById("canvas")
let ctx = canvas.getContext('2d');
let p = document.getElementById("test")

let cursor = {
    x: canvas.width / 2,
    y: canvas.height / 2
}

canvas.addEventListener('mousemove', (e) => {
    cursor.x = e.clientX
    cursor.y = e.clientY
})

function ball(x, y, centerX, centerY, radiusCircle, radiusRotation, speed, color) {
    this.x = x;
    this.y = y;
    this.cx = centerX;
    this.cy = centerY;
    this.r = radiusCircle;
    this.speed = speed;
    this.color = color;
    this.circunference = 2 * Math.PI * radiusRotation;
    this.radiusCircun = radiusRotation * Math.PI;

    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    };

    this.move = function() {
        this.x = this.cx + Math.cos(this.circunference) * this.radiusCircun;
        this.y = this.cy + Math.sin(this.circunference) * this.radiusCircun;
        this.circunference += this.speed
    };

    this.moveAround = function(e) {
        this.x = e.x + Math.cos(this.circunference) * this.radiusCircun;
        this.y = e.y + Math.sin(this.circunference) * this.radiusCircun;
        this.circunference += this.speed;
    }
}
    


let green = new ball(
    canvas.width / 2,
    canvas.height / 2,
    canvas.width / 2,
    canvas.height / 2,
    10,
    15,
    0.02,
    "#12fa09"
)

let blue = new ball(
    canvas.width / 2,
    canvas.height / 2,
    canvas.width / 2,
    canvas.height / 2,
    10,
    30,
    0.09,
    "#099afa"
)


function hexagon(x, y, size, hexSize) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.hexSize = hexSize;

    this.draw = function() {
        ctx.beginPath()
        ctx.moveTo(this.x,this.y)
        ctx.lineTo(this.x+this.hexSize,this.y+this.size)
        ctx.lineTo(this.x+this.hexSize,this.y+this.size+this.size)
        ctx.stroke()
        ctx.closePath();
        
    }
}

let hex = new hexagon(100,100, 50, 75);

function init() {
    ctx.fillStyle = "rgb( 255 255 255 / 10%)"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
   
    green.draw();
    green.move();

    blue.draw()
    blue.moveAround(green)


    hex.draw()

    setTimeout(() => {
        window.requestAnimationFrame(init)
    }, 1000 / 240)
    
}


init()