/**
 * Created by zqbinary on 2017/6/28.
 */
chrome.runtime.sendMessage('hello', function(response){
    document.write(response);
});