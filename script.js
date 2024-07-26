function stringChop(str, size) {
    if (size <= 0) return []; // Handle cases where size is 0 or negative

    let chunks = [];
    for (let i = 0; i < str.length; i += size) {
        chunks.push(str.slice(i, i + size));
    }
    return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10); // Ensure the size is an integer
alert(JSON.stringify(stringChop(str, size)));
