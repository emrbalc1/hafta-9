import React, { useRef, useState} from 'react';

const App = () => {
    const kutuRef = useRef(null);
    const [kutuBoyutu, kutuBoyutuGuncelle] = useState({ width: 0, height: 0 });

    const butonTiklandi = () => {
        const rastgeleGenislik = Math.floor(Math.random() * 300) + 50;
        const rastgeleYukseklik = Math.floor(Math.random() * 300) + 50;
        kutuBoyutuGuncelle({ width: rastgeleGenislik, height: rastgeleYukseklik });
    };

    return (
        <div>
            <button onClick={butonTiklandi}>Boyutu Değiştir</button>
            <div
                ref={kutuRef}
                style={{
                    width: kutuBoyutu.width,
                    height: kutuBoyutu.height,
                    background: 'red'
                }}
            ></div>
            <p>Genişlik: {kutuBoyutu.width}px</p>
            <p>Yükseklik: {kutuBoyutu.height}px</p>
        </div>
    );
};

export default App;
