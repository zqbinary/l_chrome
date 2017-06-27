/**
 * Created by zqbinary on 2017/6/27.
 */
function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, 1);
    xhr.onreadystatechange = function () {
        if (4 == xhr.readyState) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
};

var html;
var target = document.getElementById("ip_div");

httpRequest('http://pv.sohu.com/cityjson?ie=utf-8', function (result) {
    // var returnCitySN = {"cip": "110.90.34.191", "cid": "350100", "cname": "福建省福州市"};
    var patt = /{"cip":\s"(.*?)",/;
    result = patt.exec(result)[1];
    target.innerText = result;
});

/**
 1. 写的时候可以在html 里带上script 标签, 方便调试
 2. TODO 但是以上就有跨域的问题,
 */