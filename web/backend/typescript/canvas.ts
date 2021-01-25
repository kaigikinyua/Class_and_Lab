class Canvas{
    height:number;width:number;
    constructor(h:number,w:number){
        this.height=h;this.width=w;
    }
}

class Ajax{
    static get(url:string,callback){
        fetch(url)
        .then(res=>res.json())
        .then(data=>callback(data))
        .catch(e=>{
            console.log(e)
        })
    }
    static post(url:string,data,callback){
        fetch(url,
          {"method":"POST",
            "body":data,
          }  
        ).then(res=>res.json())
        .then(data=>callback(data))
        .catch(e=>{console.log(e)})
    }
}

class Dom{
    static dom_dimensions():Object{
        var w_h=window.innerHeight;
        var w_w=window.innerWidth;
        return {"h":w_h,"w":w_w}
    }
}

console.log(Dom.dom_dimensions())
console.log(Ajax.get("http://localhost:5500",(data)=>{console.log(data)}))