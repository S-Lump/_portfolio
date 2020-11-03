//Movement anim to happen
const card = document.querySelector('.card');
const container = document.querySelector('.cont');
//Items
const title = document.querySelector('.title');
const product = document.querySelector('.primg');
const purchase = document.querySelector('.purchase');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

//Moving anim event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 5;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 5;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener('mouseenter', e => {
    card.style.transitiion = 'none';
    //Popout
    title.style.transform = 'translateZ(50px)';
    product.style.transform = 'translateZ(50px)';
    purchase.style.transform = 'translateZ(50px)';
    description.style.transform = 'translateZ(50px)';
    sizes.style.transform = 'translateZ(50px)';
});
//Animate out
container.addEventListener('mouseleave', e => {
    card.style.transitiion = 'all 0.1s linear';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = 'translateZ(0)';
    product.style.transform = 'translateZ(0)';
    purchase.style.transform = 'translateZ(0)';
    description.style.transform = 'translateZ(0)';
    sizes.style.transform = 'translateZ(0)';
});