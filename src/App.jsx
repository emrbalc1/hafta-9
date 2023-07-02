import { useRef } from "react"

const App = () => {

    const eleman1 = useRef()

    const baslikGuncelle = ()=> {
        document.title = eleman1.current.value
    }

    return (
        <>
            <input type="text" ref={eleman1}/>
            <button onClick={baslikGuncelle}>Başlık Güncelle</button>
        </>
    )
}

export default App