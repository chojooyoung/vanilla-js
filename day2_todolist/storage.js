const storage =(function(storage){
    const setItem =(key, value)=>{
        try{
            storage.setItem(key,value)
        }
        catch(e){
            console.log(e) 
        }
    }
    const getItem = (key, defaultvalue)=>{
        try{
            const storedValue=storage.getItem(key)

            if(storedValue){
                return JSON.parse(storedValue)
            }
            return defaultvalue

        }catch(e){
            console.log(e)
            return defaultvalue
        }
    }
    return{
        setItem,
        getItem
    }
})(window.localStorage)