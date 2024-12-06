
const modal = document.getElementsByClassName("modal")[0];
const btn1 = document.getElementsByClassName("but")[0];
const btn2 = document.getElementsByClassName("but")[1];
const btn3 = document.getElementsByClassName("but")[2];
const btn4 = document.getElementsByClassName("but")[3];
const btn5 = document.getElementsByClassName("but")[4];
const btn6 = document.getElementsByClassName("but")[5];
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

btn1.onclick = function() {
    modal.style.display = "block";
}
btn2.onclick = function() {
    modal.style.display = "block";
}
btn3.onclick = function() {
    modal.style.display = "block";
}
btn4.onclick = function() {
    modal.style.display = "block";
}
btn5.onclick = function() {
    modal.style.display = "block";
}
btn6.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}