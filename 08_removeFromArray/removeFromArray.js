const removeFromArray = function(arr, item_to_remove) {
    const newArray = Array.from(arr);
    let item_index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item_to_remove) {
            item_index = i;
        }
    }
    const sliceArr = [...newArray.slice(0, item_index),
                      ...newArray.slice(item_index+1)];

    return sliceArr;
};

console.log(removeFromArray([1, 2, 4, 5, 8, 10], 8));
// Do not edit below this line
module.exports = removeFromArray;
