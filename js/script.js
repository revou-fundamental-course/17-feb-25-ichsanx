// Ini Javascript External

let banners = document.querySelectorAll('.main-banner');
let index = 0;

function showNextBanner() {
    banners.forEach((banner, i) => {
        banner.style.display = i === index ? "block" : "none";
    });

    index = (index + 1) % banners.length;
}

setInterval(showNextBanner, 3000);
showNextBanner();
