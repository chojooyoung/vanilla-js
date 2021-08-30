export const checkText=value=>{
    const len=value.length
    
    if(value===' ' || value===null || value===undefined || len<1)
    {
        return true
    }
    return false
}
export const checkArrayType = arr => {
    if (!Array.isArray(arr)) {
        throw new Error('배열 타입이 아닙니다 현재타입: `${typeof arr}`')


    }
  };

export const checkKeyword = (target,componentName)=>{
    if(target!==componentName){
        throw new Error('new키워드를 사용하세요')
    }
}