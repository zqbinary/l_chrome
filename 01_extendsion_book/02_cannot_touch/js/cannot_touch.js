//google,要求获取google 的搜索按钮, 然后鼠标悬触发一个随机位移
//google 不好点开用百度好了,

/***
 s_lg_img
 */

var su_button = document.getElementById("s_lg_img");
su_button.onmouseover = function () {
    move(this);
}

function move(ele) {
    ele.style.left = Math.random() * 50 + '%';
    ele.style.bottom = Math.random() * 50 + '%';
}