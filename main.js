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

function start() {
    var text = document.getElementById("game_text");
    var colors = [];

    text.innerText = "";

    var number = Math.floor(Math.random() * 100);
    if(number <= 25) {
        colors.push("green");
    } else if(number <= 50 && number > 25) {
        colors.push("red");
    } else if(number <= 75 && number > 50) {
        colors.push("orange");
    } else {
        colors.push("blue");
    }

    for(let i = 0; i < colors.length; i++) {
        const colorDiv = document.getElementById(colors[i]);
        const bg = colorDiv.style.backgroundColor;
            
        // Change the color to the lighter color //
        switch (colors[i]) {
            case "green":
                    colorDiv.style.backgroundColor = "green";
                    break;
            case "red":
                    colorDiv.style.backgroundColor = "red";
                    break;
            case "orange":
                colorDiv.style.backgroundColor = "yellow";
                break;
            case "blue":
                colorDiv.style.backgroundColor = "#659BDF";
                break;
        }

        // Change the color back to the original color //
        setTimeout(function() {
            document.getElementById(colors[i]).style.backgroundColor = bg;
        }, 1250);
    }
}