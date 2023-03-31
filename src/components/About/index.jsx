import React, { useState } from "react";
import "./style.css";

const About = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="h-screen pt-40" style={{ backgroundColor: "#fff" }}>
      <table className="demo" cellPadding="10">
        <thead>
          <tr>
            <td>Gibberish</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="a">Apple</td>
            <td>Jobs</td>
            <td>{clicked && <p>Hello there</p>}</td>
          </tr>
          <tr>
            <td className="a">Banana</td>
            <td>Denmanrk</td>
            <td>{clicked && <p>Hello there</p>}</td>
          </tr>
        </tbody>
      </table>

      <div className="text-lg">
        {" "}
        <button onClick={() => setClicked(!clicked)}>{">"}</button>{" "}
      </div>
      {clicked && <p>Hello there</p>}
      {clicked && <p>Hola AMigo</p>}

      <hr noshade />
      <div className="grid-container">
        <div className="grid-item">A</div>
        <div className="grid-item">B</div>
        <div className="grid-item">C</div>
        <div className="grid-item">D</div>
      </div>
    </div>
  );
};

export default About;
