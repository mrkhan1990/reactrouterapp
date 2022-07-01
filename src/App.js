import { lazy, Suspense } from "react";
import "./App.css";
import { Route, Router, Routes, Switch } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import NavBar from "./Component/NavBar";
import OrderConfirm from "./Component/OrderConfirm";

// const About = lazy(() => {
//   import("./Component/About");
// });

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<About/>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="orderConfirm" element={<OrderConfirm />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
