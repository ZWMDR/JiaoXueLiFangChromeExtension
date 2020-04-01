let chg = e => {
    if(location.hash==="#S-Lesson-index"){
        let src = chrome.runtime.getURL('catchHomework.js');
        let _script = document.querySelector(`head script[src="${src}"]`);
        if(_script) {
            _script.parentNode.removeChild(_script);
        }
        let s = document.createElement('script');
        s.src = src;
        document.getElementsByTagName('head')[0].appendChild(s);
    }
}

window.onhashchange = chg;
window.onload = chg;