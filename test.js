console.log("Running simple test...);

function add(a, b) {
    return a + b; // BUG: Should be a + b
}

const result = add(2, 2);

if (result !== 4) {
    console.error(`Test Failed: Expected 4, got ${result}`);
    process.exit(1);
}

console.log("Test Passed!);

require('./frick.js');