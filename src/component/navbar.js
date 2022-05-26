import React from 'react'

const navbar = () => {
    return (
        <div className='header'>
            <div className='container'>
                <nav className="navbar py-4 navbar-fixed-top">
                    <div className="logo"></div>
                    <ul className="nav">
                        <li className="nav-item"><a href="#our-services" className="nav-link text-dark">Our Services</a></li>
                        <li className="nav-item"><a href="#why-us" className="nav-link text-dark">Why Us</a></li>
                        <li className="nav-item"><a href="#testimonial" className="nav-link text-dark">Testimonial</a></li>
                        <li className="nav-item"><a href="#faq" className="nav-link text-dark">FAQ</a></li>
                        <li className="nav-item pl-3"><a href="/" className="btn btn-sm btn-success nav-link text-white">Register</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default navbar