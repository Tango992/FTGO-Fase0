const armorsAvailable = [
    "Dragon Scale",
    "Elven Leather",
    "Chainmail",
]

const armorsInArmory = [
    "Dragon Scale",
    "Elven Leather",
    "Chainmail",
    "Wizard Robe"
]

const armors = [
    ['Dragon Scale', 'Heavy', 50],
    ['Elven Leather', 'Light', 30],
    ['Wizard Robe', 'Cloth', 15],
    ['Chainmail', 'Medium', 40],
]

const character1 = {
    name: 'Lorian',
    classType: 'Knight',
    baseDefense: 100,
    armorUsed: ['Elven Leather', 'Chainmail']
}

function getTotalDefense(character) {
    let baseDefense = character.baseDefense
    let armorUsed = character.armorUsed
    let description = `Base defense ${baseDefense}`;

    for (const armor of armors) {
        for (const userArmor of armorUsed) {
            if (userArmor.includes(armor[0])) {
                baseDefense += armor[2]
            }
        }
    }
    return baseDefense
}
console.log(getTotalDefense(character1))

