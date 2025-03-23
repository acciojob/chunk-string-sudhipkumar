function chunkString(str, chunkSize) {
    if (str === null) return []; // Ensure null input returns an empty array
    if (chunkSize <= 0) return []; // Ensure invalid chunk sizes return an empty array
    if (str.length <= chunkSize) return [str]; // If chunkSize is larger, return the whole string as one element

    let result = [];
    for (let i = 0; i < str.length; i += chunkSize) {
        result.push(str.substring(i, i + chunkSize));
    }
    return result;
}

// Test Cases
console.log(chunkString(null, 5)); // Expected: []
console.log(chunkString("abc", 5)); // Expected: ["abc"]
console.log(chunkString("Hello, world!", 5)); // Expected: ["Hello", ", wor", "ld!"]
console.log(chunkString("12345", 2)); // Expected: ["12", "34", "5"]
