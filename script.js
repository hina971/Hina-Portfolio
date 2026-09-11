// ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");

    navLinks.classList.toggle("active");
}


// ===============================
// CLOSE MOBILE MENU AFTER CLICK
// ===============================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(item) {

    item.addEventListener("click", function() {

        const navLinks = document.querySelector(".nav-links");

        navLinks.classList.remove("active");

    });

});


// ===============================
// SIMPLE SCROLL ANIMATION
// ===============================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.1
    }
);


sections.forEach(function(section) {

    observer.observe(section);

});