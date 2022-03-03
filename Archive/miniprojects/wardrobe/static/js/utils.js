var Utils={
    Settings:{
        baseUrl:"http://localhost:5500",
        debug:true,
        imageUrl:(asset)=>{
            return Utils.Settings.baseUrl+"/static/images/"+asset
        }
    },
    Ajax:{
        getRequest:async (url)=>{
            var res=await fetch(url)
            var data=await res.json()
            console.log(data)
            return data
        }
    },
    Messages:{
        errorMessage:(message)=>{
            console.error(message)
        },
        success:(message)=>{
            console.log(message)
        }
    }
}