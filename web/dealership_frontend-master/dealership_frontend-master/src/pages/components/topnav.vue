<template>
    <div class="topnav">
        <div class="container">
            <div class="barner">
                <h3 class="title">{{barner.title}} | {{barner.subtitle}}</h3>
            </div>
            <div class="links">
                <ul class="links">
                    <li class="link" v-for="link in links" v-bind:key="link">
                        <router-link :to="link.link">{{link.title}}</router-link>
                    </li>
                    <!--add responsive button for navbar-->
                    <!--sidenav displayed for mobile-->
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Topnav",
    props:['barner','links']
}
</script>

<style scoped>
    div.topnav{
        position: fixed;
        z-index: 10;
        background:white;
    }
    div.container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        position: relative;
        left:50%;
        transform: translateX(-50%);
        text-align: left;
    }
    li.link{
        padding:5px;
        border:1px solid transparent;
        border-bottom:1px solid crimson;
        transition:1s;
    }
    li:hover,.active{
        background:lightseagreen;
        color:white;
    }
</style>