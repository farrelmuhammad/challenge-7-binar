import React from 'react'
import Dropzone from 'react-dropzone'

export const AddCar = () => {
  return (
    <>
            <div className="content">
                <div className="breadcrumb">
                <h1>Cars</h1>
                <img src="../img/arrow-right.svg" alt="arrow-right" />
                <p>List Car</p>
                </div>
                <div className="col">
                    <h1 className="title-h1">Add New Car</h1>
                </div>
                
                
        
                <form className="form-input shadow-lg p-3 m-3 bg-body rounded">
                        <div className="row mb-3">
                            <label for="inputKode3" className="col-sm-2 col-form-label">Nama</label>
                            <div className="col-sm-6">
                            <input type="kode" className="form-control" id="inputKode3"/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Harga</label>
                            <div className="col-sm-6">
                            <input type="kode" className="form-control" id="inputKode3"/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="exampleFormControlFile1">Foto</label>
                            <div className="col-sm-6">
                            <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Start Rent</label>
                            <div className="col-sm-6">
                            -
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Finish Rent</label>
                            <div className="col-sm-6">
                            -
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Created At</label>
                            <div className="col-sm-6">
                            -
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Update At</label>
                            <div className="col-sm-6">
                            -
                            </div>
                        </div>
                        
                </form>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start ms-3">
                            <button className="btn btn-outline-primary" type="button">Cancel</button>
                            <button className="btn btn-primary" type="button">Simpan</button>
                        </div>
        
                {/* table navigation */}
               
            </div>
            </>
  )
}

export default AddCar