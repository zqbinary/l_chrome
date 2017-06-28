/**
 * Created by zqbinary on 2017/6/28.
 */
chrome.contextMenus.create({
    'type':'normal',
    'title':'使用百度翻译',
    'contexts':['selection'],
    'id':'cn',
    'onclick':translate
});

function translate(info, tab) {
    var url = 'https://fanyi.baidu.com/#en/zh/' + info.selectionText;
    //TODO ?
    window.open(url, '_blank');
}

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    chrome.contextMenus.update('cn', {
        'title':'使用百度翻译"' + msg + '"'
    });

    localStorage.debug = localStorage.debug || msg || 'ept';
    document.getElementById("debug").innerHTML = localStorage.debug;
});

