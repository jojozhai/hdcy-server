(function (doc, win) {
    var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                window.clientWidth = docEl.clientWidth;
                if (!window.clientWidth) return;
                docEl.style.fontSize = 66 * (window.clientWidth / 375) + 'px';
                window.base = 66 * (window.clientWidth / 375);
            };

    try {
        recalc();
    } catch (e) {

    }
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
