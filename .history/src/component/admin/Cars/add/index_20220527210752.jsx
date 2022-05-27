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
                
                
        
                <form className="container-list shadow-lg p-3 m-3 bg-body rounded d-flex flex-column" style={{width: '100%', height: '100'}}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
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