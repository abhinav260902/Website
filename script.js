const icon = document.querySelector(".icon");
const main = document.querySelector("#main");
const nav = document.querySelector("#sidenav");
const close = document.querySelector(".close");



icon.addEventListener('click', () => {
    main.style.transform = "translateX(100px) scale(.8) rotateY(-10deg) translateZ(-100px)";
    nav.style.transform = "translateX(0)";
})

close.addEventListener("click", () => {
  main.style.transform = "translateX(0) scale(1)";
  nav.style.transform = "translateX(-400px)";
});