const crafting = {
    heatsink: {
        max: 150, // max synths per item due to material capacity limit
        materials:
        [
            { quantity: 2, material: "Basic Conductors" },
            { quantity: 2, material: "Heat Conduction Wiring" }
        ]
    },
    flak: {
        max: 75,
        materials:
        [
            { quantity: 2, material: "Sulphur" },
            { quantity: 3, material: "Carbon" },
            { quantity: 4, material: "Nickel" }
        ]
    },
    gauss: {
        max: 75,
        materials:
        [
            { quantity: 2, material: "Focus Crystals" },
            { quantity: 2, material: "Guardian Power Conduit" },
            { quantity: 3, material: "Manganese" },
            { quantity: 4, material: "Guardian Wreckage Components" }
        ],
    },
    gaussPrem: {
        max: 20,
        materials:
        [
            { quantity: 6, material: "Filament Composites" },
            { quantity: 6, material: "Guardian Technology Components" },
            { quantity: 8, material: "Manganese" },
            { quantity: 10, material: "Focus Crystals" }
        ]
    },
    shard: {
        max: 60,
        materials:
        [
            { quantity: 3, material: "Carbon" },
            { quantity: 2, material: "Vanadium" },
            { quantity: 3, material: "Crystal Shards" },
            { quantity: 3, material: "Guardian Power Cell" },
            { quantity: 5, material: "Guardian Wreckage Components" }
        ]
    },
    shardPrem: {
        max: 37,
        materials:
        [
            { quantity: 8, material: "Carbon" },
            { quantity: 4, material: "Vanadium" },
            { quantity: 8, material: "Crystal Shards" },
            { quantity: 6, material: "Guardian Power Cell" }
        ]
    },
    limpets: {
        max: 30,
        materials:
        [
            { quantity: 10, material: "Iron" },
            { quantity: 10, material: "Nickel" }
        ]
    },
    afm: {
        max: 83,
        materials:
        [
            { quantity: 2, material: "Nickel" },
            { quantity: 2, material: "Zinc" },
            { quantity: 2, material: "Chromium" },
            { quantity: 3, material: "Vanadium" }
        ]
    },
    lifeSupport: {
        max: 150,
        materials:
        [
            { quantity: 2, material: "Iron" },
            { quantity: 1, material: "Nickel"}
        ]
    }
};
