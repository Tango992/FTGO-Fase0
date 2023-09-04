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

const inputCharacters = [
    {
        character: {
            name: 'Lorian',
            classType: 'Knight',
            baseDefense: 100,
            armorUsed: []
        },
        armorToEquip: ['Elven Leather', 'Chainmail']
    }
]

function getDefenseSummary(inputCharacters, armorsInArmory) {
    for (const character of inputCharacters) {
        let user = character.character
        let defense = getTotalDefense(character.character)
        return `Character ${user.name} with ${user.classType} Class has a total defense of ${defense}`
    }
    
}
console.log(getDefenseSummary(inputCharacters, armorsAvailable))

function getArmorAvailability(armors) {
    let obj = {}

    for (const armor of armorsInArmory) {
        if (armors.includes(armor)) {
            obj[armor] = true
        } else {
            obj[armor] = false
        }
    }
    return obj
}

function getTotalDefense(character) {
    let baseDefense = character.baseDefense
    let armorUsed = character.armorUsed

    for (const armor of armors) {
        for (const userArmor of armorUsed) {
            if (userArmor.includes(armor[0])) {
                baseDefense += armor[2]
            }
        }
    }
    return baseDefense
}


