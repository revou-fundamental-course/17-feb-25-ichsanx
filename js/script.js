

document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
    let slideInterval;

    // Pastikan hanya satu gambar yang aktif di awal
    function initializeSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove("active"); // Hapus semua class active
        });
        slides[0].classList.add("active"); // Aktifkan gambar pertama
    }

    // Fungsi untuk menampilkan slide berdasarkan indeks
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active")); // Reset semua gambar
        slides[index].classList.add("active"); // Aktifkan gambar yang sesuai
    }

    // Fungsi untuk berpindah ke slide berikutnya
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Fungsi untuk berpindah ke slide sebelumnya atau berikutnya dengan tombol navigasi
    function changeSlide(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = slides.length - 1; // Kembali ke slide terakhir
        } else if (currentIndex >= slides.length) {
            currentIndex = 0; // Kembali ke slide pertama
        }
        showSlide(currentIndex);
        restartSlideInterval();
    }

    // Restart interval agar tidak ada konflik antar event
    function restartSlideInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 3000); // Slide berganti otomatis setiap 3 detik
    }

    // Pastikan slide pertama aktif saat halaman dimuat
    initializeSlides();

    // Mulai slideshow otomatis
    showSlide(currentIndex);
    slideInterval = setInterval(nextSlide, 3000);

    // Event listener tombol navigasi
    document.querySelector(".prev").addEventListener("click", () => changeSlide(-1));
    document.querySelector(".next").addEventListener("click", () => changeSlide(1));
});
