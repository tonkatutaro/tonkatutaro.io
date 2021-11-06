'use strict'
{
    const open = document.getElementById('open');
    const overlay = document.querySelector('.overlay');
    const close = document.getElementById('close');

    open.addEventListener('click', ()=>{
        overlay.classList.toggle('show');
        // open.classList.toggle('hide');
    });
    // close.addEventListener('click', ()=>{
    //     overlay.classList.remove('show');
    //     open.classList.remove('hide');
    // });

    const trigger = document.querySelector('.menu-trigger');
    const span = document.querySelectorAll('span');

    trigger.addEventListener('click' , ()=>{
        trigger.classList.toggle('active');
    });



    function play() {
        setTimeout(() =>{
            images[currentIndex].classList.remove("current");
            currentIndex++;
            if (currentIndex > images.length - 1) {
                currentIndex = 0;
            }
            images[currentIndex].classList.add("current");
            play();
        },3000);
        
    } 
    const images = document.querySelectorAll('.store-picture');
    let currentIndex = 0;
    
    play();
}
