import React from "react";
import { useNavigate } from "react-router-dom";
import ISliderItem from "../../types/SliderItem";
import "../../styles/components/bodyslider.css";

function SliderItem({
  image,
  link,
  name,
  rating,
  price,
  genre,
  description,
}: ISliderItem) {
  const navigate = useNavigate();
  return (
    <div className="sliderItem" onClick={() => navigate(link)}>
      <div className="sliderItem__top">
        <img src={image} alt={name} />
        <div className="sliderItem__top-info">
          <span className="sliderItem__title">{name}</span>
          <span className="sliderItem__description">{description}</span>
        </div>
      </div>
      <div className="sliderItem__bottom">
        <span className="sliderItem__price">{price}</span>
        <span className="sliderItem__rating">{rating}</span>
        <span className="sliderItem__genre">{genre[0]}</span>
      </div>
    </div>
  );
}

export default SliderItem;
