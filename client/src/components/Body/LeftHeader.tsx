import React, { useEffect, useState, useRef } from "react";
import "../../styles/components/leftheader.css";
import { FaCrown } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import DropdownLeft from "./SlideLeft/BestItem";
import useMouse from "@react-hook/mouse-position";
import ISliderItem from "../../types/SliderItem";
import { BiRightArrow } from "react-icons/bi";
import tomiokaBG from "../../assets/gif/tomioka-anime.gif";

function LeftHeader({ isMouseOverMenu }: { isMouseOverMenu: boolean }) {
  const [className, setClassName] = useState<string>("");
  const [dropdownClassName, setDropdownClassName] = useState<string>("");
  const [currentHover, setCurrentHover] = useState<number>();
  const dRef = useRef(null);
  const mouse = useMouse(dRef);
  const [initial, setInitial] = useState<boolean>(false);
  const imageRef = useRef<HTMLImageElement>(null!);

  const [best, setBest] = useState<ISliderItem[]>([
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
    {
      image: "https://m.media-amazon.com/images/I/51fqQPXNzGS.jpg",
      link: "./lightnovels/sololeveling/vol=3",
      name: "Solo Leveling Volume 3",
      rating: 5,
      price: 20,
      genre: ["Action", "Fantasy"],
      description:
        "​Leveling up in C-rank dungeons has become next to impossible for Jinwoo. But an E-rank hunter attempting anything higher? Well, that would raise some serious red flags…so the time has come for a reevaluation. And when the results are back, it’s official—Jinwoo is the tenth S-rank hunter from South Korea! An entirely new world, brimming with powerful magic beasts and elite hunters, is now open to him. But before he can immerse himself in it, there’s something absolutely vital he has to do…",
    },
    {
      image: "https://m.media-amazon.com/images/I/51fqQPXNzGS.jpg",
      link: "./lightnovels/sololeveling/vol=3",
      name: "Solo Leveling Volume 3",
      rating: 5,
      price: 20,
      genre: ["Action", "Fantasy"],
      description:
        "​Leveling up in C-rank dungeons has become next to impossible for Jinwoo. But an E-rank hunter attempting anything higher? Well, that would raise some serious red flags…so the time has come for a reevaluation. And when the results are back, it’s official—Jinwoo is the tenth S-rank hunter from South Korea! An entirely new world, brimming with powerful magic beasts and elite hunters, is now open to him. But before he can immerse himself in it, there’s something absolutely vital he has to do…",
    },
  ]);

  useEffect(() => {
    if (isMouseOverMenu) {
      setClassName("leftHeader__shown");
      setInitial(true);
    } else if (className && !isMouseOverMenu && currentHover === undefined) {
      setClassName("leftHeader__hidden");
    }
    if (!mouse.clientX && initial) {
      setClassName("leftHeader__hidden");
      setInitial(false);
      setCurrentHover(undefined);
    }
  }, [isMouseOverMenu, currentHover, mouse]);

  const renderBest = (): JSX.Element[] => {
    const jsx = best.map((item: ISliderItem, i: number) => {
      return (
        <DropdownLeft
          key={i}
          image={item.image}
          link={item.link}
          name={item.name}
          rating={item.rating}
          price={item.price}
          genre={item.genre}
          description={item.description}
        />
      );
    });
    jsx.unshift(
      <div className="bestItem__titleTop" key={"bestsellerstitle"}>
        Best Sellers
      </div>
    );
    return jsx;
  };

  const renderAccount = (): JSX.Element[] => {
    return [<h1></h1>];
  };
  const renderContact = (): JSX.Element[] => {
    return [<h2></h2>];
  };

  useEffect(() => {
    if (!isMouseOverMenu && !mouse.clientX) {
      setDropdownClassName("leftHeader__dropdown-hidden");
    }
  }, [isMouseOverMenu, mouse]);

  useEffect(() => {
    if (dRef.current) {
      const { clientHeight } = dRef.current;
      const height = clientHeight + 200;
      imageRef.current.style.height = height + "px";
    }
  }, [])

  return (
    <>
      <BiRightArrow
        className={`leftHeader__mainIcon ${
          isMouseOverMenu || mouse.clientX
            ? "leftHeader__mainIcon-hidden"
            : "leftHeader__mainIcon-visible"
        }`}
      />
      <div className={`leftHeader ${className}`} ref={dRef}>
        <div className="leftHeader__options">
          <div className="leftHeader__best">
            <FaCrown
              className="leftHeader__icon"
              onMouseOver={() => {
                setDropdownClassName("leftHeader__dropdown-active");
                setCurrentHover(0);
              }}
            />
          </div>
          <div className="leftHeader__account">
            <MdAccountCircle className="leftHeader__icon" />
          </div>
          <div className="leftHeader__contact">
            <AiFillPhone className="leftHeader__icon" />
          </div>
        </div>
        <div className={`leftHeader__dropdown ${dropdownClassName}`}>
          <img
            src={"https://cdn.wallpapersafari.com/34/29/8NpjeV.jpg"}
            alt={""}
            ref={imageRef}
          />
          {currentHover === 0
            ? renderBest()
            : currentHover === 1
            ? renderAccount()
            : currentHover === 2
            ? renderContact()
            : undefined}
        </div>
      </div>
    </>
  );
}

export default LeftHeader;
