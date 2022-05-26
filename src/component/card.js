import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import carImg from '../images/car02.min.jpg'
import userImg from '../images/fi_users.svg'
import transImg from '../images/transmition.svg'
import yearImg from '../images/tahunproduksi.svg'

function card() {
  return (
    <div>
        <div className="card mb-4">
                <img
                  src={carImg}
                  className="card-img-top"
                  height="222px"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Ferrari</h5>
                  <h5><strong>200.000 /hari</strong></h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <p className="card-text">
                   <img className="me-2 mb-1" src={userImg} alt = "imgtemplate"></img>2 Orang
                  </p>
                  
                  <p className="card-text">
                   <img className="me-2" src={transImg} alt = "imgtemplate"></img>Automatic
                  </p>
                  <p className="card-text">
                    <img className="me-2" src={yearImg} alt = "imgtemplate"></img>Tahun 2000
                  </p>
                  <a href="#asd" className="btn btn-success btn-lg w-100">Pilih Mobil</a>
                </div>
              </div>
    </div>
  )
}

export default card