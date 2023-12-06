let randomNum = Math.floor(Math.random() * 21);
let totalGuess = 0;
function main() {
    let guess =  prompt("enter a number between 0 to 20");
    console.log(guess);

    if (totalGuess<=10) {
        if (guess == randomNum) {
            console.log("Congragulations u guessed it in :"+ totalGuess);
        } else {
            totalGuess = totalGuess +1;
            console.log("guess remaining : "+ (10-totalGuess));
            main()
        }
    } else {
        console.log("No more guess remaining");
    }
   
}
main();
