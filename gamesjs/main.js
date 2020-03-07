//  Declaring Needed Variable
let titleImages = [];
let arrayOfTile = [];
let startButton = document.getElementById('start');
let gamePlay = false;
let gameBoard = document.getElementById('game-board');


// Shuffling Function
const shuffleArray = array => {
    for (let x = array.length - 1; x > 0; x--) {
        let valueHolder = Math.floor(Math.random() * (x + 1));
        let itemValue = array[x]
        array[x] = array[valueHolder];
        array[valueHolder] = itemValue;
    }
    return array;
}

//Dynamically Adding Images 
const dynamicImageAdding = () => {
        for (let x = 1; x < 7; x++) {
            titleImages.push(x + '.jpg');
        }
    }
    // Buidld Board Function
const buildBoard = () => {
        let html = "";
        for (let x = 0; x <= (arrayOfTile.length - 1); x++) {
            html += '<div class="game-tile">';
            html += '<img id="cards' + x + '" src="/images/back.jpg" onclick="pickCard(' + x + ')" class="flipImage"></div>';
        }
        gameBoard.html
    }
    // Declaring a Function to Start Game
const startGame = () => {
    startButton.style.display = 'none';
    if (!gamePlay) {
        gamePlay = true;
        dynamicImageAdding();
        arrayOfTile = titleImages.concat(titleImages);
        shuffleArray(arrayOfTile);
        console.log(arrayOfTile);
    }

}



// Adding Up Event Listener
startButton.addEventListener('click', startGame);