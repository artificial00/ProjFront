const modal = document.getElementsByClassName("modal")[0];
const btn1 = document.getElementsByClassName("butt")[0];
const btn2 = document.getElementsByClassName("butt")[1];
const btn3 = document.getElementsByClassName("butt")[2];
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
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

document.querySelectorAll('h3').forEach(function(header) {
    header.addEventListener('mouseenter', function() {
        header.classList.add('scale-up');
    });

    header.addEventListener('mouseleave', function() {
        header.classList.remove('scale-up'); 
    });
});

document.querySelector('.par').addEventListener('click', function() {
    this.classList.toggle('active'); 
});

document.getElementById('lec-but').addEventListener('click', function() {
    const lectureTable = document.querySelector('#lec-tab');
    lectureTable.classList.toggle('active');
});

document.getElementById('sub-but').addEventListener('click', function() {

    event.preventDefault();
    const message = document.getElementById('message');
    
    message.classList.remove('hidden');
    message.classList.add('visible');

    setTimeout(() => {
        message.classList.add('change-color');
    }, 0);

    setTimeout(() => {
        message.classList.remove('visible');
        message.classList.add('hidden');
        message.classList.remove('change-color'); 
    }, 3000); 
});