import { useState, useEffect } from "react";

function Designation(props) {
  const [text, setText] = useState(props.designation);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 50);
    return () => clearInterval(intervalId);
  }, []);

  return <>{text.slice(0, index)}</>;
}

export default Designation;
