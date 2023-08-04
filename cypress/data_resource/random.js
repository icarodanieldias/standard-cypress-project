const Random = {
    getOneIn, 
    generateList,
    generateRandomDigitsList
};

function getOneIn(list) {
    let index = Math.floor(Math.random() * list.length);
    return list[index];
};

function generateList(start = 0, final = 9) {
    let list = [];

    while (start <= final) {
        list.push(start);
        start ++;
    }

    return list;
};

function generateRandomDigitsList(length) {
    let list = [];

    let count = 0;
    while (count < length) {
        const digit = Math.floor(Math.random() * 10)
        list.push(digit)
        count ++;
    }

    return list; 
}



export { Random }
