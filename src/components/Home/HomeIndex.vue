<template>
    <chAInsDesc/>
    <div class="padd"></div>
    <div class="flxbx">
        <SNSDesc class="flex"/>
        <GitHubDesc class="flex"/>
        <MovieDesc class="flex"/>
        <LinkDesc class="flex"/>
        <OKGHDesc class="flex"/>
        <BlogDesc class="flex"/>
        <WITDesc class="flex"/>
    </div>
</template>

<script>
import chAInsDesc from './chAInsDesc.vue';
import SNSDesc from './SNSDesc.vue';
import GitHubDesc from './GitHubDesc.vue';
import MovieDesc from './MovieDesc.vue';
import LinkDesc from './LinkDesc.vue';
import OKGHDesc from './OKGHDesc.vue';
import BlogDesc from './BlogDesc.vue';
import WITDesc from './WITDesc.vue';

export default {
    name: 'App',
    components: {
        chAInsDesc,
        SNSDesc,
        GitHubDesc,
        MovieDesc,
        LinkDesc,
        OKGHDesc,
        BlogDesc,
        WITDesc
    }
}
</script>

<style scoped>
.flxbx {
    display: flex;
    flex-flow: row wrap;
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
.flex {
    flex: 450px;
    padding: 30px;
}
</style>