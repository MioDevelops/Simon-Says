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
    change_page("game");
}