import "../styles/cover.css";
import covers from "../resources/covers";
import { useEffect, useState, Fragment } from "react";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

export default function Cover() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentIndex((index) => {
        if (index === covers.length - 1) return 0;
        return index + 1;
      });
    }, 8000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="cover">
      <div className="cover-images-container">
        {covers.map((item) => (
          <img
            key={item.id}
            src={item.img}
            style={{ translate: `${-100 * currentIndex}%` }}
          ></img>
        ))}
      </div>
      {covers.map((item, index) => (
        <Fragment key={item.id}>
          <span
            className="cover-name"
            style={{ opacity: currentIndex === index ? 1 : 0 }}
          >
            {item.name}
          </span>
          <h2
            className="cover-title"
            style={{ opacity: currentIndex === index ? 1 : 0 }}
          >
            {item.title}
          </h2>
        </Fragment>
      ))}

      <div className="cover-navigation">
        {covers.map((item, index) => (
          <Fragment key={item.id}>
            {index === currentIndex ? (
              <RadioButtonCheckedIcon />
            ) : (
              <RadioButtonUncheckedIcon />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
