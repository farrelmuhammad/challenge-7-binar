import React from 'react'

function footer() {
    return (
        <div className='footer'>
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-3">
                        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-332-808</p>
                    </div>
                    <div className="col-sm-3">
                        <a href="/" className="nav-link text-dark">Our Services</a>
                        <a href="/" className="nav-link text-dark">Why Us</a>
                        <a href="/" className="nav-link text-dark">Testimonial</a>
                        <a href="/" className="nav-link text-dark">FAQ</a>
                    </div>
                    <div className="col-sm-3">
                        <p>Connect with us</p>
                        <a href="/" className="px-1"><i className="bi bi-facebook"></i></a>
                        <a href="/" className="px-1"><i className="bi bi-instagram"></i></a>
                        <a href="/" className="px-1"><i className="bi bi-twitter"></i></a>
                        <a href="/" className="px-1"><i className="bi bi-envelope-fill"></i></a>
                        <a href="/" className="px-1"><i className="bi bi-twitch"></i></a>
                    </div>
                    <div className="col-sm-3">
                        <p>Copyright Binar 2022</p>
                        <div className="logo"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer