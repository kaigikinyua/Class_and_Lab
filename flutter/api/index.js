const express=require('express')
const fs=require("fs");
const app=express();

app.get('/',(req,res)=>{
    var data={"category":"Ele"}
    res.send()
})

app.listen(4000,()=>{
    console.log("server running on port 4000")
    console.log(DataBase.fetchProducsCategory("Electronics"));
})


class DataBase{
    static fetchProducsCategory(category){
        var f=fs.readFileSync("./products.json",'utf-8',(data,error)=>{
            if(error){return {"state":"error"}}
            //else{return data}
        })
        var data=JSON.parse(f);
        var products=[];
        data["products"].forEach(cat => {
            if(cat["category"].toLocaleLowerCase()==category.toLocaleLowerCase()){
                //products=cat["list"]
                //cat["list"].forEach(sub=>{
                    products.push({"category":cat["category"],"sub":cat["sub_cat"],"list":cat["list"]})
               // })
            }
        });
        return products
    }
}