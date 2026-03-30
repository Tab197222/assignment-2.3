function playGame() {

    // Get the player's name from the input box
    let playerName = document.getElementById("playerName").value;

    // Generate a random number between 1 and 6
    let diceRoll = Math.floor(Math.random() * 6) + 1;

    // Convert the number to a string using the second function
    let rollWord = convertRoll(diceRoll);

    // Find the div where we will show the first message
    let outputHTML = `<p>${playerName} rolled a ${diceRoll} (${rollWord})!</p>`;

    // Create a message depending on the roll
    let message = "";
    if (diceRoll >= 5) {
        message = playerName + ", you rolled a " + rollWord + " and WON GOLD!";
    } else {
        message = playerName + ", you rolled a " + rollWord + " and lost. Try again!";
    }

    // Write the final results to the page using innerHTML
    // (Comments must be OUTSIDE the template literal)
    document.getElementById("output").innerHTML = `
    <h2>Results</h2>
    ${outputHTML}
    <p>${message}</p>
    `;
}


// Converts a number to a string (required second function)
function convertRoll(number) {
    return number.toString();
}