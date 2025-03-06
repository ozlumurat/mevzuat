// Sayfa kaydırıldığında butonun görünürlüğünü ayarla
window.onscroll = function() {
var scrollToTopBtn = document.querySelector('.scroll-to-top');
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
} else {
    scrollToTopBtn.style.display = "none";
}
};

// Sayfanın en üstüne kaydır
function scrollToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}
