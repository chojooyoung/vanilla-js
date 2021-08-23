export default function ProductOptions({ $target, initialState, onSelect
})//initialstate를이요여해서 외부에서 데이터를 넣을때 테스트 
//상품이 선택됫을떄 onselect
{
    const $select = document.createElement('select')
    $target.appendChild($select)
    /* 
    상품옵션 이름 렌더링 시 상품명 + 옵션명 + 재고:n개 이런 형식으로 보여주여야 함
    재고가 0인 상품의 경우 옵션을 선택하지 못하게 함
    실제 이커머스 규모가 커지면 옵션데이터와  재고데이터를 나눠서 
    옵션데이터를 캐싱하고, 재고는 리얼타임으로 바뀌니까 분리!
    */
    this.state=initialState

    this.setState=(nextState)=>{
        this.state=nextState
        this.render()
    }

    const createOptionFullName=({optionName, optionPrice,stock})=>{
        return `${optionName} ${optionPrice>0 ? `(옵션가 ${optionPrice}` :''} | ${stock>0 ? `재고 ${stock}`:'재고없음'}}`
    }

    $select.addEventListener('change', (e)=>{
        const optionId = parseInt(e.target.value)
        const option = this.state.find(option => option.optionId===optionId)
        if(option){
            onSelect(option)
        }

    })

    this.render= ()=>{
        //검사
        if(this.state && Array.isArray(this.state)){
            $select.innerHTML=`
            <option>선택하세요</option>
            ${this.state.map(option => `<option ${option.stock ===0 ? 'disabled':'' } value="${option.optionId}">${createOptionFullName(option)}</option>`).join('')}
            `
        }

    }
    this.render()

}