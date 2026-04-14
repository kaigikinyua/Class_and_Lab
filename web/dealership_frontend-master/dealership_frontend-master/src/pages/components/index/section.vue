<template>
    <section class="content">
        <div class="container_middle">
            <h3 class="title">{{textData.title}}</h3>
            <div class="par">
                <p class="par" v-for="par in textData.par" :key="par">{{par.par}}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:"Section",
    props:["textData","colors"]
}
</script>
<style scoped>
    section.content{
        position: relative;
        height:100vh;
        width:100vw;
    }
    div.container_middle{
        position: relative;
        text-align: left;
    }
    h3.title{
        font-weight: lighter;
        font-size: 30px;
        padding:10px;
    }
    div.par{
        padding: 10px;
    }
    p.par{
        line-height: 25px;
        font-size: 18px;
    }
</style>