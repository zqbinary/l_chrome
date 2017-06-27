/**
 * Created by zqbinary on 2017/6/27.
 */

/**
 监视Google 是否在线,本扩展常驻后台
 每隔5s发起一次连接请求, 如果成功就代表网站在线, 将扩展的icon变绿;如果失败, 变红;
 */

var target = document.getElementById("target");

function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if( 4 == xhr.readyState) {
            //状态码
            callback(xhr.status);
        }
    }

    xhr.send(null);
}

function listen() {
    httpRequest("http://www.google.com",function (res) {
        target.innerHTML = '<font style="red">' + res + '</font>';

        // if(200 == res) {
        //     //网站通畅
        //     target.innerText = '200';
        // } else {
        //
        // }
    });
    //TODO ??
    // setTimeout('listen();', 2000);//这个挂了额
    setTimeout(function () {
        listen();
    }, 2000);
}

listen();