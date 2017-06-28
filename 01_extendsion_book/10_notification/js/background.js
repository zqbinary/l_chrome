var notification = webkitNotifications.createNotification(
    'icon48.png',
    'Notification Demo',
    'Merry Christmas'
);
// // 或者创建 HTML 通知：
// var notification = webkitNotifications.createHTMLNotification(
//     'notification.html'  // HTML 的 URL，可以是相对路径
// );


//显示通知
notification.show();
//
// setTimeout(function () {
//     //关闭通知
//     notification.cancel();
// }, 5000);

//no work, 应该是不支持
//TODO 用chrome.notifications 来写
/*
* 警告：网络通知 API 中的 webKitNotifications.createHTMLNotification() 已弃用，新的 网络通知 API 只允许文本通知。Chrome 浏览器的通知 API 很快就会在稳定版中支持，网络通知将更新为新的丰富通知格式。
*
* */