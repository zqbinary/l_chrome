/**
 * Created by zqbinary on 2017/6/28.
 */


window.onmouseup = function(){

    var selection = window.getSelection();
    //TODO ?
    if(selection.anchorOffset!= selection.extentOffset) {
        chrome.runtime.sendMessage(selection.toString());
    }
}


//如果用跨域的, 就不用这样的吧, 绕一圈
