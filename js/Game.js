class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    textSize(13);
    text("Game starts",250,100)
    player.getPlayerInfo()
    if(allPlayers !== undefined){
      var displayPosition = 130
      displayPosition = displayPosition + 20
      textSize(15);
      text(allPlayers[plr].name + ":" + allPlayers[plr].distance,120,displayPosition)
    }
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50;
      player.update()
    }
  
  }
}
