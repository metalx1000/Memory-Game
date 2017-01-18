var game = new Phaser.Game(768, 540, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });
var cards=[];
var cardsv=[];

function preload() {

    //  You can fill the preloader with as many assets as your game requires
    game.load.image('cardback', 'res/cardback.png');

}

function create() {
  loadCards();
      var card = game.add.sprite(300, 300, 'cardback');
      card.inputEnable = true;
      card.events.onInputDown.add(function(){
        console.log("test");
      });

}


function loadCards(){
  //creat values for cards
  for(var i = 0;i<18;i++){
    cardsv.push(i);
  }

  var x=0;
  for(var i=0;i<6;i++){
    for(var z=0;z<3;z++){
      var card = game.add.sprite(128*i, 180*z, 'cardback');
      card.inputEnable = true;
      card.events.onInputDown.add(function(){
        console.log("test");
      });
      //console.log(cardsv[x]);
      card.value=cardsv[x];
      x++;
      cards.push(card);
    }
  }
}

function cardClicked(){
  console.log(this);
  console.log("test");
}
