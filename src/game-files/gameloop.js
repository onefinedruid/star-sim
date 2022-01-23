
let str = "";
let terminalIn = document.getElementById("terminal-in");
let terminalOut = document.getElementById("terminal-out");
// enable terminal
terminal.addEventListener('keyup',  (e) => {
	if (e.key === 'Enter') {
		str = terminalIn.value;
		terminalOut.innerHTML = ">Received input:(" + str + ")";
	};
});

function enableSnap() {
  $("#card").draggable({ 
      grid: [ 133,134 ],
      snapTolerance: 50,
      containment: "parent",
      refreshPositions: true,
      scroll: true
    });
};

enableSnap();
/* if (str == "y" || str == "Y") {
	var getCard = document.getElementById("card");
	var display = getComputedStyle(getCard).display;
    if (display == "none") {
		searchbar.style.display = "block";
    } else {
        searchbar.style.display = "none";
    };
}; */

// choose starting group
// shuffle deck
// each player draws 4 cards, keeping specials
// turn order
   // draw
   // income
   // 2 actions
// win if secret goal met
