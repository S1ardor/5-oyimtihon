const menu = document.querySelector('.menu-img'),
    iteam = document.querySelector('.iteam'),
    backManu = document.querySelector('.back_me'),
    removeBtn = document.querySelector('.rem-btn');


menu.addEventListener('click', () => {
    iteam.classList.add('itm_tr-for');
    menu.classList.add('rem-btn')
});
backManu.addEventListener('click', () => {
    iteam.classList.remove('itm_tr-for');
    menu.classList.remove('rem-btn');
});