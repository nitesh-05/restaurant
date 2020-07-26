import React from "react";

export const Menu = ({ dishes, onClick }) => {
  // console.log(dishes);
  const menu = dishes.map((dish) => {
    return (
      <div
        className="row mt-2"
        onClick={() => {
          onClick(dish.id);
        }}
        key={dish.id}
      >
        <div className="col-12 col-md-2" style={{ textAlign: "center" }}>
          <img
            src={process.env.PUBLIC_URL + dish.image}
            alt={dish.name}
            width="100"
          />
        </div>
        <div className="col-12 col-md-10">
          <h5>{dish.name}</h5>
          <span>{dish.description}</span>
        </div>
      </div>
    );
  });
  return <div>{menu}</div>;
};
