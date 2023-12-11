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

window.addEventListener("scroll", () => {
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

function openPrompt() {
    document.getElementById("overlay").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closePrompt() {
    document.getElementById("overlay").style.display = "none";
    document.body.style.overflow = "auto";
}

function submitPrompt() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform actions with username and password, for example, send them to the server for authentication.

    // Close the prompt after processing the input
    closePrompt();
}

function toggleDetails(rowId) {
    var details = document.getElementById(rowId + 'Details');
    details.classList.toggle('hidden');
}