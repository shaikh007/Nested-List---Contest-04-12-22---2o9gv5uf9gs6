import React from "react";
import Town from "./Town";

export default function City({ name, towns, index }) {
  const [clicked, setClicked] = React.useState(false);
  return (
    <li>
      <h4 id={"city" + (index + 1)} onClick={() => setClicked(!clicked)}>
        {name}
      </h4>
      {clicked ? (
        <ul>
          {towns.map((item) => (
            <Town name={item.name} index={towns.indexOf(item)} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}