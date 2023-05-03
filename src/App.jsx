import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";

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
          <motion.div
            className="text-yellow-400 playfair text-center px-24 py-40 text-5xl"
            initial={{ y: -20 }}
            animate={{ y: 20 }}
            transition={{ duration: 0.5, yoyo: Infinity }}
          >
            Please wait...
          </motion.div>
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
