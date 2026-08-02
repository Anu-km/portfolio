const menuButton = document.querySelector(".menu");
const navList = document.querySelector("nav ul");
const contactForm = document.querySelector("form");
const typingTarget = document.querySelector("#typing");

if (menuButton && navList) {
    menuButton.addEventListener("click", () => {
        const isOpen = navList.classList.toggle("active");
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
        const targetSelector = anchor.getAttribute("href");
        const targetElement = targetSelector ? document.querySelector(targetSelector) : null;

        if (!targetElement) {
            return;
        }

        event.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });

        if (navList && menuButton) {
            navList.classList.remove("active");
            menuButton.setAttribute("aria-expanded", "false");
        }
    });
});

if (typingTarget && window.Typed) {
    new window.Typed("#typing", {
        strings: [
            "Cybersecurity Enthusiast",
            "Ethical Hacker",
            "Software Tester",
            "QA Engineer",
            "Aspiring Cybersecurity Engineer"
        ],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1500,
        loop: true
    });
}

if (window.AOS) {
    window.AOS.init({
        duration: 900,
        once: true
    });
}

if (window.particlesJS) {
    window.particlesJS("particles-js", {
        particles: {
            number: {
                value: 55,
                density: {
                    enable: true,
                    value_area: 900
                }
            },
            color: {
                value: "#00f7ff"
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.28,
                random: true
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 130,
                color: "#00f7ff",
                opacity: 0.18,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.4,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out"
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 150,
                    line_linked: {
                        opacity: 0.3
                    }
                },
                push: {
                    particles_nb: 3
                }
            }
        },
        retina_detect: true
    });
}

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        window.alert("Thank you! Your message has been received.");
        contactForm.reset();
    });
}
