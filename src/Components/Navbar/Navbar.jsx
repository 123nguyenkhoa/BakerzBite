import React, { useContext, useEffect, useState, useRef } from "react";
import "./Navbar.css";
import logo from "../Assets/logo-1.jpg";
import cart_icon from "../Assets/cart_icon.png";
import visitor from "../Assets/visitor-icon.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import all_product from "../Assets/all_product";
import { auth, signOut } from "../../FireBase/FireBase";

const Navbar = ({ userAvatar }) => {
  const { getTotalCartItems } = useContext(ShopContext);
  const [visitorCount, setVisitorCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const navbarRef = useRef(null);
  const searchBoxRef = useRef(null);
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [user, setUser] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const countKey = "visitorCount";
    let count = localStorage.getItem(countKey);

    if (count === null) {
      count = 0;
    } else {
      count = parseInt(count);
    }

    count += 1;
    localStorage.setItem(countKey, count);
    setVisitorCount(count);

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSearchClick = () => {
    searchBoxRef.current.classList.toggle("active");
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const results = all_product.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
    window.scrollTo(0, 0);
    setSearchTerm("");
    setSearchResults([]);
    searchBoxRef.current.classList.remove("active");
  };

  useEffect(() => {
    function handleOutsideClick(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setSearchResults([]);
        setSearchTerm("");
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className="navbar-container" ref={navbarRef}>
      <div className="navbar-1">
        <div className="nav-logo">
          <img src={logo} alt="Bakerz Bite Logo" />
          <p>Bakerz Bite</p>
        </div>
        <div className="menu-toggle" onClick={() => setShowMenu(!showMenu)}>
          <i
            className={`uil ${showMenu ? "uil-times" : "uil-bars"} menu-icon`}
          ></i>
        </div>
        <div className={`menu-slide ${showMenu ? "active" : ""}`}>
          <ul className="nav-menu">
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/home"
                onClick={(e) => {
                  if (location.pathname === "/home") {
                    e.preventDefault();
                  }
                }}
              >
                Home
              </Link>
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <Link style={{ textDecoration: "none" }} to="/menu">
                Menu
                <i
                  className={`uil ${
                    showDropdown ? "uil-angle-up" : "uil-angle-down"
                  } arrow`}
                ></i>
              </Link>
              {showDropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <Link style={{ textDecoration: "none" }} to="/pies">
                      Pies
                    </Link>
                  </li>
                  <li>
                    <Link style={{ textDecoration: "none" }} to="/cake">
                      Cake
                    </Link>
                  </li>
                  <li>
                    <Link style={{ textDecoration: "none" }} to="/cupcake">
                      Cupcake
                    </Link>
                  </li>
                  <li>
                    <Link style={{ textDecoration: "none" }} to="/cheesecake">
                      Cheesecake
                    </Link>
                  </li>
                  <li>
                    <Link style={{ textDecoration: "none" }} to="/brownies">
                      Brownies
                    </Link>
                  </li>
                  <li>
                    <Link style={{ textDecoration: "none" }} to="/desserts">
                      Desserts
                    </Link>
                  </li>
                  <li>
                    <Link style={{ textDecoration: "none" }} to="/drinking">
                      Drinking
                    </Link>
                  </li>
                  <li>
                    <Link style={{ textDecoration: "none" }} to="/merchandise">
                      Merchandise
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/gallery">
                Gallery
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/about us">
                About Us
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/contact us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-login-cart">
          {user ? (
            <div className="user-info">
              <img src={userAvatar} alt="Avatar" className="avatar" />
              <div className="dropdown">
                <button
                  className="dropdown-toggle"
                  onClick={() => setUserDropdown(!userDropdown)}
                >
                  Account{" "}
                  <i
                    className={`uil ${
                      userDropdown ? "uil-angle-up" : "uil-angle-down"
                    } arrow`}
                  ></i>
                </button>
                {userDropdown && (
                  <div className="dropdown-menu">
                    <Link to="/OrderHistory">
                      <button>Order History</button>
                    </Link>
                    <Link to="/MyCake">
                      <button>My Cake</button>
                    </Link>
                    <Link to="/RewardManager">
                      <button>User</button>
                    </Link>
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}
          <Link to="/cart">
            <img className="nav-cart-cart" src={cart_icon} alt="Cart" />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
          <div className="visitor-count">
            <img src={visitor} alt="Visitor Icon" />
            <div>{visitorCount}</div>
          </div>
        </div>
        <div className="search90">
          <span className="icon" onClick={handleSearchClick}>
            <i className="uil uil-search searchBtn"></i>
          </span>
        </div>
        <div className="searchBox" ref={searchBoxRef}>
          <input
            type="text"
            placeholder="Search Our Store"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <span className="icon" onClick={handleSearchClick}>
            <i className="uil uil-times closeBtn"></i>
          </span>
        </div>
      </div>
      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((product) => (
            <div
              key={product.id}
              className="search-result-item"
              onClick={() => handleProductClick(product)}
            >
              <img src={product.image} alt={product.name} />
              <div>
                <h4>{product.name}</h4>
                <div className="item-prices">
                  <div className="item-price-new">${product.new_price}</div>
                  <div className="item-price-old">${product.old_price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
