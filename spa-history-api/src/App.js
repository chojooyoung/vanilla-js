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
        const {pathname}= location

        $target.innerHTML=''

        if(pathname==='/'){
            //home rendering
            homePage.render()
            return
        }     
        else if(pathname==='/list'){
            listPage.render()
            return
            // list rendering
        }
        else if(pathname.includes('/detail')){
            detailPage.render()
            return
            //list rendering
        }
        else{
            //not found page
        }
    }

    this.render()
    window.addEventListener('click', e=>{
        if(e.target.className ==='link'){
            const href = e.target.getAttribute('href')
            history.pushState(null,null,href)

            console.log(href)
            e.preventDefault()
            
            this.render()
   
         }     
        })
    
}