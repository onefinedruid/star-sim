gsap.registerPlugin(Draggable);

Draggable.create("#card");

let str = "";

// enable terminal
document.getElementById("terminal").addEventListener("keyup", function(str) {
	if (event.keyCode === 13) {
		str = document.getElementById("terminal").value;
		document.getElementById("terminal-out").innerHTML = ">Received input:(" + str + ")";
	};
	return str;
});

if (str == "y" || str == "Y") {
	var getCard = document.getElementById("card");
	var display = getComputedStyle(getCard).display;
    if (display == "none") {
		searchbar.style.display = "block";
    } else {
        searchbar.style.display = "none";
    };
};

// choose starting group
// shuffle deck
// each player draws 4 cards, keeping specials
// turn order
   // draw
   // income
   // 2 actions
// win if secret goal met
