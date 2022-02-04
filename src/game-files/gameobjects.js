let GameObjects = {
        Pirates : {
            Crew : {
                0: {
                    name: "Golong, The Pirate King",
                    text: "",
                    strength: 66, // 100
                    influence: 12, // 100
                    arsenal: 30, // infinite
                    research: 0, // 100
                    artifacts: 0, // infinite
                    diplomacy: 0, // 100
                    wealth: 100000, // infinite
                    goal: 500000 // (wealth)
                },
            },
        },
        Military : {
            Crew : {
                0 : {
                    name: "General M. Thaxxlos",
                    text: "",
                    strength: 86, // 100
                    influence: 18, // 100
                    research: 25, // 100
                    artifacts: 0, // infinite
                    diplomacy: 10, // 100
                    wealth: 75000, // infinite
                    arsenal: 60, // infinite
                    goal: 300 // (arsenal)
                },
                1 : {

                }
            }
        },
        Scientists : {
            Crew : {
                0 : {
                    name: "Dr. Lora Basoul",
                    text: "",
                    strength: 47, // 100
                    influence: 25, // 100
                    artifacts: 1, // infinite
                    diplomacy: 15, // 100
                    wealth: 55000, // infinite
                    arsenal: 0, // infinite  
                    research: 20, // 100
                    goal: 100 // (research)
                }
            },
            Lifeforms : {
                0 : {
                    
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
                    influence: 39, // 100
                    diplomacy: 15, // 100
                    artifacts: 2, // infinite
                    wealth: 23000, // infinite
                    arsenal: 0, // infinite
                    research: 5, // 100
                    goal: 10
                }
            },
            Items : {
                0 : {
                    name: "The Way: Becoming the Universe",
                    type: "Artifact",
                    sacred: true,
                    text: "This ancient book contains insightful\nand sacred knowledge.",
                    special: "+5 inf, +2 sacred",
                    value: 500
                },
                1 : {
                    name: "Nebulous Orb",
                    type: "Artifact",
                    sacred: false,
                    research: 5,
                    text: "A cloud of space dust suspended by gravity. It can be used for divination.",
                    value: 150,
                }
            }
        },
        Diplomats : {
            Crew : {
                0 : {
                    name: "President W. Halcourt",
                    text: "",
                    strength: 49, // 100
                    influence: 47, // 100
                    diplomacy: 20, // 100
                    artifacts: 0, // infinite
                    wealth: 86000, // infinite
                    arsenal: 0, // infinite
                    research: 0, // 100 
                    goal: 100 // (diplomacy)
                }
            }
        }

    };

    export { GameObjects };
