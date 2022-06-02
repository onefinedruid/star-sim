let GameObjects = {
        Diplomats : {
            Crew : {
                0 : {
                    title: "President",
                    name: "William Halcourt",
                    text: "",
                    strength: 65, // 100
                    influence: 45, // 100
                    diplomacy: 100, // 100
                    salary: 86, // 100
                    arsenal: 0, // 100
                    research: 0, // 100 
                    goal: 1000 // (diplomacy)
                },
                1 : {
                    title: "Vice President", 
                    name: "James Hilliard",
                    text: "",
                    strength: 0, // 100
                    influence: 0, // 100
                    diplomacy: 0, // 100
                    salary: 68, // 100
                },
                2 : {

                },
                3 : {

                },
                4 : {

                }
            },
            Contracts : {
            0 : {

            }
            }
        },
        Military : {
            Crew : {
                0 : {
                    title: "General", 
                    name: "Moses Thaxos",
                    text: "",
                    strength: 79, // 100
                    influence: 66, // 100
                    research: 25, // 100
                    diplomacy: 39, // 100
                    salary: 75, // 100
                    arsenal: 100, // 100
                    goal: 1000 // (arsenal)
                },
                1 : {
                    title: "Major",
                    name: "Odin Ulysses",
                    text: "",
                    strength: 67, // 100
                    influence: 37, // 100
                    arsenal: 47, // 100
                    salary: 63 // 100
                },
                2 : {

                },
                3 : {

                },
                4 : {

                }
            },
            Arsenal : {
                0 : {
                    name: "Sentry Stunner",
                    text: "",
                    strength: 100,
                    arsenal: 50,
                    value: 50
                },
                1 : {
                    name: "Sentry Stunner",
                    text: "",
                    strength: 100,
                    arsenal: 50,
                    value: 50
                }
            }
        },
        Scientists : {
            Crew : {
                0 : {
                    title: "Dr.",
                    name: "Lora Basoul",
                    text: "",
                    strength: 65, // 100
                    influence: 51, // 100
                    diplomacy: 79, // 100
                    salary: 55, // 100
                    arsenal: 0, // 100  
                    research: 100, // 100
                    goal: 1000 // (research)
                },
                1 : {
                    title: "Dr.",
                    name: "John Sirius",
                    text: "",
                    strength: 0, // 100
                    influence: 0, // 100
                    diplomacy: 0, // 100
                    salary: 51, // 100
                    research: 0, // 100
                },
                2 : {

                },
                3 : {
                    
                },
                4 : {

                }
            },
            Lifeforms : {
                0 : {
                    name: "Xollox",
                    text: "A friendly, shapeshifting, mammalian-like\ncreature from Alpha Centauri.",
                    type: ["Creature","Lifeform"],
                    pet: true,
                    research: 250,
                    influence: 150
                },
                1 : {
                    name: "B.H.U.",
                    text: "This 'Biotech Humanoid Unit' is friendly,\nand contains a vast database of universal knowledge.",
                    type: ["Robotic","Lifeform"],
                    research: 150, 
                    influence: 150
                }
            }
        },
        Theologians : {
            Crew : {
                0 : {
                    title: "Pope",
                    name: "Xybul Abbegurion",
                    text: "",
                    strength: 54, // 100
                    influence: 100, // 100
                    diplomacy: 65, // 100
                    salary: 23, // 100
                    arsenal: 0, // 100
                    research: 5, // 100
                    goal: 1000 // (influence)
                },
                1 : {
                    title: "High Priest",
                    name: "Victavius Keuldro",
                    text: "",
                    strength: 0, // 100
                    influence: 0, // 100
                    diplomacy: 0, // 100
                    salary: 17, // 100
                    research: 0, // 100
                },
                2 : {

                },
                3 : {

                },
                4 : {

                }
            },
            Artifacts : {
                0 : {
                    name: "The Way: Becoming the Universe",
                    type: ["Artifact","Sacred"],
                    text: "This ancient book contains insightful\nand sacred knowledge.",
                    influence: 200,
                    value: 500
                },
                1 : {
                    name: "Nebulous Orb",
                    type: "Artifact",
                    text: "A cloud of space dust suspended by gravity.\nIt can be used for divination.",
                    value: 150,
                    influence: 50
                },
                2 : {
                    name: "Obscurium Amulet",
                    type: ["Artifact", "Sacred"],
                    influence: 100,
                    value: 900
                }
            }
        },
        Pirates : {
            Crew : {
                0 : {
                    title: "The Pirate King",
                    name: "Golong",
                    text: "",
                    strength: 45, // 100
                    influence: 61, // 100
                    arsenal: 30, // 100
                    research: 0, // 100
                    diplomacy: 0, // 100
                    salary: 100, // 100
                    goal: 5000 // (value)
                },
                1 : {
                    title: "The Master Thief",
                    name: "Jevar",
                    text: "",
                    strength: 37, // 100
                    influence: 52, // 100
                    arsenal: 25, // 100
                    salary: 79, // 100
                },
                2 : {
                    name: ""
                },
                3 : {
                    name: ""
                },
                4 : {
                    name: ""
                },
            },
            Treasure : {
                0 : {
                    name: "Goldite Nugget",
                    value: 50
                },
                1 : {
                    name: "Gold Nugget",
                    value: 100
                },
                2 : {
                    name: "Gold Core",
                    value: 175
                },
                3 : {
                    name: "Diamond (Cut)",
                    value: 250
                },
                4 : {
                    name: "Diamond Chunk",
                    value: 500
                },
                5 : {
                    name: "Ruby (Cut)",
                    value: 450
                },
                6 : {
                    name: "Ruby Chunk",
                    value: 700
                },
                7 : {
                    name: "Platinum Cube",
                    value: 650
                },
                8 : {
                    name: "Platinum Ingot",
                    value: 1300
                },
                9 : {
                    name: "Rhodium Cube",
                    value: 850
                },
                10 : {
                    name: "Rhodium Ingot",
                    value: 1700
                },
                11 : {
                    name: "Gold Deposit",
                    value: 500
                },
                12 : {
                    name: "Platinum Deposit",
                    value: 2000
                },
                13 : {
                    name: "Lithium Deposit",
                    value: 900,
                    special: "+50 res"
                },
                14 : {
                    name: "Obscurium Deposit",
                    value: 1500,
                    special: "+75 inf"
                }
            }
        },  
}


export { GameObjects };
