var curr_slide=1;
const slides=document.querySelectorAll('.slide')
const slides_parent=document.getElementById("slides")
const screen_width=screen.width
function auto_scroll(){
    if(curr_slide<slides.length){curr_slide+=1}
    else{curr_slide=1}
    var scroll_by=curr_slide*(screen_width)
    slides_parent.scrollRight=scroll_by
    console.log(scroll_by)
}
//setInterval(auto_scroll,1000)
//vue
new Vue({
    el:"#slides",
    data:{
        slides:[
            {"text_content":"This is slide one","image":"./images/food.jpg"},
            {"text_content":"This is another slide","image":"./images/nature_view.jpg"},
            {"text_content":"This is another slide","image":"./images/adventure.jpg"},
            {"text_content":"This is another slide","image":"./images/bed.jpg"},
            {"text_content":"This is slide two","image":"./images/fruits.jpg"},
            {"text_content":"This is slide three","image":"./images/pool.jpeg"}
        ]
    }
});
new Vue({
    el:"#reviews",
    data:{
        reviews:[
            {"review":"Cool hotel with awsome staff!!","username":"John"},
            {"review":"Great customer service","username":"James"},
            {"review":"Great pricing","username":"Marry"},
            {"review":"Wonderfull people","username":"Sussan"},
            {"review":"Excellent","username":"Joe"},
            {"review":"Smashing success","username":"Jim"},
            {"review":"Love the pool","username":"John"},
            {"review":"Nice","username":"James"},
            {"review":"Hello World","username":"Marry"},
            {"review":"Hello World","username":"Sussan"},
            {"review":"Hello World","username":"Joe"},
            {"review":"Hello World","username":"Jim"},
        ]
    }
});

