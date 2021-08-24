const storage = window.localStorage


export const setItem = (key, value) =>{
    try {
        //{name:'h!'} json은 toString이라서 obejct,object로 들어간다.
        storage.setItem(key,JSON.stringify(value))
        console.log(key,value)
    } catch(e){
        console.log(e)
    }
}
export const getItem = (key,defaultValue) =>{
    try{
        const storedValue=storage.getItem(key)

        if(!storedValue){
            return defaultValue
        }

        const parsedValue = JSON.parse(storedValue)
        return parsedValue

    }catch(e){
        return defaultValue

    }
}

export const removeItem = (key)=>{
    storage.removeItem(key)
}