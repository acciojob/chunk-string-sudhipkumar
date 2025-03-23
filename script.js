function chunkString(str, chunkSize) {
    if (str === null || str === undefined) return []; // Handle null/undefined input
    if (chunkSize <= 0) return []; // Handle invalid chunk sizes

    let result = [];
    for (let i = 0; i < str.length; i += chunkSize) {
        result.push(str.substring(i, i + chunkSize));
    }
    return result;
}

// Get user input
let inputString = prompt("Enter a string:");
let chunkSize = parseInt(prompt("Enter chunk size:"), 10);

if (isNaN(chunkSize) || chunkSize <= 0) {
    alert("Invalid chunk size! Please enter a positive number.");
} else {
    let chunks = chunkString(inputString, chunkSize);
    alert("Chunked Array: " + JSON.stringify(chunks));
}
