import React from 'react'
import { Link } from 'react-router-dom'

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
                
                
        
                {/* order table */}
                <div className="container-input">
                    
                </div>
        
               
        
                {/* table navigation */}
                <div className="table-nav">
                <div className="limit-nav">
                    <p>Limit</p>
                    <img src="img/form-drop.svg" alt="form-drop" />
                </div>
                <div className="jump-nav">
                    <p>Jump to page</p>
                    <img src="img/form-drop-2.svg" alt="form-drop-2" />
                </div>
                <div className="go-nav">
                    <h1>Go</h1>
                </div>
                <div className="page-number">
                    <img src="img/page-number.svg" alt="page-number" />
                </div>
                </div>
            </div>
            </>
  )
}

export default AddCar