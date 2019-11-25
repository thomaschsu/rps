function computerPlay() {
    const play = ['Rock', 'Paper', 'Scissors'];
    let randomNum = Math.floor(Math.random() * 3);
    return play[randomNum];
}

console.log(computerPlay());

function playRound(playerSelection, computerSelection) {

}