import React, { useState } from "react";
import "../styles/components/header.css";
import header__logo from "../assets/img/header__logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";

function Header() {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="header">
      <div className="header__top">
        <div className="header__icon">
          <img src={header__logo} alt="" />
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
            <div className="header__top-right-option">
              <span className="header__top-right-option-lineOne">
                Hello, Guest
              </span>
              <span className="header__top-right-option-lineTwo">Sign In</span>
            </div>
            <div className="header__top-right-option">
              <span className="header__top-right-option-lineOne">
                Returns &amp;
              </span>
              <span className="header__top-right-option-lineTwo">Orders</span>
            </div>
          </div>
          <div className="header__top-right-basket">
            <span className="header__top-right-basket-amount">0</span>
            <BsCart3 />
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <div className="header__bottom-option">Light Novels</div>
        <div className="header__bottom-option">Manga</div>
        <div className="header__bottom-option">Anime</div>
        <div className="header__bottom-option">Hentai</div>
      </div>
    </div>
  );
}

export default Header;
