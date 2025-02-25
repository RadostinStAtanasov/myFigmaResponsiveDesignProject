function initEventListeners() {
    const burgerMenuElement = document.querySelector('.burger-menu');
    
    burgerMenuElement.addEventListener('click', onBurgerClick);
}



function onBurgerClick() {
    const burgerMenuElement = document.querySelector('.burger-menu');
    const navmenu = document.querySelector('.navigation-menu');

    //show navigation
    navmenu.style.display = "block";

    //change burger menu
    burgerMenuElement.style.backgroundImage =  'url("icons8-x-35.png")';
                                           
}

initEventListeners();