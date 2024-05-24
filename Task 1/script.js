function hover(x) {
    x.style.color = "red";
    x.style.backgroundColor = "#74564c";
    x.style.textDecoration = "underline";
    x.style.cursor = "pointer";
}

function noHover(x) {
    x.style.color = "#955d19";
    x.style.backgroundColor = "transparent";
    x.style.textDecoration = "none";
}

function myHome(x) {
    location.href = "#home"
}

function myAbout(x) {
    location.href = '#about';
}

function myServices(x) {
    location.href = '#services';
}

function myContact(x) {
    location.href = "#contact";
}

function mailOver(x) {
    x.style.textDecoration = "underline";
}

function mailOut(x) {
    x.style.textDecoration = "none";
    x.style.color = "000";
}


// responsive
function closeNav() {
    document.getElementById("menu").style.width = "0%";
}

function openNav() {
    document.getElementById("menu").style.width = "100%";
}