var game = new Phaser.Game(w, h, Phaser.CANVAS, 'gameContainer');

game.state.add('Boot', 			Game.Boot);
game.state.add('Load', 			Game.Load);
game.state.add('Play', 			Game.Play);

game.state.start('Boot');