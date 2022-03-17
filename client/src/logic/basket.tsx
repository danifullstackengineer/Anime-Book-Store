import ISliderItem from "../types/SliderItem";

const addToBasketToken = ({
  id,
  image,
  link,
  name,
  rating,
  price,
  genre,
  description,
}: ISliderItem) => {
  const basket = localStorage.getItem("basket");
  if (basket) {
    var myJSON = JSON.parse(basket);
    myJSON.unshift({
      id: id,
      image: image,
      link: link,
      name: name,
      rating: rating,
      price: price,
      genre: genre,
      description: description,
    });
    localStorage.removeItem("basket");
    localStorage.setItem("basket", JSON.stringify(myJSON));
  } else {
    const myItem = JSON.stringify([
      {
        id: id,
        image: image,
        link: link,
        name: name,
        rating: rating,
        price: price,
        genre: genre,
        description: description,
      },
    ]);
    localStorage.setItem("basket", myItem);
  }
};

const removeFromBasketToken = (id: number) => {
  const basket = localStorage.getItem("basket");
  if (basket) {
    var myJSON = JSON.parse(basket);
    myJSON.splice(id, 1);
    localStorage.removeItem("basket");
    localStorage.setItem("basket", JSON.stringify(myJSON));
  } else {
  }
};

const removeFromBasketTokenNormalId = (id: number) => {
  const basket = localStorage.getItem("basket");
  if (basket) {
    var myJSON = JSON.parse(basket);
    const newBasket = myJSON.filter((item: ISliderItem) => item.id !== id);
    localStorage.removeItem("basket");
    localStorage.setItem("basket", JSON.stringify(newBasket));
  }
};

export {
  addToBasketToken,
  removeFromBasketToken,
  removeFromBasketTokenNormalId,
};
