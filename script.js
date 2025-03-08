document.addEventListener("DOMContentLoaded", function () {
    console.log("Vizag Wonders website loaded!");

    // Smooth scrolling for navbar links
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });
});
