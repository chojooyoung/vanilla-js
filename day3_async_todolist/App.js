import TodoComments from "./TodoComments.js"
import TodoList from "./Todolist.js"
import {request} from "./api.js"

export default function App({$target}){
    
    this.state={
        selected:null,
        todos:[],
        comments:[]
        
    }

    this.setState=nextState=>{
        this.state=nextState
        todoList.setState(this.state.todos)
        todoComments.setState({
            selectedTodo: this.state.selectedTodo,
            comments:this.state.comments
        })
    }




    const todoList=new TodoList({
        $target,
        initialState: this.state.todos,
        onClick: async (id)=>{
            const selectedTodo = this.state.todos.find(todo=>todo.id===id)
            this.setState({
                ...this.state,
                selectedTodo
            })
        
        const data = await request(`https://kdt.roto.codes/comments?todo.id=${id}`)
            this.setState({
                ...this.state,
                comments:data


        })
        }
        
    
    })

    const todoComments = new TodoComments
    ({
        $target,
        initialState:{
            selectedTodo:this.state.selected,
            comments:this.state.comments
        },

    })

    const init = async ()=>{
        const data = await request('https://kdt.roto.codes/todos')
            this.setState({
                ...this.state,
                todos:data
            })
    }
    init()
}
    
