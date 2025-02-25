function initEventListeners() {
    const burgerMenuElement = document.querySelector('.burger-menu');
    
    burgerMenuElement.addEventListener('click', onBurgerClick);
}



function onBurgerClick() {
    const navmenu = document.querySelector('.navigation-menu');

    navmenu.style.display = "block";
}

initEventListeners();