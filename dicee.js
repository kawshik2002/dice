let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let heading = document.querySelector("h1");
let button = document.querySelector(".btn");
button.addEventListener("click", function () {
    let audio = new Audio("move.wav");
    audio.play();
})
// var src1 = "dice";
function randgen() {
    var rand = Math.floor(Math.random() * 6) + 1;
    var rand2 = Math.floor(Math.random() * 6) + 1;
    if (rand > rand2) {
        heading.innerText = "Player 1 wins";
        heading.classList.remove("h1loss", "h1tie");
        heading.classList.add("h1win");
    }
    else if (rand < rand2) {
        heading.innerText = "Player 2 wins";
        heading.classList.remove("h1win", "h1tie");
        heading.classList.add("h1loss");
    } else if (rand === rand2) {
        heading.innerText = "Game tie!!!";
        heading.classList.remove("h1loss", "h1win");
        heading.classList.add("h1tie");
    }
    img1.src = `dice${rand}.png`
    img2.src = `dice${rand2}.png`

}
