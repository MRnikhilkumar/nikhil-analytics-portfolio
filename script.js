// =========================================================
// SMOOTH NAVIGATION
// =========================================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// =========================================================
// NAVBAR SCROLL EFFECT
// =========================================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.style.background =
            "rgba(5, 8, 13, 0.94)";

    } else {

        navbar.style.background =
            "rgba(7, 9, 14, 0.82)";

    }

});


// =========================================================
// SIMPLE SCROLL REVEAL
// =========================================================

const cards = document.querySelectorAll(
    ".card, .experience-card, .contact-box"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.08
    }
);


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(25px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});


// =========================================================
// CURRENT YEAR
// =========================================================

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}
/* =========================================================
   PROJECT LIGHT FOLLOW
========================================================= */

document
    .querySelectorAll(".project-card")
    .forEach(card => {

        card.addEventListener("mousemove", event => {

            if (window.innerWidth < 900) {
                return;
            }

            const rect =
                card.getBoundingClientRect();

            const x =
                ((event.clientX - rect.left) / rect.width) * 100;

            const y =
                ((event.clientY - rect.top) / rect.height) * 100;

            card.style.background = `
                radial-gradient(
                    circle at ${x}% ${y}%,
                    rgba(20,211,236,.045),
                    transparent 38%
                ),
                linear-gradient(
                    145deg,
                    #121822,
                    #0d121a
                )
            `;

        });


        card.addEventListener("mouseleave", () => {

            card.style.background = `
                linear-gradient(
                    145deg,
                    #121822,
                    #0d121a
                )
            `;

        });

    });