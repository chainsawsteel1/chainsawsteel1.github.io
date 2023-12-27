<template>
        <chAInsDesc />
        <div class="padd"></div>
        <div class="padd"></div>
</template>

<script>
import chAInsDesc from './chAInsDesc.vue';

export default {
    name: 'App',
    components: {
        chAInsDesc
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