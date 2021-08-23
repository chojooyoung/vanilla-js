import { request } from "./api.js"

export default function HomePage({$target}){
    const $page = document.createElement('div')

    this.state=[]


    this.render=()=>{
        fetchProducts().then(products=>{
            $page.innerHTML=
            `
            <ul>
            ${products.map(product=> `<li><a class="link" href="/products/${product.id}">${product.name}</a><li>`).join('')}
            
            </ul>`

        })
        $target.appendChild($page)
    }

    const fetchProducts=()=>{
        return request('/products')
        // .then(products=>{
        //     this.setState(products)
        // })

    }
}