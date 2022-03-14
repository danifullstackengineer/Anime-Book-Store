import React from "react";
import ISliderItem from "../../../types/SliderItem";
import "../../../styles/components/BodyContent/newArrivalItems.css";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
function NewArrivalItems({
  image,
  link,
  name,
  rating,
  price,
  genre,
  description,
  row,
}: {
  image: ISliderItem["image"];
  link: ISliderItem["link"];
  name: ISliderItem["name"];
  rating: ISliderItem["rating"];
  price: ISliderItem["price"];
  genre: ISliderItem["genre"];
  description: ISliderItem["description"];
  row: number;
}) {
  const navigate = useNavigate();
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

  return (
    <div
      className={`newArrivalItem ${
        row === 0 ? "newArrivalItem_1" : row === 1 ? "newArrivalItem_2" : ""
      }`}
      onClick={() => navigate(link)}
    >
      <span className="newArrivalItem__title">
        {name}
      </span>
      <div className="newArrivalItem__middle">
        <img src={image} alt={name} />
        <span className="newArrivalItem__description">{description}</span>
      </div>
      <div className="newArrivalItem__info newArrivalItem__info1">
        <span className="newArrivalItem__info-price">$ {price}</span>
        <span className="newArrivalItem__info-rating">{renderRating()}</span>
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
