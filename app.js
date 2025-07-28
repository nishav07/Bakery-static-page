let togglebtn = document.getElementById("toggle");
let html = document.documentElement;
let heroContainer = document.querySelector(".hero-container")

togglebtn.addEventListener("click",() => {
    togglebtn.style.opacity = 0;

    setTimeout(() => {
        toggle(togglebtn);
        togglebtn.style.opacity = 1;
    },300)
})





// toggle krne wala funx

function toggle(el){
    if(el.classList.contains("fa-moon")){
        el.classList.remove("fa-moon");
        el.classList.add("fa-sun");
        html.setAttribute("data-theme" , "dark");
        heroContainer.style.backgroundImage = `url("assests/dark-bg.svg")`;

    } else {
        el.classList.add("fa-moon");
        html.setAttribute("data-theme" , "light");
           heroContainer.style.backgroundImage = `url("assests/hero-bg.svg")`;
    }
}