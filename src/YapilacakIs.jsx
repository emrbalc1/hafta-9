import { useState } from "react"

const YapilacakIs = ({isAdi, isDurumu})=> {
    const [is, isGuncelle] = useState({baslik:isAdi, durum: isDurumu })

    const durumDegistir = ()=>{
        console.log("durum değiştirilecek")
        
        isGuncelle({...is, durum: !is.durum})
    }

    return (
        <p onClick={durumDegistir}>{is.baslik} {is.durum && "✔"}</p>
    )
}

export default YapilacakIs