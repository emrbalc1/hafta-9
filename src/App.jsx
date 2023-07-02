import React, { useRef, useState } from 'react';

const App = () => {
  const [sayac, sayacGuncelle] = useState(0);
  const tiklamaReferans = useRef(0);

  const sayiArttir = () => {
    tiklamaReferans.current += 1;
    sayacGuncelle(tiklamaReferans.current);
  };

  return (
    <div>
      <button onClick={sayiArttir}>Artır</button>
      <p>Tıklama Sayısı: {sayac}</p>
    </div>
  );
};

export default App;
