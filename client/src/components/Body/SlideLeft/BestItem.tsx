import React from "react";
import "../../../styles/components/SlideLeft/bestItem.css";
import ISliderItem from "../../../types/SliderItem";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function DropdownLeft({
  image,
  link,
  name,
  rating,
  price,
  genre,
  description,
  isMainSlider,
}: {
  image: ISliderItem["image"];
  link: ISliderItem["link"];
  name: ISliderItem["name"];
  rating: ISliderItem["rating"];
  price: ISliderItem["price"];
  genre: ISliderItem["genre"];
  description: ISliderItem["description"];
  isMainSlider?: boolean;
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
      className={`bestItem ${isMainSlider ? "mainSlider" : ""}`}
      onClick={() => navigate(link)}
    >
      <span className="bestItem__title">{name}</span>
      <div className="bestItem__middle">
        <img src={image} alt={name} />
        <span className="bestItem__description">{description}</span>
      </div>
      <div className="bestItem__info bestItem__info1">
        <span className="bestItem__info-price">$ {price}</span>
        <span className="bestItem__info-rating">{renderRating()}</span>
      </div>
      <div className="bestItem__info">
        {genre.map((gr: string, i: number) => {
          if (i < 2) {
            return (
              <span key={i} className="bestItem__info-genre">
                {gr}
              </span>
            );
          }
        })}
      </div>
    </div>
  );
}

export default DropdownLeft;
