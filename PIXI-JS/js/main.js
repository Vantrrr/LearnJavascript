let app, player;
let keys = {};
let keyDiv;

window.onload = function() {
    console.log(PIXI); // Kiểm tra xem đối tượng PIXI có được xác định không
    app = new PIXI.Application(
        {
            width: 800,
            height: 600,
            backgroundColor: 0xAAAAAA
        }
    );

    document.body.appendChild(app.view);
    
    // Đối tượng Player
    player = PIXI.Sprite.from("img/player.png");
    player.anchor.set(0.5);
    player.x = app.view.width / 2;
    player.y = app.view.height / 2;
    app.stage.addChild(player);
    
    
    window.addEventListener("keydown", keysDown);
    window.addEventListener("keyup", keysUp);

    // Loop trò chơi
    app.ticker.add(gameLoop);
    keyDiv = document.querySelector("#key");    
}

function keysDown(e) {
    console.log(e.keyCode);
    keys[e.keyCode] = true;
}

function keysUp(e) {
    console.log(e.keyCode);
    keys[e.keyCode] = false; 
}

function gameLoop() {
    // keyDiv.innerHTML = JSON.stringify(keys);

    if (keys[37]) { 
        player.x -= 5;
    }
    if (keys[38]) { 
        player.y -= 5;
    }
    if (keys[39]) { 
        player.x += 5;
    }
    if (keys[40]) { 
        player.y += 5;
    }
}

// function movePlayer(e) {
//     let pos = e.data.global;
//     player.x = pos.x;
//     player.y = pos.y;
// }
