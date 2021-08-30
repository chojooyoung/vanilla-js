// params.$target - 해당 컴포넌트가 추가가 도리 dom 엘리먼트
// params.initialState - 해당 컴토넌트 초기상태
import { checkKeyword ,checkArrayType} from './validator.js'
export default function TodoList({
    $target,
    initialState,
    onListClick,
    onRemoveButtonClick
}) {
    //$는 돔객체를 포함하고있는 변수다.
    //todoListElement로 대체가능

    const $todoList = document.createElement('div'); //일종의 컨테이너?컴포넌트의 돔.

    checkKeyword(new.target, TodoList)

    this.validate = state => {
        checkArrayType(state);

    }
    this.state = initialState;
    this.setState = nextState => {
        this.state = nextState
        this.validate(this.state)
        this.render()
    } //현재의 상태를 nextstate로바꾸고 render를 다시 호출한다

    //const $target = params.$target;//타켓에 돔에 잘 넘겨준다.
    $target.appendChild($todoList);


    this.render=()=>{//컴포넌트를 그린다.
        //this.state =[{text: '자바스크립트 공부하기'}.{text:'....'}]
        // map을 돈 이후에는 아래처럼 만들어진다.
        //['<li>자바스크립트 공부하기</li>', '<li>....</li>']
        //join('')을 하면 
        //'<li>자바스크립트 공부하기</li><li>....</li>'
        $todoList.innerHTML = `
        <ul class="todoList">
            ${this.state.map(({text,isCompleted},index) =>
            `<li id=${index} class='todoListItem' 
            style='${isCompleted ? 'text-decoration:line-through' : ''}'>
            <input class='todoCheck' type="checkbox" ${
                isCompleted && 'checked'}/>
                ${text}
            <button class='todoRemove'> 삭제 </button>`).join('')}
            </li>
        <ul>` 
        
        $todoList.querySelectorAll('.todoListItem').forEach($li => {
            $li.addEventListener('click', (e)=>{
                if($li){

                const todoListItem =e.target.closest('.todoListItem')
                const todoListItemId=parseInt(todoListItem.id)
                onListClick(todoListItemId)
                }
            })
        })
        
        $todoList.querySelectorAll('.todoRemove').forEach(todoRemove =>{
            todoRemove.addEventListener('click', (e)=>{
                const todoListItem=e.target.closest('.todoListItem')
                const todoListItemID=parseInt(todoListItem.id)
                    onRemoveButtonClick(todoListItemID)
            })
        })   

    }
    this.render();//컴포넌트를 생성한거를 실행
}