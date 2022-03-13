import React from "react";
import "./styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <Header />
                <Body />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
