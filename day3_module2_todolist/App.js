import {checkKeyword,checkArrayType} from './validator.js'
import {setItem,getItem} from './storage.js'
import Header from './Header.js'
import TodoForm from './todoForm.js'
import TodoList from './todoList.js'
import TodoCount  from './TodoCount.js'



//컴포넌트 니까 defalut
export default function App({$target,initialState}){

    this.state=initialState;
    this.validate = state=>{
        checkArrayType(state);
  
    }
    this.setState=nextState=>{
        this.state=nextState
        this.validate(this.state)
        this.render()
    }

    checkKeyword(new.target,App)
    new Header({
        $target,
    text:'Simple Todo list'
})
    new TodoForm({
        $target,
        onSubmit:(text)=>{
            const nextState = [...todoList.state,{
                text,isCompleted:false
            }];
            todoList.setState(nextState)
            //로컬스토리지에 추가
            setItem('todos',JSON.stringify(nextState))
            this.setState(nextState)
        }
    })

    const todoList = new TodoList({
        $target,
        initialState,
        onListClick:(todoListId)=>{
            const nextState = [...todoList.state];
            //alert(todoListId)
            //alert(nextState[todoListId].isCompleted)
            nextState[todoListId].isCompleted=
            !nextState[todoListId].isCompleted;
            todoList.setState(nextState)
            setItem('todos',JSON.stringify(nextState))
            this.setState(nextState)
            

        },

        onRemoveButtonClick:(todoListId)=>{
            const nextState = [...todoList.state];
            //alert(todolistId)
            nextState.splice(todoListId, 1);
            
            //nextState[todoListId].isCompleted=
            //!nextState[todoListId].isCompleted;
         
            todoList.setState(nextState);
            setItem('todos',JSON.stringify(nextState))
            this.setState(nextState)
        }
    })

    const todoCount=new TodoCount({
        $target,
        initialState:{
            doneTodoCount: this.state.filter((todo) => todo.isCompleted).length,
            totalTodoCount: this.state.length,
        },
        // initialState:{
        //     doneTodoCount : getItem('todos',[])
        //                     .filter(todo=>todo.isCompleted).length,
        //     totalTodoCount:getItem('todos', []).length
        // }요런느낌? 제가 구현한 방법은 todolist에 직접 접근하는 방식이 되는지?
    })

    this.render=()=>{
        todoCount.setState({
            doneTodoCount: this.state.filter((todo) => todo.isCompleted).length,
            totalTodoCount: this.state.length,
        })
    }
}