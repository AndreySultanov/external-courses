function printArray (arr) {
    arr.forEach(function (item) {
        console.log(item);
    });

    console.log(arr.length);

    return;    
}

module.exports = printArray;