
// TIC TAC TOE GAME
// Human player is X and computer player is O.

// Track the current player.
let activePlayer = 'X';

// Store all selected squares.
let selectedSquares = [];

// Track whether the game has finished.
let gameOver = false;

// Track whether the computer is playing.
let computerThinking = false;

// Store the computer's timer.
let computerTimer = null;

// Store the reset timer.
let resetTimer = null;

// Store the animation frame.
let animationFrame = null;

// All eight possible winning combinations.
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Remove duplicate combinations.
const winPatterns = winningCombinations.filter(
    (combination, index, array) =>
        array.findIndex(other =>
            other.join() === combination.join()
        ) === index
);

// Display a message below the heading.
function updateStatus(message) {
    document.getElementById("status").textContent = message;
}

// Place an X or O in a selected square.
function placeXOrO(squareNumber) {

    // Prevent moves after the game ends.
    if (gameOver) {
        return false;
    }

    // Prevent human clicks during the computer's turn.
    if (activePlayer === 'O' && !computerThinking) {
        return false;
    }

    // Check whether the square is already occupied.
    if (selectedSquares.some(element =>
        element.startsWith(squareNumber))) {
        return false;
    }

    // Find the HTML square.
    let select = document.getElementById(squareNumber);

    if (!select) {
        return false;
    }

    // Display an X or O image.
    if (activePlayer === 'X') {
        select.style.backgroundImage =
            "url('images/x.png')";
    } else {
        select.style.backgroundImage =
            "url('images/o.png')";
    }

    // Store the selected square and player.
    selectedSquares.push(squareNumber + activePlayer);

    // Play the placement sound.
    audio('./media/place.mp3');

    // Check whether someone has won.
    checkWinConditions();

    // Stop if the game is finished.
    if (gameOver) {
        return true;
    }

    // Switch to the next player.
    if (activePlayer === 'X') {
        activePlayer = 'O';
        updateStatus("Computer's turn...");

        // Prevent human clicks while waiting.
        disableClick();

        // Wait one second before the computer plays.
        computerTimer = setTimeout(function () {
            computersTurn();
        }, 1000);

    } else {
        activePlayer = 'X';
        updateStatus("Your turn! You are X.");
    }

    return true;
}

// Choose a random available square for the computer.
function computersTurn() {

    // Do nothing if the game has ended.
    if (gameOver || activePlayer !== 'O') {
        return;
    }

    // Store all available square numbers.
    let availableSquares = [];

    // Check all nine squares.
    for (let i = 0; i < 9; i++) {

        let square = String(i);

        // Add unoccupied squares to the array.
        if (!selectedSquares.some(element =>
            element.startsWith(square))) {

            availableSquares.push(square);
        }
    }

    // Stop if no squares remain.
    if (availableSquares.length === 0) {
        return;
    }

    // Randomly choose an available square.
    let randomIndex = Math.floor(
        Math.random() * availableSquares.length
    );

    let pickASquare = availableSquares[randomIndex];

    // Allow the computer to make its move.
    computerThinking = true;

    placeXOrO(pickASquare);

    // Computer has finished its turn.
    computerThinking = false;
}

// Check the board for winning combinations.
function checkWinConditions() {

    // Check each winning combination.
    for (let combination of winPatterns) {

        // Check whether X has all three positions.
        let xWins = combination.every(index =>
            selectedSquares.includes(index + 'X')
        );

        // Check whether O has all three positions.
        let oWins = combination.every(index =>
            selectedSquares.includes(index + 'O')
        );

        // A player has won.
        if (xWins || oWins) {

            gameOver = true;

            let winner = xWins ? 'X' : 'O';

            updateStatus(winner + " wins!");

            // Draw a line through the winning squares.
            let first = combination[0];
            let last = combination[2];

            let start = getSquareCenter(first);
            let end = getSquareCenter(last);

            drawWinLine(
                start.x, start.y,
                end.x, end.y
            );

            return;
        }
    }

    // All nine squares are filled without a winner.
    if (selectedSquares.length === 9) {

        gameOver = true;

        updateStatus("It's a tie!");

        // Play the tie sound.
        audio('./media/tie.mp3');

        // Restart after a short delay.
        resetTimer = setTimeout(function () {
            resetGame();
        }, 1500);
    }
}

// Check whether three squares belong to the same player.
function arrayIncludes(squareA, squareB, squareC) {

    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);

    return a && b && c;
}

// Calculate the center of a square on the canvas.
function getSquareCenter(index) {

    // Each row and column is one-third of the canvas.
    let column = index % 3;
    let row = Math.floor(index / 3);

    return {
        x: (column + 0.5) * (608 / 3),
        y: (row + 0.5) * (608 / 3)
    };
}

// Draw an animated line when someone wins.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {

    // Get the canvas and its drawing context.
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');

    // Store the starting and ending coordinates.
    let x1 = coordX1;
    let y1 = coordY1;
    let x2 = coordX2;
    let y2 = coordY2;

    // Track the progress of the animation.
    let progress = 0;

    // Animate the winning line.
    function animateLineDrawing() {

        // Clear the canvas before drawing.
        c.clearRect(0, 0, 608, 608);

        // Increase the animation progress.
        progress += 0.04;

        if (progress > 1) {
            progress = 1;
        }

        // Calculate the current endpoint.
        let x = x1 + (x2 - x1) * progress;
        let y = y1 + (y2 - y1) * progress;

        // Draw the line.
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, 0.8)';
        c.lineCap = 'round';
        c.stroke();

        // Continue until the line is finished.
        if (progress < 1) {
            animationFrame =
                requestAnimationFrame(animateLineDrawing);
        }
    }

    // Play the winning sound.
    audio('./media/winGame.mp3');

    // Start the animation.
    animateLineDrawing();

    // Restart the game after the winning animation.
    resetTimer = setTimeout(function () {
        resetGame();
    }, 1800);
}

// Temporarily prevent clicks during the computer's turn.
function disableClick() {

    // Disable pointer events on the game board.
    const board = document.querySelector('table');

    board.style.pointerEvents = 'none';

    // Enable clicking after one second.
    setTimeout(function () {
        board.style.pointerEvents = 'auto';
    }, 1000);
}

// Play an audio sound effect.
function audio(audioURL) {

    // Create a new audio object.
    let sound = new Audio(audioURL);

    // Play the sound, ignoring browser playback errors.
    let playback = sound.play();

    if (playback && typeof playback.catch === 'function') {
        playback.catch(function () {
            // Audio may be blocked by browser settings.
        });
    }
}

// Clear the winning line from the canvas.
function clear() {

    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');

    // Cancel any running animation.
    if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
    }

    // Clear the entire canvas.
    c.clearRect(0, 0, 608, 608);
}

// Reset the game after a win, tie, or restart.
function resetGame() {

    // Stop pending computer and reset timers.
    clearTimeout(computerTimer);
    clearTimeout(resetTimer);

    // Clear all nine squares.
    for (let i = 0; i < 9; i++) {

        let square = document.getElementById(String(i));

        square.style.backgroundImage = '';
    }

    // Clear the winning line.
    clear();

    // Empty the selected squares array.
    selectedSquares = [];

    // Reset the game variables.
    activePlayer = 'X';
    gameOver = false;
    computerThinking = false;

    // Re-enable clicking.
    document.querySelector('table').style.pointerEvents = 'auto';

    // Display the starting message.
    updateStatus("Your turn! You are X.");
}
