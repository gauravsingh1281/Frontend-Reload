const drumBtn = document.querySelectorAll(".drum");

// for btn clicks
drumBtn.forEach((element) => {
    element.addEventListener("click", function () {
        const btnClicked = this.textContent;
        makeSound(btnClicked)
        addAnimation(btnClicked);
    })
});

// for keyboard press

document.addEventListener("keydown", (event) => {
    makeSound(event.key);
    addAnimation(event.key);

})



function makeSound(key) {
    switch (key) {
        case "w":
            const tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            console.log("playing", key);
            break;
        case "a":
            const tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            console.log("playing", key);
            break;
        case "s":
            const tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            console.log("playing", key);
            break;
        case "d":
            const tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            console.log("playing", key);
            break;
        case "j":
            const crash = new Audio("./sounds/crash.mp3");
            crash.play();
            console.log("playing", key);
            break;
        case "k":
            const kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
            console.log("playing", key);
            break;
        case "l":
            const snare = new Audio("./sounds/snare.mp3");
            snare.play();
            console.log("playing", key);
            break;
        default:
            console.log(key);

    }
}

function addAnimation(pressedBtn) {
    const activeBtn = document.querySelector(`.${pressedBtn}`);
    activeBtn.classList.add("pressed");
    setTimeout(() => {
        activeBtn.classList.remove("pressed");
    }, 100)
}