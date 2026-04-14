<template>
    <div>
        <router-view/>
        <topnav v-bind:barner="barner" v-bind:links="links"></topnav>
        <slider></slider>
        <sect v-for="data in indexData" :key="data" :textData="data"></sect>
        <div class="contacts">
            <div class="messages_and_contacts">
                <div class="contacts_container">
                    <h3 class="title">Contacts</h3>
                    <table>
                        <tr><td><i class="fab fa-twitter"></i></td><td>@Dealership</td></tr>
                        <tr><td><i class="fab fa-instagram"></i></td><td>@Dealership</td></tr>
                        <tr><td><i class="fab fa-linkedin"></i></td><td>Dealership</td></tr>
                    </table>
                </div>
                <div class="message_us">
                    <h3 class="title">Leave a message</h3>
                    <input class="text" placeholder="email" required/>
                    <textarea placeholder="Message ..."></textarea>
                    <button class="submit">Submit</button>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import Topnav from "./components/topnav"
import Slider from "./components/index/slider"
import Section from "./components/index/section"
export default {
    name:"Index",
    components:{
        "topnav":Topnav,
        "slider":Slider,
        "sect":Section,
    },
    data(){
        return{
            links:[{"title":"Home","link":"/"},{"title":"Guest","link":"/guest"},{"title":"Sign Up","link":"/signup"},{"title":"Login","link":"/login"}],
            barner:{"title":"Virtual Dealership","subtitle":"Home"},
            indexData:[
                {"title":"About Us","par":[
                    {"par":"Virtual Dealership is an imaginery vehicle purchasement application made to make your dreams come true."},
                    {"par":"We have a variety of vehicles limited only to your imagination from SUVs to saloons we even have concept cars!!"},
                    {"par":"You can compare different performances of vehicles! What are you waiting for?!"}
                ]},
                {"title":"Our Services","par":[
                    {"par":"Virtual Dealership is an imaginery vehicle purchasement application made to make your dreams come true."},
                    {"par":"We have a variety of vehicles limited only to your imagination from SUVs to saloons we even have concept cars!!"},
                    {"par":"You can compare different performances of vehicles! What are you waiting for?!"}
                ]},
            ]
        }
    }
}
</script>

<style  scoped>
    div.contacts{
        background:rgba(10,10,10,0.7);
    }
    div.messages_and_contacts{
        position: relative;
        left:50%;transform: translateX(-50%);
        max-width: 800px;
        color:white;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    div.contacts_container{
        position: relative;
        text-align: center;
        padding:10px;
    }
    h3.title{
        font-size: 30px;
        font-weight: lighter;
    }
    table{
        margin-top:40px;
    }
    table td{
        padding:10px;
        font-size: 20px;
    }
</style>