const storage = window.localStorage

    export const setItem =(key, value)=>{
        try{
            storage.setItem(key,value)
        }
        catch(e){
            console.log(e) 
        }
    }
    export const getItem = (key, defaultvalue)=>{
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