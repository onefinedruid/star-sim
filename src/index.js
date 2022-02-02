import { GameObjects } from './game-files/gameobjects';
import { gameloop } from './game-files/gameloop';

// FUNC

    let str = "";
    let terminalIn = document.getElementById("terminal-in");
    let terminalOut = document.getElementById("terminal-out");
    // enable terminal 
    function enableTerm() {
        terminalIn.addEventListener('keyup',  (e) => {
            if (e.key === 'Enter') {
            str = terminalIn.value;
            // get input on enter key
            terminalOut.innerHTML = str;
            };
        });
    }

    // enable drag + grid
    function enableGrid() {
    $("#card").draggable({ 
        grid: [ 64,64 ],
        snapTolerance: 64,
        containment: "#canvas",
        refreshPositions: false,
    });

    $("#card2").draggable({ 
        grid: [ 64,64 ],
        snapTolerance: 64,
        containment: "#canvas",
        refreshPositions: false,
    });
    $("#card3").draggable({ 
        grid: [ 64,64 ],
        snapTolerance: 64,
        containment: "#canvas",
        refreshPositions: false,
    });
    }

    enableTerm();
    enableGrid();


// GAME

    console.log(GameObjects.Pirates.Crew[0].name);
    gameloop();
    terminalOut.innerHTML = GameObjects.Theologians.Crew[0].name;


