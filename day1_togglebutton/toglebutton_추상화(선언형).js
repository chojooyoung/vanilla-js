function ToggleButton({
    $target,
    text
}) {
    //target에 버튼추가
    const $button = document.createElement('button');
    $target.appendChild($button)

    //버튼에 렌더링에 필요한부분을 다시그림
    this.render = () => {
        $button.textContent = text

    }
    
    //버튼이 눌렸을때 이벤트

    $button.addEventListener('click', () => {
        if ($button.style.textDecoration === 'line-through') {
            $button.style.textDecoration = ''
        } else {
            $button.style.textDecoration = 'line-through'
        }
    })

    this.render()
}
// const $button1=document.createElement('button')
// $button1.textContent='button1'
// const $body = document.querySelector('body')
// $body.appendChild($button1)
const $app = document.querySelector('#app')
new ToggleButton({
    $target: $app,
    text : 'Button1'
})

new ToggleButton({
    $target: $app,
    text : 'Button2'
})

new ToggleButton({
    $target: $app,
    text : 'Button3'
})

new ToggleButton({
    $target: $body,
    text : 'Button4'
})