import logo from './logo.svg';
import './App.css';
import Menu from "./components/menu.jsx"
import { useState } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routeArr from "./route"
function App() {
  let menuArr = [
    { menuName: "首页", path: "/" },
    { menuName: "second", path: "/second" },
    { menuName: "third", path: "/third" }
  ]
  return (
    <div className="App">
      <BrowserRouter>
        <Menu menuArr={menuArr}></Menu>
        <Routes>
          {
            routeArr.map((item, index) => {
              return <Route path={item.path} element={<item.element />}></Route>
            })
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
