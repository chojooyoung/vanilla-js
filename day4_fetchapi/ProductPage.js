/* 구조
{
    productID:1
    product: Product,
    optionData:[]
    selectedOptions:[]
}



*/
import { request} from "./api.js"
import Cart from "./Cart.js"
import ProductOptions from "./ProductOptions.js"

export default function ProductPage({
    $target,
    initialState

})
{
    const $product = document.createElement('div')
    
    $target.appendChild($product)
    
    this.state=initialState

    const productOptions =new ProductOptions({
        $target: $product,
        initialState:[],
        onSelect:(option)=>{
            const nextState={...this.state}
            const{selectedOptions}=this.state

            const selectedOptionIndex=selectedOptions.findIndex(selectedOption=>selectedOption.optionId===option.optionId)

            if(selectedOptionIndex>-1){
                nextState.selectedOptions[selectedOptionIndex].ea++

                
            }
            else{
                nextState.selectedOptions.push({
                    optionId: option.optionId,
                    optionName:option.optionName,
                    optionPrice:option.optionPrice,
                    ea:1
                })
            }
            this.setState(nextState)
                      
        }
    })

    const cart = new Cart({
        $target: $product,
        initialState:{
            productName:'',
            basePrice:0,
            selectedOptions:[]
        },
        onRemove:(seletedOptionIndex)=>{
            const nextState = {...this.state}
            nextState.selectedOptions.splice(seletedOptionIndex,1)

            this.setState(nextState)
        }
    })

    this.setState=nextState=>{
        if(nextState.productId!== this.state.productId){
            fetchOptionData(nextState.productId)
            return
        }
        this.state=nextState

        const {product, selectedOptions,optionData}=this.state

        productOptions.setState(optionData)
        cart.setState({
            productName:product.name,
            basePrice:product.basePrice,
            selectedOptions:selectedOptions
        })
    

        }

    this.render = ()=>{}
    this.render()

    const fetchOptionData=(productId)=>{
        return request(`/products/${productId}`)
         .then(product=>{
             this.setState({
                 ...this.state,
                 product,
                 optionData:[],
                 selectedOptions:[]
             })
             return request(`product-options?product.id=${product.id}`)
        })
        .then(ProductOptions=> {
            return Promise.all([
                Promise.resolve(ProductOptions),
                Promise.all(
                    ProductOptions.map(ProductOptions=>ProductOptions.id).map(id=>{
                    return   request(`/product-option-stocks?productOption.id=${id}`)
                    })
                )
            ])
        })
        .then(data=>{
            const [productOptions,stocks]=data
    
            const optionData = productOptions.map((productOption,i)=>{
                const stock = stocks[i][0].stock
                return{
                    optionId: productOption.id,
                    optionName: productOption.optionName,
                    optionPrice: productOption.optionPrice,
                    stock
    
                }
            })
            this.setState({
                ...this.state,
                optionData

            })
    
        })
    
    }
    fetchOptionData(this.state.productId)
}