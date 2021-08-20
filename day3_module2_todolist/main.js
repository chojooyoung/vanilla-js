import App from './App.js'
import { getItem } from './storage.js'
//const initialState=JSON.parse(localStorage.getItem('todos')|| '[]')
const initialState=getItem('todos',[])
//새로고침하면 삭제되므로, local storage에서 꺼내게 합시다!
//일단은 잘동작하지만 위험하다. 
//외부 툴 등을 이용해 todos json string을 올바르지 않은 형태로 바뀌면 어떻게될까용?
//실행이 안된다.  
//storage.js를 만들고 여기서만 local에 접근하도록 만든다.
const $app = document.querySelector('.app')
//app컴포넌트들이 어디에 들어갈지 
new App({
    $target: $app,
    initialState//:data
})


// setTimeout(()=>{
//     todoList.setState([{
//         text:'happy',
        
//     }])
// },5000)
//todolist라는 변수로 받고 이걸 테스트함