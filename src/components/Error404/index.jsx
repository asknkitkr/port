import { Link } from "react-router-dom";
import "./style.css";

export default function Error404() {
  return (
    <>
      <main className="grid h-screen place-items-center">
        <div className="text-start">
          <h1 className="text-9xl text-white font-bold -mx-2">ERROR 404</h1>
          <h3 className="text-3xl uppercase text-white py-4">
            the page you are looking for is missing
          </h3>
          <h4 className="w-40 border-orange-400 border-b-4 px-3.5 py-2.5 text-lg font-semibold text-white my-6">
            <Link to="/">TAKE ME HOME</Link>
          </h4>
        </div>
      </main>
    </>
  );
}
