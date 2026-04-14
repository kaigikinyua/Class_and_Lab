<template>
    <div class="car_card">
        <img :src="vehicle.image"/>
        <div class="content">
            <h3>{{vehicle.car_model}}</h3>
            <div class="metrics">
                <small :click="liked=true"><i class="fa fa-star" :class="liked"></i>5</small>
                <small><i class="fa fa-heart"></i>101</small>
            </div>
            <p class="desc innactive">{{vehicle.desc}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name:"CarCard",
    props:["vehicle"],
    data(){
        return{
            liked:false
        }
    }    
}
</script>
<style scoped>
    div.car_card{
        margin:10px;
        box-shadow: 1px 1px 3px 3px rgba(10,10,10,0.5);
        max-width: 300px;
    }
    div.content{
        padding:5px;
        background:whitesmoke;
    }
    img{
        height:auto;
        width:300px;
    }
    p.desc{
        overflow: hidden;
    }
    .innactive{
        height:0px;
    }
    div.metrics{
        padding:10px;
    }
    i.fa{
        margin:0px 10px;
    }
    small{
        font-size: 15px;
    }
</style>