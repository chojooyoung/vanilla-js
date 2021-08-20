function TimerButton({
    $target,
    text,
    timer=3000,
    onClick    
})
{
    const button = new ToggleButton({
        $target,
        text,
        onClick:() => {
            setTimeout(()=>{
                button.setState({
                    ...button.state,
                    toggled:!button.state.toggled
                })

            },timer)

        }  

    })
}


function ToggleButton({
    $target,
    text,
    onClick
}) {
    //target에 버튼추가
    const $button = document.createElement('button');
    $target.appendChild($button)
    this.state={
        clickCount:0,
        toggled: false
    }

    this.setState=(nextState)=>{
        this.state=nextState
        this.render()
    }
    this.render = () => {
        $button.textContent = text

        $button.style.textDecoration=
            this.state.toggled ? 'line-through' : 'none'

    }
    
    //버튼이 눌렸을때 이벤트

    $button.addEventListener('click', () => {
        this.setState({
            clickCount:this.state.clickCount+1,
            toggled:!this.state.toggled
        })
        if(onClick){
            onClick(this.state.clickCount)
        }
    })

    this.render()
}

function ButtonGroup({
    $target,
    buttons
})
{
    const $group = document.createElement('div')
    let isInit = false

    this.render = () =>{
        if(!isInit){
            buttons.forEach(({ type, ...props})=>{
                if (type==='toggle'){
                   new ToggleButton({$target: $group, ...props}) 
                }
                else if(type==='timer'){
                    new TimerButton({$target: $group, ...props})
                    
                }
                
            })

            $target.appendChild($group)
            isInit = true
        }
    }
    this.render()
}
const $app = document.querySelector('#app')
// new ToggleButton({
//     $target: $app,
//     text : 'Button1',
//     onClick:(clickCount)=>{
//         if(clickCount % 2 === 0){
//             alert('두번째 클릭')
//         }
//     }
// })

new ButtonGroup({
    $target: $app,
    buttons:[
        {
            type:'toggle',
            text:'토클 버튼'
        },
        {
            type:'toggle',
            text:'토클 버튼'
        },
        {
            type:'timer',
            text:'타이머',
            timer:1000
        }
    ]
    }
)

// new ToggleButton({
//     $target: $app,
//     text : 'Button2',

// })

// new ToggleButton({
//     $target: $app,
//     text : 'Button3'
// })

// new ToggleButton({
//     $target: $app,
//     text : 'Button4'
// })

// new TimerButton({
//     $target:$app,
//     text:'3초뒤 자동으로!',
// })

// new TimerButton({
//     $target:$app,
//     text:'10초뒤 자동으로!',
//     timer:1000*10
// })