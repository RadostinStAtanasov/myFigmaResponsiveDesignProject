function initEventListeners() {
    const burgerMenuElement = document.querySelector('.burger-menu');
    const mobileMediaQuery = window.matchMedia('(max-width: 700px)');
    
    burgerMenuElement.addEventListener('click', onBurgerClick);
    mobileMediaQuery.addEventListener('change', onMediaChange)
}

//reset on burger menu and navigation on change
function onMediaChange() {
    const burgerMenuElement = document.querySelector('.burger-menu');
    const navmenu = document.querySelector('.navigation-menu');
    burgerMenuElement.classList.replace('close-menu', 'open-menu');
    navmenu.style.display = '';
}


function onBurgerClick() {
    const burgerMenuElement = document.querySelector('.burger-menu');
    const navmenu = document.querySelector('.navigation-menu');
    
    //toggle burger menu

    if (burgerMenuElement.classList.contains('open-menu')) {
        burgerMenuElement.classList.replace('open-menu', 'close-menu');
        navmenu.style.display = 'block';
    } else {
        burgerMenuElement.classList.replace('close-menu', 'open-menu');
        navmenu.style.display = '';
    }
}

initEventListeners();