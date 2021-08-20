function App({$target,initialState}){
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
            storage.setItem('todos',JSON.stringify(nextState))
        }
    })

    const todoList=new TodoList({
        $target,
        initialState
    })
}