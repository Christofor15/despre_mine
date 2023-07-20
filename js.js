 var images = [
    'liceu1.jpg', 
    'liceu2.jpg', 
    'liceu3.jpg'
];
var n = 0;
function next() {
    var slider = document.getElementById('slider');
    n++;
    if(n >= images.length) {
        n = 0;
    }
    slider.src = images[n];
}
function prev() {
    var slider = document.getElementById('slider');
    n--;
    if(n < 0) {
        n = images.length-1;
    }
    slider.src = images[n];
}