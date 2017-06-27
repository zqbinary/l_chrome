/**
 * Created by zqbinary on 2017/6/27.
 */

/**
 监视Google 是否在线,本扩展常驻后台
 每隔5s发起一次连接请求, 如果成功就代表网站在线, 将扩展的icon变绿;如果失败, 变红;
 */

function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if( 4 == xhr.readyState) {
            callback(true);
        }
    }
    xhr.onerror = function () {
        callback(false);
    };
    xhr.send(null);
}

setInterval(function () {
    url = "https://www.baidu.com/";
    httpRequest(url,function (res) {
        chrome.browserAction.setIcon({path: 'images/' + (res ? 'online.png' : 'offline.png')});
    });
}, 2000);
