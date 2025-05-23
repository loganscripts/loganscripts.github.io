particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        size: { value: 3 },
        color: { value: "#aa00ff" },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#aa00ff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" }
        },
        modes: {
            repulse: { distance: 100 }
        }
    }
});