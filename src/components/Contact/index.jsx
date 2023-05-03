import "./style.css";
import { motion } from "framer-motion";

export default function Contact() {
  const h5Style = "uppercase text-2xl text-yellow-400";
  return (
    <main className="contact mx-auto grid place-items-center text-center">
      <h1 className="uppercase text-yellow-400 font-light playfair text-7xl pt-28">
        contact me
      </h1>
      <section className="-mt-16">
        <h5 className={h5Style}>if you want to see my work:</h5>
        <a href="https://github.com/asknkitkr">
          <h3 className="playfair pt-1 text-white">github.com/asknkitkr</h3>
        </a>
      </section>
      <section className="-mt-40">
        <h5 className={h5Style}>drop a message:</h5>
        <a href="mailto:ankit.kr0048@gmail.com">
          <h3 className="playfair pt-1 text-white">ankit.kr0048@gmail.com</h3>
        </a>
      </section>
      <section className="-mt-64">
        <h5 className={h5Style}>follow me on:</h5>
        <a
          href="https://www.instagram.com/__anki.t_/"
          className="playfair text-white"
        >
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/asknkitkr/"
          className="playfair px-4 text-white"
        >
          LinkedIn
        </a>
      </section>
    </main>
  );
}
