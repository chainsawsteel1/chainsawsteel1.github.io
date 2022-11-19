if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      //Service Worker(sw.js)が登録できたら特に何もしない。
    }, function(err) {
      //Service Worker(sw.js)の登録が失敗した場合はブラウザにログを出す。
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
