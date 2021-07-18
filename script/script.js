let btn = document.getElementsByClassName("btn");
let banner = document.getElementById("banner");

btn[0].onclick = function(){
    banner.src = "images/img1.jpg";
    animation();
    this.classList.add("active");
}
btn[1].onclick = function(){
    banner.src = "images/img2.jpg";
    animation();
    this.classList.add("active");
}
btn[2].onclick = function(){
    banner.src = "images/img3.jpg";
    animation();
    this.classList.add("active");
}

function animation(){
    banner.classList.add("zoom");
    setTimeout(function(){
        banner.classList.remove("zoom");
    }, 500);

    for(b of btn){
        b.classList.remove("active");
    }
}