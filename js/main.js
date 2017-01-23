var game = new Phaser.Game(768, 540, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });
var cards;
var cardsv = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
//shuffle card values
shuffle(cardsv);

function preload() {

    //  You can fill the preloader with as many assets as your game requires
    game.load.image('cardback', 'res/cardback.png');

}

function create() {
  createDeck();
}

function cardClicked(card){
  console.log(card.value);
}

function createDeck(){
  var i = 0;
  cards = game.add.group();
  cards.createMultiple(18,"cardback",[0],true);
  cards.align(6,-1,128,180);
  cards.forEach(function(c){
    c.inputEnabled = true;
    c.events.onInputDown.add(cardClicked,this);
    c.value = cardsv[i];
    i++;
  });
}

//shuffle array
function shuffle(a) {
  var j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
}
