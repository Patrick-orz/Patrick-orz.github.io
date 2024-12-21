let content;
let arrow;
let container;
let blurTop;
let blurBottom;

let contentScrollable = true; // Whether the content is scrollable at all

function checkBlur() {

	if (content.scrollTop > 10) {
		if (content.classList.contains('show')) {
			blurTop.style.opacity = 1;
		}
	} else {
		blurTop.style.opacity = 0;
	}

	if (content.scrollTop + content.offsetHeight < content.scrollHeight - 10 && contentScrollable) {
		if (content.classList.contains('show')) {
			blurBottom.style.opacity = 1;
		}
	} else {
		blurBottom.style.opacity = 0;
	}
}

window.addEventListener("load", () => {

    setTimeout(() => { // Timeout to hide element snapping on load
		// Grab references
        content = document.querySelector('.toc');
        arrow = document.querySelector('.toc-toggler .toc-arrow');
        container = document.querySelector('.toc-container');
        toggler = document.querySelector('.toc-toggler');

        blurTop = document.querySelector('.blur-top');
        blurBottom = document.querySelector('.blur-bottom');

		// init element
		toggleToc();
        arrow.style.opacity = toggler.style.opacity = 1;

		setTimeout(() => { // Timeout to allow content extension
			if(content.scrollTop + content.offsetHeight >= content.scrollHeight - 10) // Content unscrollable
				contentScrollable = false;

			checkBlur();
			content.addEventListener('scroll', () => {
				checkBlur();
			});
		}, 500);

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
        content.style.maxHeight = (window.innerHeight - 100) + 'px';

        content.classList.add('show');
        arrow.classList.add('show');

		checkBlur();
    }
}
