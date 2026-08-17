const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobileMenu");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");
const counters = document.querySelectorAll(".counter");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");


menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

});
window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("text-blue-500");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("text-blue-500");
        }

    });

});

// Project Count

function animateValue(element, endValue, suffix = "") {
    let start = 0;
    const duration = 1000;
    const stepTime = Math.max(Math.floor(duration / endValue), 30);

    const timer = setInterval(() => {
        start++;
        element.textContent = start + suffix;

        if (start >= endValue) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Projects
const projectCount = document.getElementById("project-count");
const totalProjects = document.querySelectorAll(".project-card").length;

animateValue(projectCount, totalProjects);
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// Tech Count Animation
document.addEventListener("DOMContentLoaded", () => {

    // Animate Counter Function
    function animateCounter(id, target) {

        const element = document.getElementById(id);

        if (!element) return;

        let current = 0;
        const speed = 100;

        const timer = setInterval(() => {

            current++;
            element.textContent = current;

            if (current >= target) {
                clearInterval(timer);
            }

        }, speed);

    }

    // Count Skills by Category
    animateCounter(
        "frontend-count",
        document.querySelectorAll(".skill-card.frontend").length
    );

    animateCounter(
        "backend-count",
        document.querySelectorAll(".skill-card.backend").length
    );

    animateCounter(
        "tools-count",
        document.querySelectorAll(".skill-card.tools").length
    );

    animateCounter(
        "design-count",
        document.querySelectorAll(".skill-card.design").length
    );

    animateCounter(
        "office-count",
        document.querySelectorAll(".skill-card.office").length
    );

});
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function animateCounter(elementId, target, suffix = "") {
    const element = document.getElementById(elementId);

    if (!element) return;

    let current = 0;
    const duration = 1200;
    const increment = target / (duration / 16);

    function update() {
        current += increment;

        if (current >= target) {
            element.textContent = target + suffix;
            return;
        }

        element.textContent = Math.floor(current) + suffix;
        requestAnimationFrame(update);
    }

    update();
}

// Project Count
animateCounter(
    "project-count",
    document.querySelectorAll(".project-card").length
);

// Years Experience
animateCounter("experience-count", 1, "+");

// Responsive
animateCounter("responsive-count", 100, "%");

// project filter animation


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Active button
        filterButtons.forEach(btn => {
            btn.classList.remove("bg-blue-600");
            btn.classList.add("bg-slate-800");
        });

        button.classList.remove("bg-slate-800");
        button.classList.add("bg-blue-600");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            if (filter === "all") {

                card.style.display = "block";

            } else {

                if (card.classList.contains(filter)) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            }

        });

    });

});

