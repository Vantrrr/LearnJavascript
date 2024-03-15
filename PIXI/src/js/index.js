const Application = PIXI.Application;
const Assets = PIXI.Loader.shared;
const Sprite = PIXI.Sprite;
const Loader = PIXI.Loader;
const Text = PIXI.Text;

const app = new Application();
document.body.appendChild(app.view);

const loader = Loader.shared;

Assets.add('bunny', './src/img/bunny.png').load((loader, resources) => {
    const bunny = new Sprite(resources['bunny'].texture);

    bunny.anchor.set(0.5);

    bunny.x = app.screen.width / 2;
    bunny.y = app.screen.height / 2;

    app.stage.addChild(bunny);

    // Add animation loop
    app.ticker.add((delta) => {
        // Rotate the bunny sprite
        bunny.rotation += 0.1 * delta;
    });


});