import Nav from "./Nav.js"
import ProductDetail from "./ProductDetail.js"

export default function DetailPage({$target}){
    const $page= document.createElement('div')
    const getProductID = ()=>{
        const{pathname}=location
        const [ , , productId]=pathname.split('/')
        return productId
    }


    new Nav({$target:$page})
    const productDetail = new ProductDetail({$target:$page,initialState:{
        productId:getProductID()
    }})

    this.render=()=>{
        productDetail.setState({
            productId:getProductID()
        })
        $target.appendChild($page)
    }
}