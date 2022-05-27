import React from 'react'

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
                
                
        
                <form className="card shadow-lg p-3 mb-5 bg-body rounded">
                    <div className="text-title text-start mb-4">
                        <h3 className="title fw-bold">Buat Modul</h3>
                    </div>
                        <div className="row mb-3">
                            <label for="inputKode3" className="col-sm-2 col-form-label">Urutan</label>
                            <div className="col-sm-2">
                            <input type="kode" className="form-control" id="inputKode3"/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputNama3" className="col-sm-2 col-form-label">Modul</label>
                            <div className="col-sm-6">
                                <select id="disabledSelect" className="form-select">
                                    <option>Disabled select</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Nama</label>
                            <div className="col-sm-6">
                            <input type="kode" className="form-control" id="inputKode3"/>
                            </div>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button className="btn btn-success" type="button">Simpan</button>
                        </div>
                </form>
        
                {/* table navigation */}
                <div className="table-nav">
                <div className="limit-nav">
                    <p>Limit</p>
                    <img src="../img/form-drop.svg" alt="form-drop" />
                </div>
                <div className="jump-nav">
                    <p>Jump to page</p>
                    <img src="../img/form-drop-2.svg" alt="form-drop-2" />
                </div>
                <div className="go-nav">
                    <h1>Go</h1>
                </div>
                <div className="page-number">
                    <img src="../img/page-number.svg" alt="page-number" />
                </div>
                </div>
        
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