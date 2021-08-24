export const parse = (querysting)=>
querysting.split('&').reduce((acc,keyAndValue, )=>{
    const [key,value] = keyAndValue.split('=')



    if(key && value){
        acc[key]=value
    }
    return acc
},{})
    //'?' name=roto&position =bassist
    // & 로 쪼갠다.
    // key=valuse의 조합을 object형태로만든다.
    // 만들어진 거 리턴한다

 

    //루프 돌면서 querystrings에 키와 값 추가
