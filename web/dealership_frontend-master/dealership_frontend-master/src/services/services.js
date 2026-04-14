class Ajax{
    constructor(){
        this.baseUrl="http://localhost/8000"
    }
    static get_request(sub_url,callBack){
        const baseUrl="http://localhost:8000"
        fetch(baseUrl+sub_url,
        {
            "method":"GET",
        })
        .then(res=>{return res.json()})
        .then(data=>{
            console.log(data)
            if(data.state=="ok"){
                callBack(true,data)
            }else{
                callBack(false,data.error)
            }
        })
        .catch(e=>{
            callBack(false,e)
        })
    }
}

export default Ajax