import { useEffect, useRef, useState } from "react"
import urunler from "./urunler"

const App = ()=> {
   const aramaRef = useRef(null)
   const [urunArray, urunArrayGuncelle] = useState(null)
   const [stokFiltre, stokFiltreGuncelle] = useState(true)

    useEffect( ()=>{
        urunArrayGuncelle(urunler)
    }, [] )

    const aramaYap = (olay)=> {
        const arananIfade = olay.target.value
        const filtrelenmisUrunler = urunler.filter( (eleman)=>eleman.ad.includes(arananIfade) )

        urunArrayGuncelle(filtrelenmisUrunler)
    }

    const stokFiltrele = ()=>{
        stokFiltreGuncelle(!stokFiltre)

        if( stokFiltre === true ) {
            const filtrelenmisUrunler = urunArray.filter( (eleman)=>eleman.stok !== 0 )
            urunArrayGuncelle(filtrelenmisUrunler)
        } else {
            //stok filtre checkbox true, tüm ürünler gözüksün
            if( aramaRef.current.value !== "") {
                const arananIfade = aramaRef.current.value
                const filtrelenmisUrunler = urunler.filter( (eleman)=>{
                    if (stokFiltre === false) {
                        return eleman.ad.includes(arananIfade) && eleman.stok > 0

                    } else {
                        return eleman.ad.includes(arananIfade) 
                    }
                    
                } )

                urunArrayGuncelle(filtrelenmisUrunler)
            } else {
                urunArrayGuncelle(urunler)
            }

            
        }
        
    }

    return (
        <>
            <input ref={aramaRef} type="text" onChange={aramaYap} /> 

            <input type="checkbox" onClick={stokFiltrele} checked={stokFiltre} /> Stokta olmayanları göster

            {urunArray && urunArray.map(  (eleman)=>{ return <p key={eleman.id}>{eleman.ad}</p> }  )}
        </>
    )
}

export default App