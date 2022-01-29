
// create terminal
let str = "";
let terminalIn = document.getElementById("terminal-in");
let terminalOut = document.getElementById("terminal-out");
// enable terminal input on enter key
function enableTerm() {
  terminal.addEventListener('keyup',  (e) => {
    if (e.key === 'Enter') {
      str = terminalIn.value;
      terminalOut.innerHTML = ">Received input:(" + str + ")";
    };
  });
}

// enable drag + grid
function enableGrid() {
  $("#card").draggable({ 
    grid: [ 128,128 ],
    snapTolerance: 128,
    containment: "parent",
    refreshPositions: false,
  });

  $("#card2").draggable({ 
    grid: [ 128,128 ],
    snapTolerance: 128,
    containment: "parent",
    refreshPositions: false,
  });
  $("#card3").draggable({ 
    grid: [ 128,128 ],
    snapTolerance: 128,
    containment: "parent",
    refreshPositions: false,
  });
}

enableTerm();
enableGrid();

// choose starting group
// shuffle deck
// each player draws 4 cards, keeping specials
// turn order
   // draw
   // income
   // 2 actions
// win if secret goal met
