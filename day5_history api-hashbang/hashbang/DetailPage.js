import Nav from "./Nav.js"
import ProductDetail from "./ProductDetail.js"

export default function DetailPage({$target}){
    const $page= document.createElement('div')
    const getProductID = ()=>{
        const {hash} = window.location
        return hash.split('-')[1]
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