// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
let background = document.getElementById("runFast-background-img");
cnv.width = 1265;
cnv.height = 120;

player = [
    {
        x: 0,
        y: 65,
        w: 15,
        h: 30,
        color: "blue",
        xSpeed: 0,
        xAccel: 0,
        go: false,
        goPastState: false,
        points: 0
    },
    {
        x: 0,
        y: 75,
        w: 15,
        h: 30,
        color: "green",
        xSpeed: 0,
        xAccel: 0,
        go: false,
        goPastState: false,
        points: 0
    }
];

let raceTimer = 0;
let winner = 0;

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
    drawBackground();
    players();
    drawForeground();

    for (let i = 0; i < 1; i++) {
        console.log(player[i].xAccel);
    }

    // Request Animation Frame
    requestAnimationFrame(animate);
}

function players() {
    for (let i = 0; i < player.length; i++) {
        drawPlayers(i);
        if (raceTimer >= 180) {
            controls(i);
        }
    }
}

function drawPlayers(n) {
    ctx.fillStyle = `${player[n].color}`;
    ctx.fillRect(player[n].x, player[n].y, player[n].w, player[n].h);
}

function drawForeground() {
    raceTimer++;

    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, 1000, cnv.height - 2);

    ctx.fillStyle = "red";
    ctx.fillRect(900, 40, 30, 20);

    ctx.fillStyle = "black";
    ctx.fillRect(900, 40, 5, 50);

    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(text(), 300, 50);

    ctx.font = "30px Arial";
    ctx.lineWidth = 1;
    ctx.strokeStyle = "yellow";
    ctx.strokeText(text(), 303, 53);


}

function drawBackground() {
  ctx.drawImage(background, 0, 0, 1000, cnv.height);

  ctx.fillStyle = `black`;
  ctx.fillRect(1000, 0, 1265, 120);
}

function controls(n) {
    // Moving
    if (player[n].go === true && player[n].go !== player[n].goPastState) {
        player[n].xAccel += 0.0015;
    }
    if (player[n].xSpeed <= 0 && player[n].xAccel <= 0) {
        player[n].xSpeed = 0;
        player[n].xAccel = 0;
    } else {
        player[n].xAccel -= 0.00015;
    }
    player[n].xSpeed += player[n].xAccel;
    player[n].x += player[n].xSpeed;
    player[n].goPastState = player[n].go;

    // Deciding Winner
}

function text() {
    if (raceTimer <= 60) {
        return "Ready . . .";
    } else if (raceTimer <= 120) {
        return "Set . . .";
    } else if (raceTimer <= 180) {
        return "Go!";
    } else {
        return "";
    }
}