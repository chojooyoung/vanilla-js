function double(arr){
    let results =[]
    for (let i =0; i<arr.length;i++){
        if(typeof arr[i]==='number'){
            arr.push(arr[i]*2)
        }
    }
}
///명령형
///어떻게 가공할 것인가? 하나하나 일일이 넣는다
///일관성이 없으면 가공하고 확장하기가 힘들어진다.
///
function double(arr){
    return arr.filter(param=> typeof param==='number')
                .map(number=>number*2)
}
//선언형
//무엇을 할것이냐가 중요
//map이고 정의된 규칙에 의해 현재배열에서 새로운 배열을 만들건데, 어떠한 과정을 통해서 만들거냐


