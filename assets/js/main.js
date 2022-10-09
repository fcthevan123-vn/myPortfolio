
// On/off menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Menu show
if (navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Menu hidden
if (navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Cần tạo chức năng bấm vào các icon tự động đóng menu
const navLink = document.querySelectorAll('.nav__link');
navLink.forEach((i) => {
    i.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    });
})



// Skills
const skillsContent = document.querySelectorAll('.skills__content');

skillsContent.forEach((i, e) => {
    i.addEventListener('click', () => {
        if (skillsContent[e].classList.contains('skills__close')) {
            skillsContent[e].classList.remove('skills__close');
            skillsContent[e].classList.add('skills__open');
        }else {
            skillsContent[e].classList.add('skills__close');
            if (skillsContent[e].classList.contains('skills__close') && skillsContent[e].classList.contains('skills__open')) {
                skillsContent[e].classList.remove('skills__open');
            }

        }
    });
})






// Qualifications tabs
const qualificationBtns = document.querySelectorAll('.qualification__button');
const qualificationContents = document.querySelectorAll('.qualification__content');

qualificationBtns[1].addEventListener('click', () => {
    qualificationContents[1].classList.add('qualification__active');
    qualificationContents[0].classList.remove('qualification__active');
});

qualificationBtns[0].addEventListener('click', () => {
    qualificationContents[0].classList.add('qualification__active');
    qualificationContents[1].classList.remove('qualification__active');
});


// Services show
const servicesBtn = document.querySelectorAll('.services__button');
const servicesModal = document.querySelectorAll('.services__modal');
const closeBtn = document.querySelectorAll('.services__modal-close');



servicesBtn.forEach((i, e) => {
    i.addEventListener('click', () => {
        servicesModal[e].classList.add('services-show');
    });
})

closeBtn.forEach((i, e) => {
    i.addEventListener('click', () => {
        servicesModal[e].classList.remove('services-show');
    });
})