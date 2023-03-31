export default function Contact() {
  const h5Style = "uppercase text-2xl";

  return (
    <main className="mx-auto text-white grid place-items-center">
      <h1 className="uppercase font-light playfair text-6xl py-36">
        contact me
      </h1>
      <section className="">
        <h5 className={h5Style}>if you want to see my work:</h5>
        <a href="https://github.com/asknkitkr">
          <h3 className="playfair pt-1">github.com/asknkitkr</h3>
        </a>
      </section>
      <section className="mt-7">
        <h5 className={h5Style}>drop a message:</h5>
        <a href="https://github.com/asknkitkr">
          <h3 className="playfair pt-1">ankit.kr0048@gmail.com</h3>
        </a>
      </section>
      <section className="mt-7">
        <h5 className={h5Style}>follow me on:</h5>
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
      </section>
    </main>
  );
}
