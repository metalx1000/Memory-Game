var game = new Phaser.Game(640, 540, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    //  You can fill the preloader with as many assets as your game requires
    game.load.image('cardback', 'res/cardback.png');

}

function create() {

    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen
    for(i=0;i<5;i++){
      for(z=0;z<3;z++){
        game.add.sprite(128*i, 180*z, 'cardback');
      }
    }

}

