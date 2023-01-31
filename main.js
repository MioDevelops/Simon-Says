var game = null;
var clicks = 0;
var gameRunning = null;
var buttonClicked = null;

const timer = ms => new Promise(res => setTimeout(res, ms))

function handleClick(data) {
    console.log(game.getColor(true), clicks)

    console.log(game.getColor(false, clicks))
    if(game.getColor(false, clicks) === data.id.toString() && !gameRunning && !buttonClicked) {
        buttonClicked = true
        var bg = document.getElementById(data.id).style.backgroundColor
        document.getElementById(data.id).style.backgroundColor = data.id === "green" ? "limegreen" : data.id;
        
        console.log(bg)
        setTimeout(() => {
            document.getElementById(data.id).style.backgroundColor = bg.toString();
            buttonClicked = false
        }, 1250)
    } else if (game.getColor(false, clicks) != data.id){
        game.text.innerText = "You lost, you can try again by pressing the start button"
        game.reset()
        clicks = 0;
        return;
    }

    clicks++
    if(clicks == game.getColor(true).length) {
        setTimeout(() => {
            game.generateNewColor();
        }, 1300)
        clicks = 0;
    }
}

function start() {
    if(gameRunning) return;
    window.game = new Game();
    game.generateNewColor();
}


function redirect(page) {
    if(confirm("This website is trying to redirect you, do you wish to continue?")) {
        window.location = page;
    }
}

function change_page(page_to) {
    const pages = document.getElementsByClassName("page");
    for(let i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }
    document.getElementsByClassName(page_to)[0].style.display = "initial";
}

class Game {
    constructor() {
        this.colors = [];
        this.text = document.getElementById("game_text");
    }

    generateNewColor() {
        var number = Math.floor(Math.random() * 100);
        if(number <= 25) {
            this.colors.push("green")
        } else if(number > 25 && number <= 50) {
            this.colors.push("red")
        } else if(number > 50 && number <= 75) {
            this.colors.push("orange")
        } else {
            this.colors.push("blue")
        }

        console.log(game.colors)
        this.start()
    }

    async start() {
        window.gameRunning = true;
        this.text.innerText = "";
        
        for(var i = 0; i < this.colors.length; i++) {
            await timer(1300);

            var color = this.colors[i];
            let block = document.getElementById(color);
            let oBlock = block.style.backgroundColor;

            if(color === "green") {
                block.style.backgroundColor = "limegreen";
            } else if(color === "red") {
                block.style.backgroundColor = "red";
            } else if(color === "orange") {
                block.style.backgroundColor = "orange";
            } else {
                block.style.backgroundColor = "blue";
            }

            setTimeout(function() {
                block.style.backgroundColor = oBlock.toString();
            }, 1250);
        }

        window.gameRunning = false;
    }

    getColor(list, index) {
        if (list) return this.colors;
        if(index > this.colors.length) return "index out of range"

        return this.colors[index];
    }

    reset() {
        this.colors = [];
    }
}