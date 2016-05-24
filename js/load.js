Game = {};

var w = 200;// 40 x 2 x 10 (so 10 wide)
var h = 200;// 40 x 2 x 8 (so 8 tall)

Game.Boot = function (game) { };

Game.Boot.prototype = {

	preload: function () 
	{
		game.stage.backgroundColor = '#777777';

		game.load.image('loading', 'images/loading.png');
		game.load.image('loading2', 'images/loading2.png');

	},

	create: function() 
	{

		game.input.maxPointers = 1;
		
        game.stage.disableVisibilityChange = true;
		

        Phaser.ScaleManager.NO_SCALE;

      
		this.game.stage.smoothed = false;
        this.game.antialias = false;

		this.game.state.start('Load');
	},


};

Game.Load = function (game) { };

Game.Load.prototype = 
{
	preload: function () 
	{
	    var label2 = game.add.text(Math.floor(w/2)+0.5, Math.floor(h/2)-15+0.5, 'loading...', { font: '30px Arial', fill: '#fff' });
		label2.anchor.setTo(0.5, 0.5);

		preloading2 = game.add.sprite(w/2, h/2+15, 'loading2');
		preloading2.x -= preloading2.width/2;
		preloading2.alpha = 0.5;	
			
		preloading = game.add.sprite(w/2, h/2+15, 'loading');
		preloading.x -= preloading.width/2;
		game.load.setPreloadSprite(preloading);
		

		lang = "en_";

		//game.load.image('pn', 'images/pn.png');

		game.load.image('play', 'images/_en/play.png');


		game.load.image('tile0', 'images/tile0.png');
		game.load.image('tile1', 'images/tile1.png');
		game.load.image('tile2', 'images/tile2.png');
		
		game.load.image('block0', 'images/block0.png');
		game.load.image('block1', 'images/block1.png');
		game.load.image('block2', 'images/block2.png');


		game.load.image('vignette', 'images/vignette.png');
		game.load.image('mask1', 'images/maskLarge.png');

		game.load.spritesheet('mylan', 'images/mylan.png', 42,58,4);

	
	},

	create: function () 
	{
		
		
		game.state.start('Play');
		
	}
};
