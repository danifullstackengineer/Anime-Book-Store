import React from "react";
import ISliderItem from "../../../types/SliderItem";
import "../../../styles/components/BodyContent/newArrivalItems.css";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToBasketAction } from "../../../redux/slice";
import { addToBasketToken } from "../../../logic/basket";
function NewArrivalItems({
  image,
  link,
  name,
  rating,
  price,
  genre,
  description,
  row,
  id
}: {
  image: ISliderItem["image"];
  link: ISliderItem["link"];
  name: ISliderItem["name"];
  rating: ISliderItem["rating"];
  price: ISliderItem["price"];
  genre: ISliderItem["genre"];
  description: ISliderItem["description"];
    row: number;
  id:number
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const renderRating = (): JSX.Element[] => {
    var arr: JSX.Element[] = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        arr.push(<AiFillStar className="bestItem__iconGolden" key={i} />);
      } else {
        arr.push(<AiFillStar key={i} />);
      }
    }
    return arr;
  };

  const addToBasket = (): void => {
    dispatch(
      addToBasketAction({
        id:id,
        image: image,
        link: link,
        name: name,
        rating: rating,
        price: price,
        genre: genre,
        description: description,
      })
    );
    addToBasketToken({
      image,
      link,
      name,
      rating,
      price,
      genre,
      description,
      id
    });
  };

  return (
    <div
      className={`newArrivalItem ${
        row === 0 ? "newArrivalItem_1" : row === 1 ? "newArrivalItem_2" : ""
      }`}
      onClick={() => navigate(link)}
    >
      <span className="newArrivalItem__title">{name}</span>
      <div className="newArrivalItem__middle">
        <img src={image} alt={name} />
        <span className="newArrivalItem__description">{description}</span>
      </div>
      <div className="newArrivalItem__info newArrivalItem__info1">
        <span className="newArrivalItem__info-price">$ {price}</span>
        <span className="newArrivalItem__info-rating">{renderRating()}</span>
        <button className="newArrivalItem__info-btn" onClick={addToBasket}>
          Add to Basket
        </button>
      </div>
      <div className="newArrivalItem__info">
        {genre.map((gr: string, i: number) => {
          return (
            <span key={i} className="newArrivalItem__info-genre">
              {gr}
            </span>
          );
        })}
      </div>
    </div>
  );
}
export default NewArrivalItems;
