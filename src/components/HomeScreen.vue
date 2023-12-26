<template>
    <div class="body">
        <div class="top">
            <h1>chAIns's Website</h1>
            <div class="padds"></div>
            <h2>よこそう私のサイトへ</h2>
        </div>
        <div class="padd"></div>
        <div class="padd"></div>
        <HelloWorld />
        <div class="padd"></div>
        <div class="padd"></div>
        <div class="bottom">
            <p>
                このサイトのソースコード : <a href="https://github.com/chainsawsteel1/chainsawsteel1.github.io"
                    target="_blank">GitHub</a>
                <br>
                <br>
                2023 chainsawsteel1
            </p>
        </div>
    </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue';

export default {
    name: 'App',
    components: {
        HelloWorld
    }
}
</script>

<style scoped>
.body {
    margin-left: 10%;
    margin-right: 10%;
}
.top {
    padding: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
}
.bottom {
    padding: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}
</style>