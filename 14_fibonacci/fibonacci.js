const fibonacci = function(num) {
    const sequence = [];
    const fibStart = 1;
    let count;
    
    // Check the type of input 
    if (typeof num !== 'number') {
        count = parseInt(num);
    }
    else {
        count = num;
    }

    // Skip 0th position of the fibonacci array
    if (count === 0) {
        return 0;
    }
    if (count < 0) {
        return 'OOPS';
    }

    for (let i = 0; i < count; i++) {
        // If the array length is less than 2, push 1 inside.
        if (sequence.length < 2) {
            const fibTotal = fibStart; 
            sequence.push(fibTotal);
        }
    
        else {
            const fibTotal = sequence[i - 1] + sequence[i - 2];
            sequence.push(fibTotal);
        }
        
    }

    return sequence.at(-1);
};

//fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
