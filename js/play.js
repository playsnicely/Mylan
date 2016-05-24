Game.Play = function (game) { };

var player;
var walls;

var jumpTimer = 0;
var cursors;

var mask1;


var sX = 60;
var sY = 100;

var bg;
var overlay;
var overlay2;
var bmd ;

var vignette;

Game.Play.prototype = 
{


	create: function ()
	{
		console.log("***");
		//window.moveTo(300, 300);
		//window.moveBy(100,100);
		//localStorage.setItem("someKey", "someValue");
		window.focus();

		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.world.setBounds(0, 0, 800, 640);


		var level = [
				    'xxxxxxxxxxxxxxxxxxxx',
				    'x                  x',
				    'x                  x',
				    'xxxx  xxxxx  xx  xxx',
				    'x                  x',
				    'x                  x',
				    'xxxxxx  xxxx  xxx  x',
				    'x                  x',
				    'x                  x',
				    'xxx  xxxxx  xxx  xxx',
				    'x                  x',
				    'x                  x',
				    'xxxx  xx  xxx  x  xx',
				    'x                  x',
				    'x                  x',
				    'xxxxxxxxxxxxxxxxxxxx'
				];
		bg = game.add.group();
		//bg.alpha = .5

		for (var i = 0; i < level.length; i+=2) {
	    for (var j = 0; j < level[i].length; j+=2) {

	    	var bgtile = game.add.sprite(40*j,40*i, "tile0");
	    	bg.add(bgtile);
	    }
		}

		vignette = game.add.sprite(0,0, "vignette");
		vignette.anchor.setTo(.5, .5);

		walls = game.add.group();
		overlay = game.make.bitmapData(800, 640);
		overlay2 = game.make.bitmapData(800, 640);

		var block1 = game.make.sprite(0,0, "block1");

		for (var i = 0; i < level.length; i++) {
	    for (var j = 0; j < level[i].length; j++) {


	        // Create a wall and add it to the 'walls' group
	        if (level[i][j] == 'x') 
	        {
	        
	            var wall = game.add.sprite(40*j,40*i, 'block0');
	           walls.add(wall);
	            game.physics.enable(wall, Phaser.Physics.ARCADE);
	            wall.body.immovable = true;

	           overlay.draw(block1, 40*j,40*i);
	        }
	    }
	    }

	    mask1 = game.add.sprite(1500, 0, 'mask1');
	   	mask1.anchor.setTo(.5, .5);

	    bmd = game.make.bitmapData(800, 640);
	    
	game.add.image(0, 0, overlay2)

	    player = game.add.sprite(sX, sY, 'mylan');
	    player.anchor.setTo(.5, 1);
	    game.physics.enable(player, Phaser.Physics.ARCADE);

	    player.body.collideWorldBounds = true;
	    player.body.gravity.y = 1000;
	    player.body.maxVelocity.y = 500;
	    player.body.setSize(28, 45, 0, 0);

	    player.animations.add('walk', [0, 1, 2, 3], 10, true);
	   
	    cursors = game.input.keyboard.createCursorKeys();

	    game.camera.follow(player);
	    //jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	},	

	
	update: function()
	{	    
	
		game.physics.arcade.collide(player, walls);

	    
	    player.body.velocity.x = 0;

	    if (cursors.left.isDown)
	    {
	        player.body.velocity.x = -150;

       
            player.animations.play('walk');
            player.scale.x = -1;
	           
	    }
	    else if (cursors.right.isDown)
	    {
	       player.body.velocity.x = 150;

	      
	      player.animations.play('walk');
	      player.scale.x = 1;
	       
	    }
	    else
	    {
	       
	        player.animations.stop();
	 
	    }
	    
	    if (cursors.up.isDown && ( player.body.velocity.y >= 0 && player.body.velocity.y < 10 ) && game.time.now > jumpTimer)
	    {
	        player.body.velocity.y = -500;
	        jumpTimer = game.time.now + 750;
	    }

	    var targetX =  player.body.position.x;
	    var targetY = player.body.position.y+40;

	    targetX = Math.max(targetX, 85);
	    targetX = Math.min(targetX, 700);

	    targetY = Math.max(targetY, 110);
	    targetY = Math.min(targetY, 550);

	    vignette.x = targetX;
	    vignette.y = targetY

		overlay2.cls();
		bmd.cls();

		bmd.draw(mask1, targetX, targetY,230,230,1)

		overlay2.alphaMask(bmd, overlay);
		
	},


	render: function()
	{
		window.moveTo(game.camera.position.x-sX, game.camera.position.y-sY);

		window.focus();
		
	}
};
