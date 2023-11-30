var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);

/* back to top button */
const toTop = document.querySelector(".toTop");

window.addEventListener("scroll" , () => {
    if (window.scrollY > 50) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});