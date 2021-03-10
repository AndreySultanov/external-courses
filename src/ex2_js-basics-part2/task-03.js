function numberElement(elementArray) {
    let even = 0;
    let odd = 0;
    let nulls = 0;

    elementArray.forEach(function (element) {
        if (typeof element !== 'number' || Number.isNaN(element)) {
            return;
        }

        if (element === 0) {
            nulls += 1;
            return;
        }

        if (element % 2 === 0) {
            even += 1;
            return;
        }
        
        odd += 1;
    });

    return [even, odd, nulls];
}

module.exports = numberElement;
