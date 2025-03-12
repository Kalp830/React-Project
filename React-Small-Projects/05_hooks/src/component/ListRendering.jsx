import React from "react";
import { people } from "../data/listData";

const ListRendering = () => {
  return (
    <>
      <div className="list-item">
        {people.map(({ name, profession }, id) => (
          <ul key={id}>
            <li>{name}</li>
            <li>{profession}</li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default ListRendering;
