import Designation from "../Designation";
import "./style.css";

export default function Home() {
  return (
    <main className="home h-screen py-48 lg:py-48 md:py-40 sm:py-28">
      <section className="mx-auto flex max-w-7xl items-center justify-between">
        <h1 className="text-yellow-400 text-8xl lg:text-9xl md:text-8xl sm:text-8xl font-fancy">
          Hello There!
        </h1>
      </section>
      <section className="mx-auto flex max-w-7xl items-center justify-between">
        <h1 className="text-yellow-400 text-8xl lg:text-9xl md:text-8xl sm:text-8xl font-fancy">
          I am Ankit Kumar
        </h1>
      </section>
      <section className="mx-auto flex max-w-7xl">
        <h1 className="typing text-white text-5xl lg:text-6xl md:text-5xl sm:text-5xl font-fancy pt-20">
          <Designation designation="Student | Software Engineer" />
        </h1>
      </section>
    </main>
  );
}
