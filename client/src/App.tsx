import React, { useEffect, useState } from "react";
import useMouse from "@react-hook/mouse-position";
import { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import jwt from "jwt-decode";
import { getEmail } from "./apollo/user";
import { useDispatch } from "react-redux";
import { setEmailAction } from "./redux/slice";

import Body from "./components/Body";
import Header from "./components/Header";
import { authJWT } from "./AJAX/credential";
import { useLazyQuery } from "@apollo/client";

function App() {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const mouse = useMouse(ref, {
    enterDelay: 0,
    leaveDelay: 0,
  });

  const [id, setId] = useState<string>();

  const [isMouseOverMenu, setIsMouseOverMenu] = useState<boolean>(false);
  const [clickedBasket, setClickedBasket] = useState<boolean>();

  const [getEmailQuery] = useLazyQuery(getEmail, {
    variables: {
      id: id,
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      authJWT().then((res) => {
        if (res.success && token) {
          const data: { id: string } = jwt(token);
          setId(data.id);
          getEmailQuery().then((res) => {
            dispatch(setEmailAction(res.data.getUser.email));
          });
        }
      });
    }
  }, []);

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
                <Header
                  setClickedBasket={setClickedBasket}
                  clickedBasket={clickedBasket}
                />
                <Body
                  isMouseOverMenu={isMouseOverMenu}
                  isMainPage={true}
                  clickedBasket={clickedBasket}
                  setClickedBasket={setClickedBasket}
                />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Header
                  setClickedBasket={setClickedBasket}
                  clickedBasket={clickedBasket}
                />
                <Body
                  isMouseOverMenu={isMouseOverMenu}
                  isCredential={true}
                  clickedBasket={clickedBasket}
                  setClickedBasket={setClickedBasket}
                />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header
                  setClickedBasket={setClickedBasket}
                  clickedBasket={clickedBasket}
                />
                <Body
                  isMouseOverMenu={isMouseOverMenu}
                  clickedBasket={undefined}
                  isCheckout={true}
                  setClickedBasket={setClickedBasket}
                />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
