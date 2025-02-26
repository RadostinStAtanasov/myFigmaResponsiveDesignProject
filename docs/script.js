function initEventListeners() {
    const burgerMenuElement = document.querySelector('.burger-menu');
    const mobileMediaQuery = window.matchMedia('(max-width: 700px)');
    
    burgerMenuElement.addEventListener('click', onBurgerClick);
    burgerMenuElement.addEventListener('click', onBurgerClick2);
    mobileMediaQuery.addEventListener('change', onMediaChange)
}

//reset on burger menu and navigation on change
function onMediaChange() {
    const burgerMenuElement = document.querySelector('.burger-menu');
    const navmenu = document.querySelector('.navigation-menu');
    burgerMenuElement.classList.replace('close-menu', 'open-menu');
    navmenu.style.display = '';
}


function onBurgerClick2() {
    const headerContainerContent = document.querySelector('.header-container-height-without-home-page');

    //toggle burger menu

    if (headerContainerContent.classList.contains('header-container-height-without-home-page-close-menu')) {
        headerContainerContent.classList.replace('header-container-height-without-home-page-close-menu', 'header-container-height-without-home-page-open-menu');
        // headerContainerContent.style.heigh = "300px";
        
    } else {
        headerContainerContent.classList.replace('header-container-height-without-home-page-open-menu', 'header-container-height-without-home-page-close-menu');
    }
}

function onBurgerClick() {
    const burgerMenuElement = document.querySelector('.burger-menu');
    const navmenu = document.querySelector('.navigation-menu');
    const headerContainerContent = document.querySelector('.header-container-content-margin-home-page');


    //toggle burger menu

    if (burgerMenuElement.classList.contains('open-menu')) {
        burgerMenuElement.classList.replace('open-menu', 'close-menu');
        navmenu.style.display = 'block';
        headerContainerContent.style.marginBottom = "200px";
        
    } else {
        burgerMenuElement.classList.replace('close-menu', 'open-menu');
        navmenu.style.display = '';
        headerContainerContent.style.marginBottom = '';
    }
}

initEventListeners();