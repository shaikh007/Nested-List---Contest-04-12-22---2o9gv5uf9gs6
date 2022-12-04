import React from "react";

export default function Town({ name, index }) {
  return (
    <li>
      <h5 id={"town" + (index + 1)}>{name}</h5>
    </li>
  );
}