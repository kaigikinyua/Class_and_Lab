<template>
    <div class="slidder">
        <div class="container_middle">
            <div class="images">
                <div class="slide" v-for="car in cars" v-bind:key="car" :style="'background-image:url('+car+');'"></div>
            </div>
            <div class="controller">
                <i class="fa fa-arrow-left controll" v-on:click="nextImage"></i>
                <i class="fa fa-arrow-right controll" v-on:click="previous"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Slidder",
    mounted:function (){
        var slides=document.querySelectorAll(".slide")
        slides[0].classList.add("currImage")
        slides[0].style.display="block"
    },
    data(){
        return {
            currImage:0,
            imageSet:false,
            cars:["/carpics/2.jpg","/carpics/1.jpg","/carpics/3.jpeg"],
        }
    },
    methods:{
        nextImage:function(){
            console.log("Going to next Image")
            var slides=document.querySelectorAll(".slide")
            if(this.currImage+1<slides.length){
                slides[this.currImage].classList.remove("currImage")
                //slides[this.currImage].classList.add("exitImage")
                slides[this.currImage].style.display="none"
                this.currImage+=1
                slides[this.currImage].classList.add("currImage")
                slides[this.currImage].style.display="block"
            }else{
                slides[this.currImage].classList.remove("currImage")
                //slides[this.currImage].classList.add("exitImage")
                slides[this.currImage].style.display="none"
                this.currImage=0
                slides[this.currImage].classList.add("currImage")
                slides[this.currImage].style.display="block"
            }
        },
        previous:function(){
            console.log("Going to next Image")
            var slides=document.querySelectorAll(".slide")
            if(this.currImage-1>-1){
                slides[this.currImage].classList.remove("currImage")
                //slides[this.currImage].classList.add("exitImage")
                slides[this.currImage].style.display="none"
                this.currImage-=1
                slides[this.currImage].classList.add("currImage")
                slides[this.currImage].style.display="block"
            }else{
                slides[this.currImage].classList.remove("currImage")
                //slides[this.currImage].classList.add("exitImage")
                slides[this.currImage].style.display="none"
                this.currImage=slides.length-1
                slides[this.currImage].classList.add("currImage")
                slides[this.currImage].style.display="block"
            }
        },
    },
    computed:{
        setFirstImage:function(){
             return this.imageSet
        }
    },
}
</script>
<style scoped>
    div.slidder{
        position: relative;
        height: 100vh;width:100vw;
        overflow: hidden;
    }
    div.container_middle{
        position: relative;
        height: 100vh;
        max-width:100vw;
        display: grid;
        grid-template-rows: 11fr 1fr;
        overflow: hidden;
    }
    div.images{
        display: flex;
    }
    div.slide{
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        display: none;
    }
    div.controller{
        display: grid;
        grid-template-columns: 1fr 1fr;
        background:rgba(10,10,10,0.7);
    }
    i.controll{
        padding:10px;
        font-size: 20px;
        color:white;
    }
    .currImage{
        position: relative;
        height:100%;
        width:100%;
        animation: 1s enterImage ease-in;
    }
    .exitImage{
        position: relative;
        height:100%;
        width:100%;
        left:-100%;
        animation:1s enterImage reverse ease-in-out;
    }
    
    @keyframes enterImage {
        from{right:-100%;}
        to{right:0%;}
    }

</style>