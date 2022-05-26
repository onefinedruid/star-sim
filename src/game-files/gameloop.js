// 1. choose starting base
// 2. objects begin to enter the uncontrolled lane
// 3. player turn 
//    ) player may attempt to control 
//      - an uncontrolled object
//      - a controlled object
//    ) if controlled, player will place the object in their base
//    
//
// 5. win if secret goal met (casual) or other player's base destroyed (pvp)

function gameloop() {
  let obj = {
    msg : "Start!"
  };
  
  console.log(obj.msg);
}

export { gameloop }
