var mainimg = document.querySelector(".img");
var images = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];
var num = 0;

function next(){
    num++;
    if(num >= images.length){
        num = 0;
        mainimg.src = images[num];
    }else {
        mainimg.src = images[num];
    }
}

function back(){
    num--;
    if(num < 0){
        num = images.length-1;
        mainimg.src = images[num];
    }else {
        mainimg.src = images[num];
    }
}