const menu = document.querySelector('.menu-img'),
    iteam = document.querySelector('.iteam'),
    backManu = document.querySelector('.back_me'),
    removeBtn = document.querySelector('.rem-btn'),
    buttonClick = document.querySelector('.button');
menu.addEventListener('click', () => {
    iteam.classList.add('itm_tr-for');
    menu.classList.add('rem-btn')
});
backManu.addEventListener('click', () => {
    iteam.classList.remove('itm_tr-for');
    menu.classList.remove('rem-btn');
});
document.querySelector('.inp_valid').addEventListener('focusout', arrFname);
document.querySelector('.err2').addEventListener('focusout', arrLname);
document.querySelector('.err3').addEventListener('focusout', arrUname);
document.querySelector('.err4').addEventListener('focusout', password);
document.querySelector('.err5').addEventListener('focusout', conPasword);
buttonClick.addEventListener('click', () => {
    arrFname();
    arrLname();
    arrUname();
    password();
    conPasword();
});

function arrFname() {
    let massage, text;
    let arrElement = document.querySelector('.inp_valid');
    massage = document.querySelector('.arr');
    text = document.querySelector('.inp_valid').value;
    try {
        if (text == '') {
            arrElement.classList.add('text');
            throw ' kriting:'
        } else if (text.length > 0) {
            arrElement.classList.remove('text')
            arrElement.classList.add('text_valid');
            massage.innerHTML = '';
            setTimeout((d) => {
                arrElement.classList.remove('text_valid');
            }, 5000);
        }
    } catch (e) {
        massage.innerHTML = 'Malumoad' + e;
    }
}

function arrLname() {
    let massage, text;
    let arrElement = document.querySelector('.err2');
    massage = document.querySelector('.arr2');
    text = document.querySelector('.err2').value;
    try {
        if (text == '') {
            arrElement.classList.add('text');
            throw ' kriting:'
        } else if (text.length > 0) {
            arrElement.classList.remove('text')
            arrElement.classList.add('text_valid');
            massage.innerHTML = '';
            setTimeout((d) => {
                arrElement.classList.remove('text_valid');
            }, 5000);
        }
    } catch (e) {
        massage.innerHTML = 'Malumoad' + e;
    }
}

function arrUname() {
    let massage, text;
    let arrElement = document.querySelector('.err3');
    massage = document.querySelector('.arr3');
    text = document.querySelector('.err3').value;
    try {
        if (text == '') {
            arrElement.classList.add('text');
            throw ' kriting:'
        } else if (text.length > 0) {
            arrElement.classList.remove('text')
            arrElement.classList.add('text_valid');
            massage.innerHTML = '';
            setTimeout((d) => {
                arrElement.classList.remove('text_valid');
            }, 5000);
        }
    } catch (e) {
        massage.innerHTML = 'Malumoad' + e;
    }
}

function password() {
    let massage, text;
    let arrElement = document.querySelector('.err4');
    massage = document.querySelector('.arr4');
    text = document.querySelector('.err4').value;
    try {
        if (text == '') {
            arrElement.classList.add('text');
            throw ' kriting:'
        } else if (text.length > 0) {
            arrElement.classList.remove('text')
            arrElement.classList.add('text_valid');
            massage.innerHTML = '';
            setTimeout((d) => {
                arrElement.classList.remove('text_valid');
            }, 5000);
        }
    } catch (e) {
        massage.innerHTML = 'Malumoad' + e;
    }
}

function conPasword() {
    let massage, text;
    let arrElement = document.querySelector('.err5');
    massage = document.querySelector('.arr5');
    text = document.querySelector('.err5').value;
    try {
        if (text == '') {
            arrElement.classList.add('text');
            throw ' kriting:'
        } else if (text.length > 0) {
            arrElement.classList.remove('text')
            arrElement.classList.add('text_valid');
            massage.innerHTML = '';
            setTimeout((d) => {
                arrElement.classList.remove('text_valid');
            }, 5000);
        }
    } catch (e) {
        massage.innerHTML = 'Malumoad' + e;
    }
}
// let url = 'https://reqres.in/api/users';