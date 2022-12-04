import React from "react";
import City from "./City";

export default function Provinces(props) {
  const { index, name, cities } = props;
  const [clicked, setClicked] = React.useState(false);
  function handleClicked() {
    setClicked(!clicked);
  }
  return (
    <li>
      <h3 id={"state" + (index + 1)} onClick={handleClicked}>
        {name}
      </h3>
      {clicked ? (
        <ul>
          {cities.map((item) => (
            <City
              name={item.name}
              towns={item.towns}
              index={cities.indexOf(item)}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
}