function calcWordFrequencies() {
    const input = prompt("Enter a list of words (separated by spaces):");

    // Use a map to store word frequencies
    const wordMap = new Map();

    // Split the input into an array of words
    const words = input.split(' ');

    // Count the frequency of each word
    words.forEach(word => {
        const lowerCaseWord = word.toLowerCase();
        const count = wordMap.has(lowerCaseWord) ? wordMap.get(lowerCaseWord) + 1 : 1;
        wordMap.set(lowerCaseWord, count);
    });

    // Output the word frequencies to the console
    wordMap.forEach((count, word) => {
        console.log(`${word} ${count}`);
    });
}

// Example: Call calcWordFrequencies from the JavaScript console
calcWordFrequencies();
