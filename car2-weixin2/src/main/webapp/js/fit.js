(function (doc, win) {
			    var docEl = doc.documentElement,
			    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
			    recalc = function () {
			        window.clientWidth = docEl.clientWidth;
			        if (!window.clientWidth) return;
			        docEl.style.fontSize = 40 * (window.clientWidth / 750) + 'px';
//
			    };
			    if (!doc.addEventListener) return;
			    win.addEventListener(resizeEvt, recalc, false);
			    doc.addEventListener('DOMContentLoaded', recalc, false);
			    })(document, window);



//		(function(document, window) {
//			var resizeEvent = 'orientationchange' in window ? 'orientationchang' : 'resize';
//			var rescale = function() {
//				document.documentElement.style.fontSize = document.documentElement.clientWidth / 640 * 32 + 'px';
//			}
//			window.addEventListener(resizeEvent, rescale, false);
//			document.addEventListener('DOMContentLoaded', rescale, false);
//		})(document, window);
