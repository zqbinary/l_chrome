/**
 * Created by zqbinary on 2017/6/27.
 */
//10min 一次
// api.openweathermap.org/data/2.5/forecast?q=fuzhou&APPID=776bf43e2bb2bf2219c273c9cbef2565
// api.openweathermap.org/data/2.5/weather?q=fuzhou&APPID=776bf43e2bb2bf2219c273c9cbef2565
// http://api.openweathermap.org/data/2.5/weather?q=Fuzhou&APPID=e758e45e4705062a11fafd260cbe5b6d


function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (4 == this.readyState) {
            callback(this.responseText);
        }
    };
    xhr.send(null);
}

var city = localStorage.city || 'fuzhou';
city += ',china&lang=zh_cn';
var appid = '&APPID' + '=776bf43e2bb2bf2219c273c9cbef2565';
// "permissions": ["http://api.openweathermap.org/data/2.5/forecast?q=*"]

url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + appid;
httpRequest(url, function (res) {
    var list = JSON.parse(res);

    console.log(list);
    if (200 != list.cod) {
        document.getElmentById("weather").innerHTML = '网络发生错误';
        return false;
    }

    var table = '<table><tr><th>日期</th><th>天气</th><th>最低温度</th><th>最高温度</th></tr>';
    for (var i in list.list) {
        var d = new Date(list.list[i].dt * 1000);
        table += '<tr>'
            + '<td>' + d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '</td>'
            + '<td>' + list.list[i].weather[0].description + '</td>'
            + '<td>' + Math.round(list.list[i].temp.min - 273.15) + '`C' + '</td>'
            + '<td>' + Math.round(list.list[i].temp.max - 273.15) + '`C' + '</td>'
            + '</tr>';
    }
    table += '</table>';
    document.getElementById("weather").innerHTML = table;
});