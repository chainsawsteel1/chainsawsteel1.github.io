if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/pwasystem/sw-main.js').then(function(registration) {
    console.log('ServiceWorker の登録に成功しました。スコープ: ', registration.scope);
  }).catch(function(err) {
    console.log('ServiceWorker の登録に失敗しました。', err);
  });
}