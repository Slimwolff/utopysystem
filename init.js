let canvas = document.getElementById("canvas")
let ctx = canvas.getContext('2d');
let p = document.getElementById("test")

let euler = 2.71828182845904523536;
let accel = .9997531;
let aten = 0.12;

let ball = {
    x: 230,
    y: 120,
    mx: 1.5,
    my: 1.5,
    r: 15,
    speed: 0.11,
    color: "#012afa",
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    },
    move(w, h) {
        this.x += this.mx;
        this.y += this.my;
    }
}
ball.draw()

let theta = 10 * Math.PI * 2
let angle = 1
let t = 3.5 * Math.PI 

function init() {
    ctx.fillStyle = "rgb( 255 255 255 / 15%)"
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    let x = ball.x
    let y = ball.y
    let r = 7
    let a = 100;
    let b = a;

    // if (ball.x + ball.r >= canvas.width || ball.x - ball.r <= 0) {
    //     ball.mx = -ball.mx
    // }

    // if (ball.y + ball.r >= canvas.height || ball.y - ball.r <= 0) {
    //     ball.my = -ball.my
    // }

    if(angle > 360) {
        angle = 1
    }


    angle += ball.speed
    
    ball.mx = Math.cos(angle) * (2 * Math.PI * 1.5)
    ball.my = Math.sin(angle) * (2 * Math.PI * 1.5)

    ball.move()
    ball.draw();

    p.innerHTML = `X: ${ball.x} | Y: ${ball.y}` + '<br>' + 
    `theta: ${theta} | cos: ${Math.cos(theta)} | sin: ${Math.sin(theta)}` + '<br>' +
    `b.mx: ${ball.mx} | b.my: ${ball.my}`

    setTimeout(() => {
        window.requestAnimationFrame(init)
    }, 1000 / 60)
    
}


init()