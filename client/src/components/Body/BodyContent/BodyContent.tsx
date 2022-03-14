import React, { useEffect, useState, useRef } from "react";
import "../../../styles/components/BodyContent/bodyContent.css";
import ISliderItem from "../../../types/SliderItem";
import BestItem from "../SlideLeft/BestItem";
import NewArrivalItems from "./NewArrivalItems";
import newArr from "../../../assets/gif/newArr.gif";

function BodyContent() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [newArrivals, setNewArrivals] = useState<ISliderItem[]>([
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/I/513gkdi2k5L._SX327_BO1,204,203,200_.jpg",
      link: "./lightnovels/that-time-i-got-reincarnated-as-a-slime/vol=1",
      name: "That Time I Got Reincarnated as a Slime Volume 1",
      rating: 5,
      price: 13.99,
      genre: ["Isekai"],
      description:
        "Lonely thirty-seven-year-old Satoru Mikami is stuck in a dead-end job, unhappy with his mundane life, but after dying at the hands of a robber, he awakens to a fresh start in a fantasy realm...as a slime monster! As he acclimates to his goopy new existence, his exploits with the other monsters set off a chain of events that will change his new world forever!",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51xVYOT4mVL._SX352_BO1,204,203,200_.jpg",
      link: "./manga/berserk/vol=1",
      name: "Bersek Volume 1",
      rating: 5,
      price: 20.99,
      genre: ["Dark Fantasy", "High Fantasy", "Sword and Sorcery"],
      description:
        "His name is Guts, the Black Swordsman, a feared warrior spoken of only in whispers. Bearer of a gigantic sword, an iron hand, and the scars of countless battles and tortures, his flesh is also indelibly marked with The Brand, an unholy symbol that draws the forces of darkness to him and dooms him as their sacrifice. But Guts won't take his fate lying down; he'll cut a crimson swath of carnage through the ranks of the damned - and anyone else foolish enough to oppose him! Accompanied by Puck the Elf, more an annoyance than a companion, Guts relentlessly follows a dark, bloodstained path that leads only to death...or vengeance.",
    },
    {
      image:
        "https://image.mostraveller.com/uploads/images/comics/37553/thumbnail.png",
      link: "./hentai/Henshin/vol=1",
      name: "Henshin Volume 1",
      rating: 3,
      price: 9.99,
      genre: ["Rape", "Incest", "Prostitution"],
      description:
        "Saki Yoshida is a graduating middle school student with little to look forward to in life. Having been shy at the beginning, she wound up not making a single friend during middle school and wants to change that in high school starting with her looks. However, Saki might find out that she got more than she bargained for when fate takes a turn for the worse and her newly blooming youth crumbles.",
    },
    {
      image: "https://images.static-bluray.com/products/20/122358_1_front.jpg",
      link: "./anime/Mieruko-chan/vol=1",
      name: "Mieruko-Chan Blu-Ray Episode 1",
      rating: 5,
      price: 22.99,
      genre: ["Horror", "Comedy"],
      description:
        "High school student Miko Yotsuya has the unfortunate ability to see horrifying ghosts and spirits that haunt her and the people around her. Despite this, Miko does her best to ignore the existence of ghosts and tries to live out a normal high school life.",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51I2IWKvQWL._SX331_BO1,204,203,200_.jpg",
      link: "./manga/Dragon-Ball-Super/vol=12",
      name: "Dragon Ball Super Volume 12",
      rating: 4,
      price: 12.99,
      genre: ["Action", "Adventure", "Comedy", "Martial Arts"],
      description:
        "The villain Moro has released all of the vicious criminals from the Galactic Prison, and now they’re ravaging the galaxy in search of planets with exceptional life energy! When the Bandit Brigade, including the power-copying Seven-Three, comes to Earth, how will Piccolo and the others fare against this new threat without Goku around?",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51JJyWPQ1xL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
      link: "./lightnovel/My-next-life-as-villaines/vol=1",
      name: "My Next Life as a Villainess Volume 1",
      rating: 3,
      price: 12.99,
      genre: ["Comedy", "Drama", "Fantasy", "Romance"],
      description:
        "After hitting her head particularly hard one day, Duke Claes' daughter, Katarina, suddenly recalls all the memories of her past life: that of a teenage Japanese girl. Just before her untimely death, this girl recalls playing an otome game... that is exactly like the world she's living in now! She is now Katarina Claes, the antagonist of the otome game, who nastily hounded the protagonist until the end. Knowing all the possible outcomes of the game, she realizes that every single possible route ends with Katarina being murdered or exiled! In order to avoid these Catastrophic Bad Ends, she has to use her knowledge of the game and her own wiles, starting with breaking off this engagement with the prince... Will Katarina survive while making her way through this world, where bad flags trip at every turn? Find out in this reverse-harem rom-com, led by everybody's favorite villainess!",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61PoS3MkhnL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      link: "./lightnovel/Arifureta/vol=1",
      name: "Arifureta: From Commonplace to World's Strongest Volume 1",
      rating: 5,
      price: 12.99,
      genre: ["Fantasy", "Harem", "Isekai"],
      description:
        "Seventeen-year-old Hajime Nagumo is your average, everyday otaku. However, his simple life of pulling all-nighters and sleeping in school is suddenly turned upside down when he, along with the rest of his class, is summoned to a fantasy world! They’re treated like heroes and tasked with the duty of saving the human race from utter extinction. But what should have been any otaku’s paradise quickly turns into Hajime’s nightmare. While the rest of his class are blessed with godlike powers, Hajime’s job, Synergist, only has a single transmutation skill. Ridiculed and bullied by his classmates for being weak, he soon finds himself in despair. Will he be able to survive in this dangerous world of monsters and demons with only a glorified blacksmith’s level of strength?",
    },
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61f+m1y+5PL._SY344_BO1,204,203,200_.jpg",
      link: "./manga/My-Hero-Academia/vol=1",
      name: "My Hero Academia Volume 1",
      rating: 2,
      price: 5.99,
      genre: ["Adventure", "Superhero", "Comedy", "Sci-Fi"],
      description:
        "What would the world be like if 80 percent of the population manifested superpowers called “Quirks”? Heroes and villains would be battling it out everywhere! Being a hero would mean learning to use your power, but where would you go to study? The Hero Academy of course! But what would you do if you were one of the 20 percent who were born Quirkless?",
    },
    {
      image: "https://m.media-amazon.com/images/I/51WfOP-B7EL.jpg",
      link: "./ligthnovel/Grimgar-of-Fantasy-and-Ash/vol=1",
      name: "Grimgar of Fantasy and Ash Volume 1",
      rating: 4,
      price: 9.99,
      genre: ["Dark Fantasy", "Isekai"],
      description:
        'When Haruhiro came to, he was in the darkness. Not knowing why was he here, or where "here" even was. With him were others who also remembered little more than their own names. What they found when they came out of the underground was a world that was "just like a game." In order to survive, Haruhiro forms a party with others in the same situation as him, learns skills, and takes his first steps forward into the world of Grimgar as a trainee volunteer soldier. Not knowing what awaits him... This is a tale of adventure born from the ashes.',
    },
    {
      image: "https://m.media-amazon.com/images/I/81uHBkoHLSL._SX342_.jpg",
      link: "./hentai/Amakano/vol=1",
      name: "Amakano Blu-Ray",
      rating: 5,
      price: 13.99,
      genre: ["Hentai"],
      description:
        "Amakano is set in a snowy hot springs town that a young man named Yuuki has recently moved to. He came to the town to help his grandparents shovel the snow at the old boarding house that they own. Once he is there, Yuuki’s grandfather suggests that he try to find love while he is still young. Luckily for Yuuki, there are plenty of available girls around this snowy little town. For starters, there’s the local cafe worker Koharu, the shy shrine maiden Saiyuki, and his mysterious housemate Mizuki. It’s time for Yuuki to take the first steps towards following his grandfather’s advice and trying to find some love!",
    },
    {
      image: "https://cdn.myanimelist.net/images/anime/1626/104297.jpg",
      link: "./hentai/Kyonyuu-Hitozuma-Onna-Kyoushi-Saimin/vol=1",
      name: "Kyonyuu Hitozuma Onna Kyoushi Saimin Blu-Ray",
      rating: 4,
      price: 20.99,
      genre: ["Hentai"],
      description:
        "Morishita Wataru grew up on a motherless family, but despite his lonely environment, he worked hard and managed to enroll on the prestigious Ousei academy. The school is run by an old scholarship rule, in which the students' grades are tied to the teacher's evaluation, so the teachers inevitably give the students a strict education.",
    },
    {
      image: "https://hentaihaven.xxx/www/2019/04/Drop-Out-hentai-haven-online.jpg",
      link: "./hentai/Dropout/vol=1",
      name: "Dropout Blu-Ray 1-2",
      rating: 5,
      price: 30.99,
      genre: ["Hentai"],
      description:
        "Dropout is set in a reality where not getting admitted into university means that “dropouts” are forced into the workforce. Those who are attractive are pushed into the sex industry, becoming sex servants to the other members of society. These girls are treated as literal “cum toilets” for men to use and abuse whenever they want to. Reika Shichijo was at the top of her class when she suddenly became a dropout and is forced into sexual servitude to her former classmate Niimi. She has to provide him with sexual pleasure to relieve his stress, allowing him to study better. But Niimi has to deal with a lot of things in exchange for what seems like a good deal for him, not the least of which is Reika’s jealous ex-boyfriend.",
    },
  ]);

  const [currentSlider, setCurrentSlider] = useState<ISliderItem[]>();
  const [bodyItems1, setBodyItems1] = useState<ISliderItem[]>();
  const [bodyItems2, setBodyItems2] = useState<ISliderItem[]>();
  const [bodyItems3, setBodyItems3] = useState<ISliderItem[]>();

  useEffect(() => {
    var arr1 = [];
    var arr2 = [];
    var arr3 = [];
    var arr4 = [];
    for (let i = 0; i < newArrivals.length; i++) {
      if (i < 4) {
        arr1.push(newArrivals[i]);
      } else if (i >= 4 && i < 7) {
        arr2.push(newArrivals[i]);
      } else if (i >= 7 && i < 9) {
        arr3.push(newArrivals[i]);
      } else if (i >= 9 && i < 12) {
        arr4.push(newArrivals[i]);
      }
    }
    setCurrentSlider(arr1);
    setBodyItems1(arr2);
    setBodyItems2(arr3);
    setBodyItems3(arr4);
  }, []);

  return (
    <div className="bodyContent">
      <div className="bodyContent__wrapper">
        <div className="bodyContent__newArrivals">
          <div className="bodyContent__title">
            <img src={newArr} alt={"banner-img"} />
          </div>
          <div className="bodyContent__newArrivals-content" ref={sliderRef}>
            {currentSlider?.map((item: ISliderItem, i: number) => {
              return (
                <BestItem
                  key={i}
                  image={item.image}
                  link={item.link}
                  name={item.name}
                  rating={item.rating}
                  price={item.price}
                  genre={item.genre}
                  description={item.description}
                  isMainSlider={true}
                />
              );
            })}
          </div>
          <div className="bodyContent__newArrivals-content">
            {bodyItems1?.map((item: ISliderItem, i: number) => {
              return (
                <NewArrivalItems
                  key={i}
                  image={item.image}
                  link={item.link}
                  name={item.name}
                  rating={item.rating}
                  price={item.price}
                  genre={item.genre}
                  description={item.description}
                  row={0}
                />
              );
            })}
          </div>
          <div className="bodyContent__newArrivals-content">
            {bodyItems2?.map((item: ISliderItem, i: number) => {
              return (
                <NewArrivalItems
                  key={i}
                  image={item.image}
                  link={item.link}
                  name={item.name}
                  rating={item.rating}
                  price={item.price}
                  genre={item.genre}
                  description={item.description}
                  row={1}
                />
              );
            })}
          </div>
          <div className="bodyContent__newArrivals-content">
            {bodyItems3?.map((item: ISliderItem, i: number) => {
              return (
                <NewArrivalItems
                  key={i}
                  image={item.image}
                  link={item.link}
                  name={item.name}
                  rating={item.rating}
                  price={item.price}
                  genre={item.genre}
                  description={item.description}
                  row={0}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyContent;
