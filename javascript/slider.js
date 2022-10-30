let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset += 372;
    if(offset > 744){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
})

document.querySelector('.slider-prev').addEventListener('click', function(){
    offset -= 372;
    if(offset < 0){
        offset = 744;
    }
    sliderLine.style.left = -offset + 'px';
})