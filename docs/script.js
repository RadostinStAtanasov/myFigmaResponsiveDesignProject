function initEventListeners() {
    const burgerMenuElement = document.querySelector('.burger-menu');
    
    burgerMenuElement.addEventListener('click', onBurgerClick);
}



function onBurgerClick() {
    const burgerMenuElement = document.querySelector('.burger-menu');
    const navmenu = document.querySelector('.navigation-menu');

    //show navigation
    navmenu.style.display = "block";

    if (burgerMenuElement.classList.contains('open-menu')) {
        burgerMenuElement.classList.replace('open-menu', 'close-menu');
    } else {
        burgerMenuElement.classList.replace('close-menu', 'open-menu');
    }

    //change burger menu
    // burgerMenuElement.classList.remove('open-menu');
    // burgerMenuElement.classList.add('close-menu');
                                           
}

initEventListeners();