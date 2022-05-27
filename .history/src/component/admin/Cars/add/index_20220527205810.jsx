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
                
        
                <div className="list-car">
                <img src="../img/line-blue.svg" alt="" />
                <h1>List Car</h1>
                </div>
                {/* car table */}
                <div className="list-table">
                <table className="table table-borderless">
                    <thead>
                    <tr>
                        <th style={{ textAlign: "center" }}>No</th>
                        <th>
                        Name
                        <img className="sort" src="img/sort.svg" alt="sort" />
                        </th>
                        <th>
                        Category
                        <img className="sort" src="img/sort.svg" alt="sort" />
                        </th>
                        <th>
                        Price
                        <img className="sort" src="img/sort.svg" alt="sort" />
                        </th>
                        <th>
                        Start Rent
                        <img className="sort" src="img/sort.svg" alt="sort" />
                        </th>
                        <th>
                        Finish Rent
                        <img className="sort" src="img/sort.svg" alt="sort" />
                        </th>
                        <th>
                        Created at
                        <img className="sort" src="img/sort.svg" alt="sort" />
                        </th>
                        <th>
                        Updated at
                        <img className="sort" src="img/sort.svg" alt="sort" />
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* {dataCarAdmin?.map((car, i) => (
                        <>
                        <tr>
                            <td key={car.id} style={{ textAlign: "center" }}>
                            {i + 1}
                            </td>
                            <td>{car.name}</td>
                            <td>{car.category}</td>
                            <td>{car.price}</td>
                            <td>{car.start_rent_at}</td>
                            <td>{car.finish_rent_at}</td>
                            <td>{car.createdAt}</td>
                            <td>{car.updatedAt}</td>
                        </tr>
                        </>
                    ))} */}
                    </tbody>
                </table>
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