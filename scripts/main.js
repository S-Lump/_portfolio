// Animation on scroll
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight /animStart; 
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && (pageYOffset < animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else if (!animItem.classList.contains('_anim-no-hide')) {
                animItem.classList.remove('_active');
            }
        }
    }
    function offset(e1) {
        const rect = e1.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
}


// Fixed header
// const $welcome = document.querySelector('.welcome');
// const $header = document.querySelector('.header');

// window.addEventListener('scroll', fixHeader);
// function fixHeader(params) {
//     if (pageYOffset > $welcome.offsetHeight) {
//         $header.classList.add('_on-top');
//     } else if ($header.classList.contains('_on-top')) {
//         $header.classList.remove('_on-top');
//     }
// }

// Burger
const $burger = document.querySelector('.burger-link');
const $header = document.querySelector('.header');
const $lis = document.querySelectorAll('.ml');

$burger.addEventListener('click', e => {
    e.preventDefault();
    
    $header.classList.toggle('_active-mobile');
    $burger.classList.toggle('_active-mobile');
    for (let i = 0; i < $lis.length; i++) {
        $lis[i].classList.toggle('_active-mobile');
    }
})

function handleCloseBurger(e) {
    $header.classList.toggle('_active-mobile');
    $burger.classList.toggle('_active-mobile');
    for (let i = 0; i < $lis.length; i++) {
        $lis[i].classList.toggle('_active-mobile');
    }
}

for (let i = 0; i < $lis.length; i++) {
    $lis[i].addEventListener('click', handleCloseBurger);
}