var Utils={
    Settings:{
        baseUrl:"http://localhost:5050",
        debug:true
    },
    Ajax:{
        getRequest:async (url)=>{
            var res=await fetch()
            var data=await res.json()
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