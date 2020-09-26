//fetches data from 'server' using get request
function dataFetch(callBackFunction){
    fetch("http://127.0.0.1:5500/prices.json")//url to the server
    .then(res=>res.json())
    .then(data=>{callBackFunction(data)})
    //incase of any error while fetching from server
    .catch(e=>{
        console.error(e)
        console.error("Failed to fetch data")
    })
}
//fetch data from userpage/dom
function fetchFromDom(){
    var price_form=document.getElementById("price_field").value
    return price_form
}
function updateDom(newValue){
    var price_field=document.getElementById("price")
    price_field.innerHTML=newValue
}
function checkPriceUpdate(){
    dataFetch(data=>{
        if(data.update==true){
            updateDom(data.price)
        }else{/*do nothing*/}
    })
}
//runs function checkPriceUpdate after 5 seconds
setTimeout(checkPriceUpdate,5000)
