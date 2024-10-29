let canvas = document.getElementById("canvas")
let ctx = canvas.getContext('2d');
let p = document.getElementById("test")

let ball = {
    x: 50,
    y: 50,
    mx: 3,
    my: 2,
    r: 15,
    speed: 2,
    color: "#012afa",
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}
ball.draw()

function init() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    if( ball.x + ball.r >= canvas.width || ball.x - ball.r <= 0) {
        ball.mx = -ball.mx
    }

    if( ball.y + ball.r >= canvas.height || ball.y - ball.r <= 0) {
        ball.my = -ball.my
    }


    ball.my *= 0.99997531

    p.innerHTML = `X: ${ball.x} | Y: ${ball.y}`
    ball.draw();
    ball.x += ball.mx;
    ball.y += ball.my;
    window.requestAnimationFrame(init)
}


init()

