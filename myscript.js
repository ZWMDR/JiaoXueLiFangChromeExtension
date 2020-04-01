window.onhashchange = e => {
    if(location.hash==="#S-Lesson-index"){
        let src = chrome.runtime.getURL('catchHomework.js');
        if(!document.querySelector(`head script[src="${src}"]`)) {
            var s = document.createElement('script');
            s.src = src;
            document.getElementsByTagName('head')[0].appendChild(s);
        }
    }
}