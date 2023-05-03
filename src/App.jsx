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

// import React from "react";
// import { Route, Switch, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import Home from "./components/Home/index";
// import About from "./components/About/index";
// import Contact from "./components/Contact/index";
// import Error404 from "./components/Error404/index";

// const pageVariants = {
//   initial: {
//     opacity: 0,
//     x: "-100vw",
//   },
//   animate: {
//     opacity: 1,
//     x: 0,
//   },
//   exit: {
//     opacity: 0,
//     x: "100vw",
//   },
// };

// const pageTransition = {
//   type: "tween",
//   ease: "anticipate",
//   duration: 0.5,
// };

// const App = () => {
//   const location = useLocation();

//   return (
//     <AnimatePresence exitBeforeEnter>
//       <motion.div
//         key={location.pathname}
//         variants={pageVariants}
//         initial="initial"
//         animate="animate"
//         exit="exit"
//         transition={pageTransition}
//       >
//         <Switch location={location} key={location.pathname}>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/about" component={About} />
//           <Route exact path="/contact" component={Contact} />
//           <Route component={Error404} />
//         </Switch>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default App;
