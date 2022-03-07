window.addEventListener('load', init);

//Global variables
let imageList = ['red', 'purple', 'green', 'impostor'];
let playfield;
/**
 * Initialize after the DOM is ready
 */
function init()
{
playfield = document.getElementById("playing-field");
imageList = shuffleArray(imageList);
createPlayField();
}
console.log(playfield);

/**
 * Generate the playing field dynamically with all the available images
 */
function createPlayField()
{
  for (let i = 0; i < imageList.length; i++) {
    let div = document.createElement('div');
    div.classList.add('playing-card');

    let number = document.createElement('h2');
    number.innerHTML = `${i}.`;
    div.appendChild(number)

    let image = document.createElement('img');
    image.src = `img/${imageList[i]}.png`;
    div.appendChild(image)

    playfield.appendChild(div);
  }

}

/**
 * Show the card by its front so the player knows whats going on
 *
 * @param e
 */
function playingFieldClickHandler(e)
{

}

/**
 * Handler for when the form is submitted
 *
 * @param e
 */
function formSubmitHandler(e)
{

}

/**
 * Write text for the user as feedback of their answer
 *
 * @param text
 */
function writeFeedbackMessage(text)
{

}

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 * @link http://stackoverflow.com/a/12646864
 *
 * @param array
 * @returns {*}
 */
function shuffleArray(array)
{
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
