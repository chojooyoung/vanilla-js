import HomePage from "./HomePage.js"
import ListPage from "./ListPage.js"
import DetailPage from "./DetailPage.js"

export  default function App({$target}){



    // $target.innerHTML=`
    // <a href="/">Home</a>
    // <a href="/#List">List</a>
    // <a href="/#detail">Detail</a>
    
    
    // `
    const homePage = new HomePage({$target})
    const listPage =new ListPage({$target})
    const detailPage=new DetailPage({$target})


    this.render = ()=>{
        const {hash}= window.location
        $target.innerHTML=''

        if(hash===''){
            //home rendering
            homePage.render()
            return
        }     
        else if(hash==='#list'){
            listPage.render()
            return
            // list rendering
        }
        else if(hash.includes('#detail')){
            detailPage.render()
            return
            //list rendering
        }
        else{
            //not found page
        }
    }

    this.render()
    window.addEventListener('hashchange', ()=>{
        this.render()
    })
}