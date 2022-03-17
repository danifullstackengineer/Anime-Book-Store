import React from "react";
import ISliderItem from "../../../types/SliderItem";
import "../../../styles/components/Checkout/checkoutItem.css";
import { AiFillStar } from "react-icons/ai";
import { removeFromBasketTokenNormalId } from "../../../logic/basket";
import { removeFromBasketAction } from "../../../redux/slice";
import { useDispatch } from "react-redux";

function CheckoutItem({
  image,
  link,
  name,
  rating,
  price,
  genre,
  description,
  id,
}: {
  image: ISliderItem["image"];
  link: ISliderItem["link"];
  name: ISliderItem["name"];
  rating: ISliderItem["rating"];
  price: ISliderItem["price"];
  genre: ISliderItem["genre"];
  description: ISliderItem["description"];
  id: number;
}) {
  const dispatch = useDispatch();

  const renderRating = (): JSX.Element[] => {
    var arr: JSX.Element[] = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        arr.push(<AiFillStar className="checkoutItem__star" key={i} />);
      } else {
        arr.push(<AiFillStar key={i} />);
      }
    }
    return arr;
  };

  const removeItem = (): void => {
    const basket = localStorage.getItem("basket");
    if (basket) {
      dispatch(removeFromBasketAction(id));
      removeFromBasketTokenNormalId(id);
    }
  };

  return (
    <div className="checkoutItem">
      <div className="checkoutItem__title">{name}</div>
      <div className="checkoutItem__content">
        <img src={image} alt={name} />
        <div className="checkoutItem__content-right">
          <span className="checkoutItem__description">{description}</span>
          <div className="checkoutItem__bottom">
            <div className="checkoutItem__left">
              <span>
                Genre:{" "}
                {genre.map((genres, i) => {
                  if (i === genre.length - 1) {
                    return genres;
                  } else {
                    return genres + ", ";
                  }
                })}
              </span>
              <span>
                Price: <strong>$ {price}</strong>
              </span>
              <span className="checkoutItem__star">
                Rating: {renderRating()}
              </span>
            </div>
            <div className="checkoutItem__remove">
              <button onClick={removeItem}>Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutItem;
