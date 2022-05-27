import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      {/* navbar top */}
      <div className="nav-top navbar">
        <div className="logo"></div>
        <span
          className="icon-menu iconify"
          data-icon="charm:menu-hamburger"
          data-width="24"
        ></span>
        <form className="nav-search d-flex">
          <div className="box-search">
            <span
              className="iconify"
              data-icon="akar-icons:search"
              data-width="18"
            ></span>
            <input type="search" placeholder="Search" />
          </div>
          <button className="button-search" type="submit">
            Search
          </button>
        </form>
        <div className="profile">
          <img src="img/profile.svg" alt="profile" />
          <p>Unis Badri</p>
          <img className="dropdown" src="img/dropdown.svg" alt="dropdown" />
        </div>
      </div>

      {/* navbar side */}
      <div className="nav-side">
        <div className="nav-blue">
          <div className="square"></div>
          <div className="frame-menu">
            <div className="dash-img" id="active">
              <a href="/dashboard">
                <img src="/img/dashboard.svg" alt="dashboard" />
              </a>
              <a href="/dashboard">Dashboard</a>
            </div>
            <div className="dash-img">
              <Link top="/carlist">
              <a>
                <img src="/img/cars.svg" alt="cars" />
                Cars
              </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="nav-white">
          <div className="title-menu">
            <h1>DASHBOARD</h1>
          </div>
          <div className="list-menu">
            <h1>Dashboard</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;