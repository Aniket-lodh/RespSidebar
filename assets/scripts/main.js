let arrow = document.querySelectorAll(".ri-arrow-drop-down-line");
arrow.forEach((e) => {
    e.addEventListener('click', (elem) => {
        let arrowParent = elem.target.parentElement.parentElement;
        arrowParent.classList.toggle('showMenu');
    })
})
let sidebar = document.querySelector(".sidebar"),
    sidebar_btn = document.querySelector(".ri-menu-line");
sidebar_btn.addEventListener('click', () => {
    sidebar.classList.toggle("close");
})
console.log(sidebar, sidebar_btn)
