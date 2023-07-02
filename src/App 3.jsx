import YapilacakIs from "./YapilacakIs"
import yapilacaklarListesi from "./yapilacaklar"

const App = ()=>{


    return (
        <>
            { yapilacaklarListesi.map( 
                (eleman)=>{ 
                    return <YapilacakIs key={eleman.id} isAdi={eleman.baslik} isDurumu={eleman.tamamlandi} />
                } 
            )}
        </>
    )
}

export default App
