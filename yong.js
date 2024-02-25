const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
};

// const menuOpenBtn = selectElement('#menu-toggle-icon');
// const menuCloseBtn = selectElement('#menu-close-icon');
// const menuContainer = selectElement('#menu');

// menuOpenBtn.addEventListener('click', () => menuContainer.classList.add('activated'));

// menuCloseBtn.addEventListener('click', () => menuContainer.classList.remove('activated'));

// window.addEventListener('keyup', event => {
//     if(event.key === "Escape") menuContainer.classList.remove('activated');
// });
// const navboxControl = selectElement('#navbox');
// const menuOpenBtn = selectElement('#menu-toggle-icon');
// const menuCloseBtn = selectElement('#close-btn');

function openMenu() {
    document.getElementById("menu").classList.add("show");
}
window.onclick = (event) =>{
    if(!event.target.matches('.menu-btn')){
        if(document.getElementById("menu").classList.contains("show")){
            document.getElementById("menu").classList.remove("show");
        }
    }
    console.log("window clicked clicked clicked");
}
menu.addEventListener('click', event => event.stopPropagation());
  