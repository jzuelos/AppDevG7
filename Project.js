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


//scrolling image
var gallery = document.getElementById('horizontal-scroll');
var scrollSpeed = 2;
var isScrollingRight = true;

function autoScroll() {
    if (isScrollingRight) {
        gallery.scrollLeft += scrollSpeed;

        if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth) {
            isScrollingRight = false; 
        }
    } else {
        gallery.scrollLeft -= scrollSpeed;

        if (gallery.scrollLeft <= 0) {
            isScrollingRight = true; 
        }
    }
}

setInterval(autoScroll, 50);