import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "../../styles/components/Header/dropdown.css";
import { useWindowDimensions } from '../../Hooks/Viewport';

function Dropdown({
  genres,
  name,
  special,
}: {
  genres: { link: string; name: string }[];
  name: string;
  special?: boolean;
}) {
  const navigate = useNavigate();

  const divRef = useRef<HTMLDivElement>(null!);
  const spanRef = useRef<HTMLSpanElement>(null!);
  const parentRef = useRef<HTMLDivElement>(null!);
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  const handleMouseOver = () => {
    spanRef.current.style.color = "cyan";
    spanRef.current.style.border = "1px solid white";
  };
  const handleMouseLeave = () => {
    if (!isMouseOver) {
      spanRef.current.style.color = "white";
      spanRef.current.style.border = "1px solid transparent";
    }
  };

  useEffect(() => {
    if (!special && divRef.current && spanRef.current) {
      divRef.current.style.left = spanRef.current.offsetLeft + "px";
    }
    else if (divRef.current && spanRef.current) {
      divRef.current.style.right = spanRef.current.offsetLeft + "px";
    }
  }, [spanRef.current?.offsetLeft])

  return (
    <>
      <div className="dropdown__option" ref={parentRef}>
        <span
          ref={spanRef}
          onMouseOver={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
        >
          {name}
        </span>
        <div
          className={`dropdown__option-search ${
            special ? "dropdown__option-search-last" : ""
          }`}
          ref={divRef}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <div className="dropdown__option-search-row">
            {genres.map((genre: { link: string; name: string }, i) => {
              if (i < 3) {
                return (
                  <span key={i} onClick={() => navigate(genre.link)}>
                    <AiOutlineSend />
                    <span>{genre.name}</span>
                  </span>
                );
              }
            })}
          </div>
          <div className="dropdown__option-search-row">
            {genres.map((genre: { link: string; name: string }, i) => {
              if (i >= 3 && i < 6) {
                return (
                  <span key={i} onClick={() => navigate(genre.link)}>
                    <AiOutlineSend />
                    <span>{genre.name}</span>
                  </span>
                );
              }
            })}
          </div>
          <div className="dropdown__option-search-row">
            {genres.map((genre: { link: string; name: string }, i) => {
              if (i >= 6 && i < 9) {
                return (
                  <span key={i} onClick={() => navigate(genre.link)}>
                    <AiOutlineSend />
                    <span>{genre.name}</span>
                  </span>
                );
              }
            })}
          </div>
          <div className="dropdown__option-search-row">
            {genres.map((genre: { link: string; name: string }, i) => {
              if (i >= 9) {
                return (
                  <span key={i} onClick={() => navigate(genre.link)}>
                    <AiOutlineSend />
                    <span>{genre.name}</span>
                  </span>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
