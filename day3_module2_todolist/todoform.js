import { checkText,checkKeyword } from "./validator.js"
export default function TodoForm({$target,onSubmit}){

    const $form = document.createElement('form')

    checkKeyword(new.target,TodoForm)    



    $target.appendChild($form)
    let isInit =false

    this.render = ()=>{
        $form.innerHTML = `
        <input type="text" name="todo"/>
        <button>Add</button>
        `
        //이벤트를 해야한다.
        if(!isInit){
        $form.addEventListener('submit',e=>{
            e.preventDefault()//태그의 기본동작을 끈다
            const $todo=$form.querySelector('input[name=todo]')
            const text=$todo.value
            if(checkText(text)!==true){
                $todo.value=''
                onSubmit(text);
            }
            $todo.value=''

        
        
        })
        isInit=true
    }
    }

    this.render()

}