import React from 'react'
import { Button } from 'react-bootstrap';
import done from '../assests/done.png';

export default function PageEnd() {
    return (
        <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <p>Yeaayy !!!</p>
            <p>Pengajuan berkas klaim telah berhasil dikirim.</p>
            <p>Silakan menunggu verifikasi dan informasi selanjutnya</p>
            <img src={done} style={{ width: '20%', height: '20%', marginTop: 40 }} />
            <div>
            <Button style={{backgroundColor:'white', color: '#0D6EFD', marginTop:30}}  onClick={() => {
              window.location.href = '/';
            }}>Ke halaman awal</Button>
            </div>
        </div >
    )
}
