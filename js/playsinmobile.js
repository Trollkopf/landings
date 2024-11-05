document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("slide-video");
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        video.pause(); // Pausa el autoplay en móvil
    }
});