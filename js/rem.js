/*动态改变根元素字体大小*/
function recalc() {
	var clientWidth = document.documentElement.clientWidth;
	if(!clientWidth) return;
	document.documentElement.style.fontSize = 50 * (clientWidth / 375) + 'px';
}
//320是逻辑像素

function initRecalc() {
	recalc();
	var resizeEvt = 'osrientationchange' in window ? 'orientationchange' : 'resize';
	if(!document.addEventListener) return;
	window.addEventListener(resizeEvt, recalc, false);
	document.addEventListener('DOMContentLoaded', recalc, false);
}
initRecalc();