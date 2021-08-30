import {checkArrayType,checkKeyword} from "./validator.js"

export default function TodoCount ({$target, initialState})
{
    const $todoCount=document.createElement('div')
    
    $target.appendChild($todoCount)

    
    checkKeyword(new.target,TodoCount)
    this.validate = state=>{
        checkArrayType(state);
    }

    this.setState = (nextState) =>{
        this.state=nextState
        this.render()
    }

    this.state=initialState

    this.render=()=>{
        console.log(this.state)
        $todoCount.innerHTML=`
        완료된 todo갯수: ${this.state.doneTodoCount}개 / 전체 todo갯수 : ${this.state.totalTodoCount}개 }
        `
    }
    this.render()
}