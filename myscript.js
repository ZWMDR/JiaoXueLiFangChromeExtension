window.onhashchange = e => {
    if(location.hash==="#S-Lesson-index"){
        var s = document.createElement('script');
        s.src = chrome.runtime.getURL('catchHomework.js');
        document.getElementsByTagName('head')[0].appendChild(s);
    }
}