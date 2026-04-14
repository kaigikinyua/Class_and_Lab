<template>
    <div class="userpage">
        <topnav v-bind:barner="barner" v-bind:links="links"></topnav>
        <div class="car_listing">
            <div :key="car" v-for="car in cars">
                <carcard :vehicle="car"></carcard>    
            </div>
        </div>
        <!--<button v-on:click="fetch_cars">Fetch CARS</button>-->
    </div>
</template>
<script>
import Topnav from './components/topnav'
import Ajax from '../services/services'
import CarCard from './components/userpage/car_card'
export default {
    components:{
        "topnav":Topnav,
        "carcard":CarCard
    },
    mounted:function(){
        this.fetch_cars()
    },
    data(){
        return {
            barner:{"title":"Virtual Dealership","subtitle":"Username"},
            links:[{"title":"Logout","link":"/"}],
            cars:[]
        }
    },
    methods:{
        fetch_cars(){ 
            Ajax.get_request('/cars/listCars',(state,data)=>{
                if(state==true){
                    this.cars=data.cars
                }else{
                    console.log(data)
                }
            })
        }
    }    
}
</script>
<style scoped>
    button{
        position: fixed;
        top:50%;
        left:50%;
    }
    div.userpage{
        height: 100vh;
        width:100vw;
    }
    div.car_listing{
        position: relative;
        height:80%;
        max-width: 1000px;
        top:50%;left:50%;
        transform: translate(-50%,-50%);
        display: grid;
        grid-template-columns: repeat(5,1fr);
        overflow-y:scroll;
    }
</style>