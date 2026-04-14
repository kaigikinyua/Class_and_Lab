<template>
    <div class="login">
        <topnav :barner="barner" :links="links"></topnav>
        <div class="page_form">
            <div class="form_fields">
                <h3 class="title">Login</h3>
                <input class="text" name="email" placeholder="Email"/>
                <input class="text" type="password" placeholder="Password"/>
                <button class="submit">Submit</button>
            </div>
        </div>
    </div>
</template>
<script>

import Topnav from "./components/topnav";
export default {
    components:{
        "topnav":Topnav
    },
    data(){
        return{
            links:[{"title":"Home","link":"/"},{"title":"Signup","link":"/signup"}],
            barner:{"title":"Virtual Dealership","subtitle":"Login"}
        }
    }
}
</script>
<style scoped>
  div.login{
        height:100vh;
        width:100vw;
        background-image: url("/carpics/2.jpg");
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
</style>