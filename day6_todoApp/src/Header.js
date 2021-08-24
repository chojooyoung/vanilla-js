export default function Header({
    $target,
    initialState
})

{
    const $h2 = document.createElement('h2')
    $target.appendChild($h2)
    this.state=initialState

    this.setState=nextState=>{
        this.state=nextState
        this.render()
    }

    this.render=()=>{
        const {selectedUserusername,isLoading}=this.state

        if(!selectedUserusername){
            $h2.innerHTML=''
            return
        }
        $h2.innerHTML=`${selectedUserusername}님의 할일 목록 ${isLoading ? '로딩중..' : ''}`
    }

    this.render()
}