import React, { useEffect, useState } from "react";
import "../../styles/components/leftheader.css";
import { FaCrown } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

function LeftHeader({ isMouseOverMenu }: { isMouseOverMenu: boolean }) {
  const [className, setClassName] = useState<string>("");

  useEffect(() => {
    if (isMouseOverMenu) {
      setClassName("leftHeader__shown");
    } else if (className && !isMouseOverMenu) {
      setClassName("leftHeader__hidden");
    }
  }, [isMouseOverMenu]);

  return (
    <div className={`leftHeader ${className}`}>
      <div className="leftHeader__best">
        <FaCrown className="leftHeader__icon" />
      </div>
      <div className="leftHeader__account">
        <MdAccountCircle className="leftHeader__icon" />
      </div>
      <div className="leftHeader__contact">
        <AiFillPhone className="leftHeader__icon" />
      </div>
    </div>
  );
}

export default LeftHeader;
