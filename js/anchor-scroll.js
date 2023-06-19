var shiftWindow = function() {scrollBy(0,-30) };
if(location.hash)
	shiftWindow();
window.addEventListener("hashchange",shiftWindow);
//- 对于目录跳转问题的暂解，以后看要不要改掉