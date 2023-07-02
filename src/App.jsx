import { useEffect, useState } from "react"

const App = ()=>{
  const [saniye, saniyeGuncelle] = useState(0)

  useEffect( ()=> {
    const zamanlayici = setInterval( ()=>{
      saniyeGuncelle(oncekiDeger=>oncekiDeger+1)
    }, 1000 )

    return ()=>{
      clearInterval(zamanlayici)
    }
  }, [] )

  return (
    <p>{saniye}</p>
  )
}

export default App