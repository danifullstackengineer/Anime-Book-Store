import React, { useState } from "react";
import "../styles/components/header.css";
import header__logo from "../assets/img/header__logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const navigateToLogin = (): void => {
    navigate("/login");
  };

  const navigateToOrdersAndReturns = (): void => {
    navigate("/orders");
  };
  const showCart = (): void => {};

  return (
    <div className="header">
      <div className="header__top">
        <div className="header__icon">
          <Link to="/">
            <img src={header__logo} alt="" />
          </Link>
        </div>
        <div className="header__search">
          <input
            type="text"
            name="search"
            value={search}
            onChange={handleChange}
            placeholder="Search Light Novels, Manga, authors, ISBNs"
          />
          <AiOutlineSearch className="header__searchIcon" />
        </div>
        <div className="header__top-right">
          <div className="header__top-right-options">
            <div className="header__top-right-option" onClick={navigateToLogin}>
              <span className="header__top-right-option-lineOne">
                Hello, Guest
              </span>
              <span className="header__top-right-option-lineTwo">Sign In</span>
            </div>
            <div
              className="header__top-right-option"
              onClick={navigateToOrdersAndReturns}
            >
              <span className="header__top-right-option-lineOne">
                Returns &amp;
              </span>
              <span className="header__top-right-option-lineTwo">Orders</span>
            </div>
          </div>
          <div className="header__top-right-basket" onClick={showCart}>
            <span className="header__top-right-basket-amount">0</span>
            <BsCart3 className="header__top-right-basket-icon" />
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <div
          className="header__bottom-option"
          onClick={() => navigate("/lightnovels")}
        >
          Light Novels
        </div>
        <div
          className="header__bottom-option"
          onClick={() => navigate("/manga")}
        >
          Manga
        </div>
        <div
          className="header__bottom-option"
          onClick={() => navigate("/anime")}
        >
          Anime
        </div>
        <div
          className="header__bottom-option"
          onClick={() => navigate("/hentai")}
        >
          Hentai
        </div>
      </div>
    </div>
  );
}

export default Header;
