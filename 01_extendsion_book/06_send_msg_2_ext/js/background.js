/**
 * Created by zqbinary on 2017/6/28.
 */
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if ('hello' == msg) {
        sendResponse(Math.round(10 * Math.random()) + 'hello from background');
    }
});