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

console.log(getArmorAvailability(armorsAvailable))