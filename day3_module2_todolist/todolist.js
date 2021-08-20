// params.$target - 해당 컴포넌트가 추가가 도리 dom 엘리먼트
// params.initialState - 해당 컴토넌트 초기상태

export default function TodoList({$target, initialState}){
        //$는 돔객체를 포함하고있는 변수다.
        //todoListElement로 대체가능

    const $todoList=document.createElement('div');//일종의 컨테이너?컴포넌트의 돔.
    this.state = initialState;

    this.setState=nextState=>{
        this.state=nextState
        this.render()
    }//현재의 상태를 nextstate로바꾸고 render를 다시 호출한다
    

    //const $target = params.$target;//타켓에 돔에 잘 넘겨준다.
    $target.appendChild($todoList);
    

    this.render=()=>{//컴포넌트를 그린다.
        //this.state =[{text: '자바스크립트 공부하기'}.{text:'....'}]
        // map을 돈 이후에는 아래처럼 만들어진다.
        //['<li>자바스크립트 공부하기</li>', '<li>....</li>']
        //join('')을 하면 
        //'<li>자바스크립트 공부하기</li><li>....</li>'
        $todoList.innerHTML = `
        <ul>
            ${this.state.map(({text}) =>`<li>${text}</li>`).join('')}
        <ul>` 
           
    }
    this.render();//컴포넌트를 생성한거를 실행
}