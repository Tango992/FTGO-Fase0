// DERET GEOMETRI
function tentukanDeretGeometri(arr) {
    let ratio = arr[1] / arr[0];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i+1] / arr[i] != ratio) {
            return false;
        }
    }
    return true;
}
// console.log(tentukanDeretGeometri([1, 3, 9, 27, 81]));

// MENGELOMPOKKAN ANGKA
function mengelompokkanAngka(arr) {
    let even = [];
    let odd = [];
    let third = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 == 0) {
            third.push(arr[i]);
        } else if (arr[i] % 2 == 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }
    return [even, odd, third]
}
// console.log(mengelompokkanAngka([1,2,3,4,5,6,7,8,9]));

// ARRAY SITTING ARRANGEMENT
function sittingArrangement(person, column) {
    if (column < 1) {
        return "Invalid number";
    }

    let layout = []
    let kursi = [];

    while (person.length > 0) {
        for (let i = 0; i < column; i++) {
            kursi.push(person[i]);
            if (kursi[i] === undefined) {
                kursi[i] = "Kursi kosong";
            }
        }
        person = person.slice(column)
        layout.push(kursi);
        kursi = [];
    }
    return layout;
}
// console.log(sittingArrangement(['Lukman', 'Adam', 'Dimas', 'Hansin', 'Orion'], 4))

// INTERESTING LADDER ARRAY MULTIDIMENSI
function ladder(word) {
    let split = word.split('');
    let arr = [];

    for (i = 0; i < word.length; i++) {
        arr.push(split);
        split = split.slice(0, -1);
    }
    return arr;
}
// console.log(ladder('developer'));

// TARGET TERDEKAT
function targetTerdekat(arr) {
    let pX = [];
    let pY = [];
    let distance = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') {
            pX.push(i);
        } else if (arr[i] === 'o') {
            pY.push(i);
        }
    }

    if (pX.length < 1 || pY.length < 1) {
        return 0;
    } 

    for (let i = 0; i < pX.length; i++) {
        if (pX[i] > pY) {
            distance.push(pX[i] - pY);
        } else {
            distance.push(pY - pX[i]);
        }
    }
    return Math.min(...distance);
}
console.log(targetTerdekat(['x', ' ', 'o', ' ', ' ', 'x']));