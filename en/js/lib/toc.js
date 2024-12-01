function toggleToc(){
    const content = document.querySelector('.toc');
    const arrow = document.querySelector('.toc-toggler .toc-arrow');
    if (content.classList.contains('show')) {
        content.style.maxHeight = '0';

        content.classList.remove('show');
        arrow.classList.remove('show');
    } else {
        const contentHeight = content.scrollHeight;
        content.style.maxHeight = contentHeight + 'px';

        content.classList.add('show');
        arrow.classList.add('show');
    }
}
