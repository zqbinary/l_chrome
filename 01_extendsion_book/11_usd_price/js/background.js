function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (4 == this.readyState) {
            callback(xhr.responseText);
        }
    }
    xhr.send(null);
}
/**
 *
 * @param amount    var         用户输入的值
 * @param exchange  function    呈现的样式
 */
function updateAmount(amount, exchange) {
    amount = Number(amount);
    if (isNaN(amount) || !amount) {
        //非数字显示
        exchange([
            {'content': '$1 = ¥' + price, 'description': '$1 = ¥' + price},
            {'content': '$1 = ¥' + price, 'description': '$1 = ¥' + price},
            {'content': '¥1 = $' + (1 / price).toFixed(6), 'description': '¥1 = $' + (1 / price).toFixed(6)}
        ]);
    } else {
        //数字显示
        exchange([
            {
                'content': '$' + amount + '=¥' + (amount * price).toFixed(2),
                'description': '$' + amount + '=¥' + (amount * price).toFixed(2)
            },
            {
                'content': '¥' + amount + '=$' + (amount / price).toFixed(2),
                'description': '¥' + amount + '=$' + (amount / price).toFixed(2)
            }
        ]);
    }

}
/**
 *
 * @param text          string  用户输入的内容
 * @param disposition   string  打开方式
 */
function gotoYahoo(text, disposition) {
    window.open('https://finance.yahoo.com/q?s=USDCNY=X');
    //https://finance.yahoo.com/quote/USDCNY=X?ltr=1
}

var url = 'http://query.yahooapis.com/v1/public/yql?q=select%20Rate%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22USDCNY%22)&env=store://datatables.org/alltableswithkeys&format=json';
var price;

httpRequest(url, function (r) {
    price = JSON.parse(r);
    price = price.query.results.rate.Rate;
    price = Number(price);
});
//地址栏, 关键字usd触发后, 现实的额描述
chrome.omnibox.setDefaultSuggestion({'description': 'Find current USD price.'});
//地址栏的监听函数1, 内容改变触发, 实时计算汇率
chrome.omnibox.onInputChanged.addListener(updateAmount);
//地址栏的监听函数2, 回车触发, 去官网看汇率
chrome.omnibox.onInputEntered.addListener(gotoYahoo);
