import React from "react";
import "./style.css";

import nameLogo from "../../assets/name-logo.svg";
import { Link } from "react-router-dom";

const links = [
  { name: "Home", link: "/", current: true },
  { name: "About", link: "/about", current: false },
  { name: "Contact", link: "/contact", current: false },
];

function className(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <header className="fixed w-full z-10 bg-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img className="h-6" alt="Ankit Kumar" src={nameLogo} />
          </Link>
        </div>
        <div className="flex space-x-4">
          {links.map((items) => (
            <Link
              key={items.link}
              to={items.link}
              className={className(
                items.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "rounded-md px-3 py-2 text-sm font-medium"
              )}
              aria-current={items.current ? "page" : undefined}
            >
              {items.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
