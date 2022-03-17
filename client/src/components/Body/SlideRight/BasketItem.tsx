import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import ISliderItem from "../../../types/SliderItem";
import "../../../styles/components/SlideRight/basketItem.css";
import { removeFromBasketToken } from "../../../logic/basket";
import { useDispatch } from "react-redux";
import { removeFromBasketAction } from "../../../redux/slice";
import { Link } from 'react-router-dom';

function BasketItem({
  image,
  link,
  name,
  rating,
  price,
  id,
}: {
  image: ISliderItem["image"];
  link: ISliderItem["link"];
  name: ISliderItem["name"];
  rating: ISliderItem["rating"];
  price: ISliderItem["price"];
  id: number;
}) {
  const dispatch = useDispatch();
  const [removeClass, setRemoveClass] = useState<boolean>();

  const renderRating = (): JSX.Element[] => {
    var arr: JSX.Element[] = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        arr.push(<AiFillStar className="basketItem__item-golden" key={i} />);
      } else {
        arr.push(<AiFillStar key={i} />);
      }
    }
    return arr;
  };

  const removeFromBasket = (): void => {
    const basket = localStorage.getItem("basket");
    if (basket) {
      setRemoveClass(true);
      setTimeout(() => {
        const basketP = JSON.parse(basket);
        const itemId = basketP[id].id;
        dispatch(removeFromBasketAction(itemId));
        removeFromBasketToken(id);
        setRemoveClass(false);
      }, 400);
    }
  };
  return (
    <div
      className={`basketItem__container ${
        removeClass ? "basketItem__container-remove" : ""
      }`}
    >
      <div className="basketItem__item-title">{name}</div>
      <div className="basketItem__item-image">
        <img src={image} alt={name} />
      </div>
      <div className="basketItem__item-info">
        <span className="basketItem__item-price">$ {price}</span>
        <span className="basketItem__item-rating">{renderRating()}</span>
      </div>
      <button className="basketItem__item-btn" onClick={removeFromBasket}>
        Remove
      </button>
    </div>
  );
}

export default BasketItem;
