<template>
  <div class="loadmark">
    <h1>ローディングなう</h1>
    <p>
      このロード画面は演技ではない。
      <br>
      しっかりとリアリティを求めたやつだ。
      <br>
      ロード画面なんて要らないだろという考えがこの世の中の大半を締めている。
      <br>
      なぜそう思われるのか、それは変に時間を消費してしまうからだろう。
      <br>
      「早く見たい！！！」という人が多い。待てない人が多い中無意味なロード画面を見せられたらそりゃ不満だろう。
      <br>
      「お前がそう思ってるならこれも消せ」という人が居ると思うがこれは自己満の世界である。他人のものに口を出すが自分のものに対しては気にしない。人間あるある。だがこれはloadのなんかが発火したときに消える用にしているので高速通信環境ではあんま表示されないと思う。5s指定とかしているわけではないので他人との差別化をしているという自身がある。
      <br>
      誰かに対する逆張りとかですかね。多分そう、そういう人なので。
      <br>
      <br>
      JavaScriptは有効にしてね
    </p>
  </div>
</template>

<script>
export default {
  name: 'LoadScreen',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.loadmark {
    position: fixed;
    z-index: 10000;
    width: 100%;
    height: 100%;
    margin: 0%;
    padding: 0%;
    cursor: wait;
}
</style>