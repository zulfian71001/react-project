import "../App.css";
import { useState, useEffect } from "react";

const Card = (props) => {
  const { title, desc } = props;
  const [changeTitle, setChangeTitle] = useState("");
  const changeValue = () => {
    setChangeTitle("FULLSTACk WEB DEVELOPMENT");
  };

  useEffect(() => {
    if (changeTitle === "FULLSTACk WEB DEVELOPMENT") {
      setChangeTitle("title sudah berubah");
    }
  });

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{desc}</p>
      <p>{changeTitle}</p>
      <button onClick={() => changeValue()}>change the value</button>
    </div>
  );
};

export default Card;
