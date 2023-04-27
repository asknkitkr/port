import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";

const Home = React.lazy(() => import("./components/Home/index"));
const About = React.lazy(() => import("./components/About/index"));
const Contact = React.lazy(() => import("./components/Contact/index"));

import Error404 from "./components/Error404";

function App() {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div className="text-white px-40 text-5xl">Please wait...</div>
        }
      >
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<Error404 />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
