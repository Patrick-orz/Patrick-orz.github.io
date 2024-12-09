let content;
let arrow;
let container;
let blurTop;
let blurBottom;

function checkBlur() {

    setTimeout(() => {
        if (content.scrollTop > 10) {
            if (content.classList.contains('show')) {
                blurTop.style.opacity = 1;
            }
        } else {
            blurTop.style.opacity = 0;
        }

        if (content.scrollTop + content.clientHeight < content.scrollHeight - 10) {
            if (content.classList.contains('show')) {
                blurBottom.style.opacity = 1;
            }
        } else {
            blurBottom.style.opacity = 0;
        }
    }, 100);
}

window.addEventListener("load", () => {

    setTimeout(() => {
        content = document.querySelector('.toc');
        arrow = document.querySelector('.toc-toggler .toc-arrow');
        container = document.querySelector('.toc-container');
        toggler = document.querySelector('.toc-toggler');

        blurTop = document.querySelector('.blur-top');
        blurBottom = document.querySelector('.blur-bottom');

        content.style.maxHeight = 700 + 'px';
        content.classList.add('show');
        arrow.classList.add('show');
        arrow.style.opacity = toggler.style.opacity = 1;

        checkBlur();
        content.addEventListener('scroll', () => {
            checkBlur();
        });
    }, 500);
})

function toggleToc(){
    if (content.classList.contains('show')) {
        content.style.maxHeight = '0';

        content.classList.remove('show');
        arrow.classList.remove('show');

        blurBottom.style.opacity = 0;
        blurTop.style.opacity = 0;
    } else {
        const contentHeight = content.scrollHeight;
        content.style.maxHeight = 700 + 'px';

        content.classList.add('show');
        arrow.classList.add('show');

        checkBlur();
    }
}
