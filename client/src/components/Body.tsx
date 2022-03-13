import React, { useEffect, useState } from "react";
import "../styles/components/body.css";
import SliderItem from "./Body/SliderItem";
import ISliderItem from "../types/SliderItem";
import LeftHeader from "./Body/LeftHeader";

function Body({ isMouseOverMenu }: { isMouseOverMenu: boolean }) {
  const [sliderItems, setSliderItems] = useState<ISliderItem[]>([
    {
      image: "https://images-na.ssl-images-amazon.com/images/I/91vj7Wi8WsL.jpg",
      link: "./lightnovels/sololeveling/vol=1",
      name: "Solo Leveling Volume 1",
      rating: 5,
      price: 20,
      genre: ["Action", "Fantasy"],
      description:
        "E-rank hunter Jinwoo Sung has no money, no talent, and no prospects to speak of - and apparently, no luck, either! When he enters a hidden double dungeon one fateful day, he’s abandoned by his party and left to die at the hands of some of the most horrific monsters he’s ever encountered. But just before the last, fatal blow...ping! [Congratulations on becoming a Player.]",
    },
    {
      image: "https://m.media-amazon.com/images/I/51OFWZpPsOS.jpg",
      link: "./lightnovels/sololeveling/vol=2",
      name: "Solo Leveling Volume 2",
      rating: 5,
      price: 20,
      genre: ["Action", "Fantasy"],
      description:
        "Arise! Once dubbed the Weakest Hunter of All Mankind, Jinwoo is now...well, something else entirely. Armed with his mysterious system, he’s currently powerful enough to single-handedly clear dungeons that once would have proven life-threatening. He just has to ready himself to take on the Demon’s Castle - and what better way to do so than finishing a quest? Exclusive new weapons and skills from an assassin-class job may be just what Jinwoo needs...but the system seems to have other plans for him!",
    },
  ]);

  return (
    <div className="body">
      <LeftHeader isMouseOverMenu={ isMouseOverMenu}/>

      <div className="body__content"></div>
    </div>
  );
}

export default Body;
