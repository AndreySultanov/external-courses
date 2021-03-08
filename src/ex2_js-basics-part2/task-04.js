function isSameElements (array) {
    const etalon = array[0];
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] !== etalon) {
            return false;
        }
    }

    return true;
}

module.exports = isSameElements;