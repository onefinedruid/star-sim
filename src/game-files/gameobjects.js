let GameObjects = {
        Diplomats : {
            Crew : {
                0 : {
                    name: "President W. Halcourt",
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
                    name: "Vice President ",
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
                    name: "General M. Thaxxlos",
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
                    name: "Major O. Ulysses",
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

                }
            }
        },
        Scientists : {
            Crew : {
                0 : {
                    name: "Dr. Lora Basoul",
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
                    name: "Dr. ",
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
                    special: "+250 res"
                },
                1 : {
                    name: "B.H.U.",
                    text: "This 'Biotech Humanoid Unit' is friendly,\nand contains a vast database of universal knowledge.",
                    type: ["Robotic","Lifeform"],
                    special: "+150 inf, +150 res"
                }
            }
        },
        Theologians : {
            Crew : {
                0 : {
                    name: "Pope X. Abbegurion",
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
                    name: "High Priest ",
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
                    special: "+200 inf",
                    value: 500
                },
                1 : {
                    name: "Nebulous Orb",
                    type: "Artifact",
                    text: "A cloud of space dust suspended by gravity.\nIt can be used for divination.",
                    value: 150,
                    special: "+50 inf"
                },
                2 : {
                    name: "Obscurium Amulet",
                    type: ["Artifact", "Sacred"],
                    special: "+100 inf",
                    value: 900
                }
            }
        },
        Pirates : {
            Crew : {
                0 : {
                    name: "Golong the Pirate King",
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
                    name: "Jevar the Master Thief",
                    text: "",
                    strength: 37, // 100
                    influence: 52, // 100
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
