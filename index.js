
let MainImg = document.getElementById("mainImg");
let smallImg = document.getElementsByClassName("smallImg");


smallImg[0].addEventListener('click', function(){
    MainImg.src = smallImg[0].src;
});
smallImg[1].addEventListener('click', function(){
    MainImg.src = smallImg[1].src;
});
smallImg[2].addEventListener('click', function(){
    MainImg.src = smallImg[2].src;
});
smallImg[3].addEventListener('click', function(){
    MainImg.src = smallImg[3].src;
});