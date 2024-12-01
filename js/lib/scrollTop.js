window.addEventListener('scroll', function () {
    var element = document.querySelector('#scrollTop-container');
    var scrollPosition = window.scrollY;

    var threshold = 20;

    if (scrollPosition > threshold) {
        element.style.opacity = '1';
    } else {
        element.style.opacity = '0';
    }
});

window.addEventListener('load', function () {
    var element = document.querySelector('#scrollTop-container');
    setTimeout(function () {
      element.style.opacity = '0';
    }, 200);
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}
