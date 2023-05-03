import Designation from "../Designation";
import "./style.css";

export default function Home() {
  return (
    <main className="home poppins h-screen py-16 lg:py-24 px-4 lg:px-20 xl:px-32">
      <section className="mx-auto flex max-w-7xl items-center justify-between mt-10 lg:mt-0">
        <h1 className="text-yellow-400 text-9xl sm:text-9xl md:text-9xl lg:text-9xl xl:text-9xl font-semibold">
          Hello There!
        </h1>
      </section>
      <section className="mx-auto flex max-w-7xl items-center justify-between">
        <h1 className="text-yellow-400 text-9xl sm:text-9xl md:text-9xl lg:text-9xl xl:text-9xl font-semibold">
          I am Ankit Kumar
        </h1>
      </section>
      <section className="mx-auto flex max-w-7xl mt-9">
        <h1 className="typing text-white text-8xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-8xl pt-10 font-semibold">
          <Designation designation="Software Engineer - Persistent Systems" />
        </h1>
      </section>
    </main>
  );
}
