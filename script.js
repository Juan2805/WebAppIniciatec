const menuListener = () => {
    const menuContainer = document.querySelector('.menu_container');
    const menuDisplayContainer = document.querySelector('.menu_display_container');

    menuContainer.addEventListener('click', () => {
        menuDisplayContainer.classList.toggle('hidden');
    })
}

menuListener()