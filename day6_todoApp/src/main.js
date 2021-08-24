import App from "./App.js"

const DUMMY_DATA=[
    {
        _id:1,
        content: 'JavaScrpt 학습하기',
        isCompleted:true
    },
    {
        _id:2,
        content:'JavaScript 복습하기',
        isCompleted:true
    }
]

const $target =document.querySelector('#app')
new App({$target})
