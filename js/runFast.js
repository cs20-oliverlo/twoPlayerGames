// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
let carWindowImg = document.getElementById("car-window-img");
let carWindow2Img = document.getElementById("car-window2-img");
cnv.width = 1080;
cnv.height = 120;

player = [
    {
        x: 0,
        y: 10,
        w: 25,
        h: 40,
        color: "red",
        xSpeed: 0,
        xAccel: 0,
        go: false,
        goPastState: false,
        points: 0
    },
    {
        x: 0,
        y: 70,
        w: 25,
        h: 40,
        color: "green",
        xSpeed: 0,
        xAccel: 0,
        go: false,
        goPastState: false,
        points: 0
    }
];

// EVENT STUFF
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function keydownHandler(event) {
    if (event.code === "KeyQ") {
        player[0].go = true;
    }
    if (event.code === "KeyW") {
        player[0].go = true;
    }
    if (event.code === "KeyE") {
        player[0].go = true;
    }
    if (event.code === "KeyA") {
        player[0].go = true;
    }
    if (event.code === "KeyS") {
        player[0].go = true;
    }
    if (event.code === "KeyD") {
        player[0].go = true;
    }
    if (event.code === "KeyU") {
        player[1].go = true;
    }
    if (event.code === "KeyI") {
        player[1].go = true;
    }
    if (event.code === "KeyO") {
        player[1].go = true;
    }
    if (event.code === "KeyJ") {
        player[1].go = true;
    }
    if (event.code === "KeyK") {
        player[1].go = true;
    }
    if (event.code === "KeyL") {
        player[1].go = true;
    }
}

function keyupHandler(event) {
    if (event.code === "KeyQ") {
        player[0].go = false;
    }
    if (event.code === "KeyW") {
        player[0].go = false;
    }
    if (event.code === "KeyE") {
        player[0].go = false;
    }
    if (event.code === "KeyA") {
        player[0].go = false;
    }
    if (event.code === "KeyS") {
        player[0].go = false;
    }
    if (event.code === "KeyD") {
        player[0].go = false;
    }
    if (event.code === "KeyU") {
        player[1].go = false;
    }
    if (event.code === "KeyI") {
        player[1].go = false;
    }
    if (event.code === "KeyO") {
        player[1].go = false;
    }
    if (event.code === "KeyJ") {
        player[1].go = false;
    }
    if (event.code === "KeyK") {
        player[1].go = false;
    }
    if (event.code === "KeyL") {
        player[1].go = false;
    }
}

// Animation
requestAnimationFrame(animate);
function animate() {
    background();

    players();

    for (let i = 0; i < 1; i++) {
        console.log(player[i].go, player[i].goPastState, player[i].x);
    }

    // Request Animation Frame
    requestAnimationFrame(animate);
}

function players() {
    for (let i = 0; i < player.length; i++) {
        drawPlayers(i);
    }

    controls();
}

function drawPlayers(n) {
    ctx.fillStyle = `${player[n].color}`;
    ctx.fillRect(player[n].x, player[n].y, player[n].w, player[n].h);
}

function background() {

}

function controls() {
    for (let i = 0; i < player.length; i++) {
        if (player[i].go === true && player[i].go !== player[i].goPastState) {
            player[i].x++;
        }
        player[i].goPastState = player[i].go;
    }
}