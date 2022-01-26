
// create terminal
let str = "";
let terminalIn = document.getElementById("terminal-in");
let terminalOut = document.getElementById("terminal-out");
// enable terminal input on enter key
terminal.addEventListener('keyup',  (e) => {
	if (e.key === 'Enter') {
		str = terminalIn.value;
		terminalOut.innerHTML = ">Received input:(" + str + ")";
	};
});


// enable drag + grid
$("#card").draggable({ 
  grid: [ 128,128 ],
  snapTolerance: 128,
  containment: "parent",
  scroll: true,
  refreshPositions: true,
});

$("#card2").draggable({ 
  grid: [ 128,128 ],
  snapTolerance: 50,
  containment: "parent",
  refreshPositions: true,
  scroll: true
});
$("#card3").draggable({ 
  grid: [ 128,128 ],
  snapTolerance: 50,
  containment: "parent",
  refreshPositions: true,
  scroll: true
});

// choose starting group
// shuffle deck
// each player draws 4 cards, keeping specials
// turn order
   // draw
   // income
   // 2 actions
// win if secret goal met
