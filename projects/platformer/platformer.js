$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////
       
      createPlatform(500, 300, 200, 10);//grace 
      createPlatform(400, 200, 200, 10);//above grace *no head or collectable is here
      createPlatform(200, 400, 300, 10);//kennedi
      createPlatform(400, 500, 200, 20);//database
      createPlatform(30, 300, 200, 20);//max
      createPlatform(100, 20, 200, 20);
      createPlatform(500, 60, 200, 20);
      createPlatform(200, 800, 200, 20);
      createPlatform(900, 240, 200, 20);
      createPlatform(1000, 300, 200, 20);
      createPlatform(1400, 80, 200, 20);
      createPlatform(100, 800, 200, 20);
      createPlatform(800, 700, 200, 20);
      createPlatform(650, 600, 200, 20);

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    // TODO 2
    //create collectables
    createCollectable("grace", 500, 100, 20, 0.5);
    createCollectable("database", 450, 100, 30, 0.8);
    createCollectable("kennedi", 350, 100, 30, 0.5);
    createCollectable("max", 500, 100, 100, 0.5);
    createCollectable("database", 50, 100, 30, 0.8);
    createCollectable("database", 750, 100, 30, 0.8);
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    
    //bottom cannon 
    createCannon("bottom", 450, 900);
    createCannon("bottom", 490, 900);
    createCannon("bottom", 390, 900);

    //top cannon
    createCannon("top", 600, 1000);
    createCannon("top", 650, 1000);
    createCannon("top", 540, 1000);


    //left cannon 
    createCannon("left", 500, 1000);
    createCannon("left", 550, 1000);
    createCannon("left", 90, 1000);
    createCannon("left", 50, 1000);
    
    //right cannons
    createCannon("right", 100, 1000);
    createCannon("right", 600, 1000);
    createCannon("right", 200, 1000);
    createCannon("right", 10, 1000);

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
