var mainimg = document.querySelector(".img");
var images = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];
var num = 0;

function next() {
    mainimg.style.opacity = 0;

    setTimeout(() => {
        num = (num + 1) % images.length;
        mainimg.src = images[num];
        mainimg.style.opacity = 1;
    }, 1000);
}

function back() {
    mainimg.style.opacity = 0;

    setTimeout(() => {
        num = (num - 1 + images.length) % images.length;
        mainimg.src = images[num];
        mainimg.style.opacity = 1;
    }, 1000);
}

function validarInput() {
    const input = document.getElementById("telefono").value;
    const regex = /^\d{10}$/; 

    if (!regex.test(input)) {
        alert("Por favor, introduce exactamente 10 dígitos.");
        return false;
    }
    return true;
}
