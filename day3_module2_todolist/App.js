import Header from './Header.js'
import TodoForm from './todoform.js'
import TodoList from './todolist.js'
import {setItem} from './storage.js'

//컴포넌트 니까 defalut
export default function App({$target,initialState}){
    new Header({
        $target,
    text:'Simple Todo list'
})
    new TodoForm({
        $target,
        onSubmit:(text)=>{
            const nextState = [...todoList.state,{
                text
            }];
            todoList.setState(nextState)
            //로컬스토리지에 추가
            setItem('todos',JSON.stringify(nextState))
        }
    })

    const todoList=new TodoList({
        $target,
        initialState
    })
}