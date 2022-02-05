let GameObjects = {
        Pirates : {
            Crew : {
                0: {
                    name: "Golong, The Pirate King",
                    text: "",
                    strength: 45, // 100
                    influence: 61, // 100
                    arsenal: 30, // infinite
                    research: 0, // 100
                    artifacts: 0, // infinite
                    diplomacy: 0, // 100
                    salary: 100000, // infinite
                    goal: 500000 // (salary)
                },
            },
        },
        Military : {
            Crew : {
                0 : {
                    name: "General M. Thaxxlos",
                    text: "",
                    strength: 79, // 100
                    influence: 66, // 100
                    research: 25, // 100
                    artifacts: 0, // infinite
                    diplomacy: 10, // 100
                    salary: 75000, // infinite
                    arsenal: 60, // infinite
                    goal: 300 // (arsenal)
                },
                1 : {
                    name: "Maj. O. Ulysses",
                    text: "",
                    strength: 67, // 100
                    influence: 37, // 100
                    special: "+27 ars",
                    salary: 63000
                }
            }
        },
        Scientists : {
            Crew : {
                0 : {
                    name: "Dr. Lora Basoul",
                    text: "",
                    strength: 64, // 100
                    influence: 51, // 100
                    artifacts: 1, // infinite
                    diplomacy: 15, // 100
                    salary: 55000, // infinite
                    arsenal: 0, // infinite  
                    research: 20, // 100
                    goal: 100 // (research)
                }
            },
            Lifeforms : {
                0 : {
                    name: "Xollox",
                    text: "A friendly, shapeshifting, mammalian-like\ncreature from Alpha Centauri.",
                    type: ["Creature","Lifeform"],
                    pet: true,
                    special: "+12 inf, +25 res"
                }
            }
        },
        Theologians : {
            Crew : {
                0 : {
                    rank: "High Priest",
                    name: "X. Abbegurion",
                    text: "",
                    strength: 33, // 100
                    influence: 59, // 100
                    diplomacy: 15, // 100
                    artifacts: 2, // infinite
                    salary: 23000, // infinite
                    arsenal: 0, // infinite
                    research: 5, // 100
                    goal: 10
                }
            },
            Items : {
                0 : {
                    name: "The Way: Becoming the Universe",
                    type: ["Artifact","Sacred"],
                    text: "This ancient book contains insightful\nand sacred knowledge.",
                    special: "+20 inf, +2 sac",
                    value: 500
                },
                1 : {
                    name: "Nebulous Orb",
                    type: "Artifact",
                    research: 5,
                    text: "A cloud of space dust suspended by gravity. It can be used for divination.",
                    value: 150,
                    special: "+5 inf"
                }
            }
        },
        Diplomats : {
            Crew : {
                0 : {
                    name: "President W. Halcourt",
                    text: "",
                    strength: 65, // 100
                    influence: 86, // 100
                    diplomacy: 20, // 100
                    artifacts: 0, // infinite
                    salary: 86000, // infinite
                    arsenal: 0, // infinite
                    research: 0, // 100 
                    goal: 100 // (diplomacy)
                }
            }
        }

    };

    export { GameObjects };
