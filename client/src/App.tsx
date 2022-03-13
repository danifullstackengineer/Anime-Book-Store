import React, { useEffect, useState } from "react";
import useMouse from "@react-hook/mouse-position";
import { useRef } from "react";
import "./styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 0,
    leaveDelay: 0,
  });

  const [isMouseOverMenu, setIsMouseOverMenu] = useState<boolean>(false);

  useEffect(() => {
    if (mouse.clientX && mouse.clientY) {
      if (mouse.clientX < 100 && mouse.clientY > 175) {
        setIsMouseOverMenu(true);
      } else {
        setIsMouseOverMenu(false);
      }
    }
  }, [mouse]);

  return (
    <div className="app" ref={ref}>
      <Router>
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <Header />
                <Body isMouseOverMenu={isMouseOverMenu} />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
