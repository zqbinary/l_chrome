/**
 * Created by Administrator on 2017/6/26.
 */
function my_clock(el) {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = m > 10 ? m : ('0' + m);
    s = s > 10 ? s : ('0' + s);
    el.innerHTML = h + ":" + m + ":" + s;
    setTimeout(
        function () {
            my_clock(el);
        }
        , 100
    )
}


var clock_div = document.getElementById("clock_div");
my_clock(clock_div);