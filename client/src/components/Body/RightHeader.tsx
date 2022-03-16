import React, { useEffect, useState } from "react";
import "../../styles/components/rightheader.css";
import { store } from "../../index";
import { AiFillStar } from "react-icons/ai";
import BasketItem from "./SlideRight/BasketItem";
import ISliderItem from "../../types/SliderItem";
import { useNavigate } from "react-router-dom";
import { getBasketTotal } from "../../redux/slice";

function RightHeader({
  clickedBasket,
}: {
  clickedBasket: boolean | undefined;
}) {
  const navigate = useNavigate();

  return (
    <div
      className={`rightHeader ${
        clickedBasket !== undefined
          ? clickedBasket === true
            ? "rightHeader__clicked"
            : "rightHeader__unclicked"
          : ""
      }`}
    >
      <div className="rightHeader__title">Basket</div>
      {store.getState().user.basket.map((item: ISliderItem, i) => {
        return (
          <BasketItem
            id={i}
            key={i}
            image={item.image}
            link={item.link}
            name={item.name}
            rating={item.rating}
            price={item.price}
          />
        );
      })}
      <div className="rightHeader__info">
        <div className="rightHeader__total">
          <span>Total is:</span>{" "}
          <span>$ {getBasketTotal(store.getState().user.basket)}</span>
        </div>
        <button
          className="rightHeader__btn"
          onClick={() => navigate("/checkout")}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default RightHeader;
