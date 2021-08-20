//버튼을 3개를 만든다.
const $button1 = document.createElement('button');
$button1.textContent='Button1';

const $button2 = document.createElement('button');
$button2.textContent='Button2';

const $button3 = document.createElement('button');
$button3.textContent='Button3';


//만든 버튼을 화면에 그린다.
const $main = document.querySelector('#app')
$main.appendChild($button1)
$main.appendChild($button2)
$main.appendChild($button3)


document.querySelectorAll('button').forEach(
    $button=>{
    $button.addEventListener('click',(e)=>{
        const { target } = e
        if(target.style.textDecoration ==='line-through'){
            target.style.textDecoration='none'
        }
        else{
            target.style.textDecoration='line-through'
     }

    }
    )})

//버튼을 클릭하면 삭선이 생기고 사라진다.
$button1.addEventListener('click', ()=>{
    if($button1.style.textDecoration==='line-through'){
        $button1.style.textDecoration='none'
    }
    else{
        $button1.style.textDecoration='line-through'
    }
})
$button2.addEventListener('click', ()=>{
    if($button2.style.textDecoration==='line-through'){
        $button2.style.textDecoration='none'
    }
    else{
        $button2.style.textDecoration='line-through'
    }
})
$button3.addEventListener('click', ()=>{
    if($button3.style.textDecoration==='line-through'){
        $button3.style.textDecoration='none'
    }
    else{
        $button3.style.textDecoration='line-through'
    }
})

//버튼을 클릭하면 삭선이 사라진다.