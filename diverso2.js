var circle = document.getElementById('circle');
var upBoton = document.getElementById('upBoton');
var downBoton = document.getElementById('downBoton');

var rotateValue= circle.style.transform;
var rotateSum;

upBoton.onclick= function(){
    rotateSum= rotateValue + "rotate(-180deg)";
    circle.style.transform= rotateSum;
    rotateValue = rotateSum;
}

downBoton.onclick= function(){
    rotateSum= rotateValue + "rotate(180deg)";
    circle.style.transform= rotateSum;
    rotateValue = rotateSum;
}