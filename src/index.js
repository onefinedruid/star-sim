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
        $('#card,#card2,#card3,#card4,#card5,#card6').each(function(){
            $(this).draggable({ 
                grid: [ 64,64 ],
                snapTolerance: 64,
                containment: "parent",
                refreshPositions: false,
            })
            $('#card').position({
                my: "center bottom-2",
                at: "center bottom-2",
                of: "#playerbox1"
            })
        
            $('#card2').position({
                my: "center bottom-2",
                at: "center-95 bottom-2",
                of: "#playerbox1"
            })
            $('#card3').position({
                my: "center bottom-2",
                at: "center+128 bottom-2",
                of: "#playerbox1"
            })
            $('#card4').position({
                my: "center top+2",
                at: "center top+2",
                of: "#playerbox2"
            })
            $('#card5').position({
                my: "center top+2",
                at: "center-96 top+2",
                of: "#playerbox2"
            })
            $('#card6').position({
                my: "center top+2",
                at: "center+96 top+2",
                of: "#playerbox2"
            })
        })
    };

    function enableTooltip() {
        let highPriest = GameObjects.Theologians.Crew[0];
        let card1 = document.querySelector('#card');
        card1.dataset.tooltip = "<span class=\"pink\">" + 
            highPriest.rank + "</span>\n" +
            "Strength: " + highPriest.strength + "\n" +
            "Influence: " + highPriest.influence + "\n" +
            "Diplomacy: "  + highPriest.diplomacy + "\n" +
            "Artifacts: " + highPriest.artifacts + "\n" +
            "Research: " + highPriest.research + "\n" +
            "Arsenal: " + highPriest.arsenal + "\n" +
            "Wealth: " + highPriest.wealth + "g" + "\n" + 
            "<span class=\"red\">Goal: " + highPriest.goal + " Artifacts</span>";
        
        let wayBook = GameObjects.Theologians.Items[0];
        let card2 = document.querySelector('#card2');
        card2.dataset.tooltip = "<span class=\"pink\">" + 
            wayBook.type + "\n" +
            wayBook.name + "</span>\n" +
            wayBook.text + "\n" +
            "Sacred" + "\n" +
            "Value: " + wayBook.value + "g\n" +
            "<span class=\"red\">Special: " + wayBook.special + "</span>";

        $('#card,#card2,#card3,#card4,#card5,#card6').each(function(){
            $('#card,#card2').tooltip({
                items: "[data-tooltip]",
                classes: {
                    "ui-tooltip":"tooltip"
                },
                content: function(){
                    return $(this).data("tooltip");
                }
            })
        })
    }
    
    enableTooltip();
    enableTerm();
    enableGrid();

    

// GAME

    console.log(GameObjects.Pirates.Crew[0].name);
    gameloop();
    terminalOut.innerHTML = GameObjects.Theologians.Crew[0].name + ", " + GameObjects.Theologians.Crew[0].artifacts + "/" + GameObjects.Theologians.Crew[0].goal + " Artifacts";

