import React from 'react'
import carHeaderImg from '../images/img_car.png'

function header() {
    return (
        <div className='header'>
            <div className="container">
                <div className="d-flex flex-lg-row flex-column">
                    <div className='pt-lg-5'>
                        <h2 className="fw-bold pb-3">Sewa & Rental Mobil Terbaik di kawasan Sidoarjo</h2>
                        <p className="text-justify w-75">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                            terbaik
                            dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                        <a href="/cars" className="btn btn-success text-white">Mulai Sewa Mobil</a>
                    </div>
                    <img src={carHeaderImg} className="img-fluid " alt="Mobil mercedes" width="100%" />
                </div>
            </div>
        </div>
    )
}

export default header