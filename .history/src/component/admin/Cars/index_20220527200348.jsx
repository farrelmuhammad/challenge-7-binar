
import { Link } from "react-router-dom";
import "./Content.css";

const CarsListContent= () => {
    const dataOrder = [
        {
          id: "1",
          email: "admin@admin.com",
          car: "Innova",
          start: "05-05-2022",
          finish: "08-05-2022",
          price: "Rp 300.000,00",
          status: "Done",
        },
        {
          id: "2",
          email: "admin@admin.com",
          car: "Innova",
          start: "05-05-2022",
          finish: "08-05-2022",
          price: "Rp 300.000,00",
          status: "Done",
        },
        {
          id: "3",
          email: "admin@admin.com",
          car: "Innova",
          start: "05-05-2022",
          finish: "08-05-2022",
          price: "Rp 300.000,00",
          status: "Done",
        },
        {
          id: "4",
          email: "admin@admin.com",
          car: "Innova",
          start: "05-05-2022",
          finish: "08-05-2022",
          price: "Rp 300.000,00",
          status: "Done",
        },
        {
          id: "5",
          email: "admin@admin.com",
          car: "Innova",
          start: "05-05-2022",
          finish: "08-05-2022",
          price: "Rp 300.000,00",
          status: "Done",
        },
      ];

  return (
    <>
      <div className="content">
        <div className="breadcrumb">
          <h1>Cars</h1>
          <img src="img/arrow-right.svg" alt="arrow-right" />
          <p>List Car</p>
        </div>
        <div className="row">
            <div className="col">
                <h1 className="title-h1">List Car</h1>
            </div>
            <div className="col mt-5 p-3 text-end">
                <img src="img/btn-addcar.svg" alt="add new"/>
            </div>
        </div>
        <div className="breadcumb ms-3 p-1">
          <img src="img/breadcumb carlist.svg" alt="" />
        </div>

        {/* order table */}
        <div className="container-car">
            {dataOrder?.map((order, i) => (
                <div key={order.id} className="card">
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="info">
                        <h6>asdada</h6>
                        <h6 className="price">Rp. {order.price} / hari</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, molestias ab dolorum velit numquam dignissimos accusantium.</p>
                        <ul>
                            <li>4 Orang</li>
                            <li>Manual</li>
                            <li>Tahun 2020</li>
                        </ul>
                        <div className="row">
                            <div className="col text-start">
                                <Link to='/' className="btn btn-outline-danger d-block">Delete</Link>
                            </div>
                            <div className="col text-end">
                                <Link to='/' className="btn btn-success text-white d-block">Edit</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
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

        <div className="list-car">
          <img src="img/line-blue.svg" alt="" />
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
  );
};

export default CarsListContent
