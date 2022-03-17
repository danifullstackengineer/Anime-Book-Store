import React, { useEffect, useState, useRef } from "react";
import "../styles/components/header.css";
import header__logo from "../assets/img/header__logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { authJWT } from "../AJAX/credential";
import jwt from "jwt-decode";
import { addAllItemsToBasket, logoutAction } from "../redux/slice";
import { useDispatch } from "react-redux";
import { store } from "../index";
import Dropdown from "./Header/Dropdown";

function Header({
  clickedBasket,
  setClickedBasket,
}: {
  clickedBasket: boolean | undefined;
  setClickedBasket: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}) {
  const dispatch = useDispatch();

  const [ignoreBasket, setIgnoreBasket] = useState<string[]>(["/checkout"]);

  const [genres, setGenres] = useState<{ link: string; name: string }[]>([
    { link: "./lightnovels/genre=action", name: "Action" },
    { link: "./lightnovels/genre=fantasy", name: "Fantasy" },
    { link: "./lightnovels/genre=isekai", name: "Isekai" },
    { link: "./lightnovels/genre=dark-fantasy", name: "Dark Fantasy" },
    { link: "./lightnovels/genre=high-fantasy", name: "High Fantasy" },
    {
      link: "./lightnovels/genre=sword-and-sorcery",
      name: "Sword and Sorcery",
    },
    { link: "./lightnovels/genre=horror", name: "Horror" },
    { link: "./lightnovels/genre=comedy", name: "Comedy" },
    { link: "./lightnovels/genre=adventure", name: "Adventure" },
    { link: "./lightnovels/genre=martial-arts", name: "Martial Arts" },
    { link: "./lightnovels/genre=drama", name: "Drama" },
    { link: "./lightnovels/genre=harem", name: "Harem" },
  ]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      authJWT().then((res) => {
        if (res.success && token) {
          const data: { id: string } = jwt(token);
        }
      });
    }
  }, []);

  useEffect(() => {
    const basket = localStorage.getItem("basket");
    if (basket) {
      const basketP = JSON.parse(basket);
      dispatch(addAllItemsToBasket(basketP));
    }
  }, []);

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
  const showCart = (): void => {
    if (!ignoreBasket.includes(window.location.pathname)) {
      setClickedBasket(!clickedBasket);
    }
  };

  const logout = () => {
    dispatch(logoutAction());
    localStorage.removeItem("token");
  };

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
            <div
              className="header__top-right-option"
              onClick={store.getState().user.email ? logout : navigateToLogin}
            >
              <span className="header__top-right-option-lineOne">
                {store.getState().user.email
                  ? "Hello, " + store.getState().user.email?.substring(0, 4)
                  : "Hello, Guest"}
              </span>
              <span className="header__top-right-option-lineTwo">
                {store.getState().user.email ? "Sign Out" : "Sign In"}
              </span>
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
            <span className="header__top-right-basket-amount">
              {store.getState().user.basket.length}
            </span>
            <BsCart3 className="header__top-right-basket-icon" />
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <Dropdown genres={genres} name={"Light Novels"} />
        <Dropdown genres={genres} name={"Manga"} />
        <Dropdown genres={genres} name={"Anime"} />
        <Dropdown genres={genres} name={"Hentai"} special={true}/>
      </div>
    </div>
  );
}

export default Header;
