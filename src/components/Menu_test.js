import React, { useState } from "react";

export const Menu = ({ dishes }) => {
  const [selectedDish, setSelectedDish] = useState(null);
  const ondishSelect = (dish) => {
    setSelectedDish(dish);
  };

  const renderSelectedDish = (dish) => {
    if (selectedDish != null) {
      return (
        <div className="row mt-2">
          <div className="col-12 col-md-12" style={{ textAlign: "center" }}>
            <img src={dish.image} alt="Food img" width="150" />

            <h6>{dish.name}</h6>
            <h6>
              $ {dish.price} {dish.label}
            </h6>
            <span>
              <h5>Comments</h5>
              {dish.comments.map((comment) => {
                return (
                  <div key={comment.id} style={{ textAlign: "left" }}>
                    <span>
                      {comment.comment}
                      <br />
                      <strong>--{comment.author}</strong>
                    </span>
                    <hr />
                  </div>
                );
              })}
            </span>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  const menu = dishes.map((dish) => {
    return (
      <div
        className="row mt-2"
        onClick={() => ondishSelect(dish)}
        key={dish.id}
      >
        <div className="col-12 col-md-2" style={{ textAlign: "center" }}>
          <img src={dish.image} alt="Food img" width="100" />
        </div>
        <div className="col-12 col-md-10">
          <h5>{dish.name}</h5>
          <span>{dish.description}</span>
        </div>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-10">{menu}</div>
        <div className="col-12 col-md-2">
          {renderSelectedDish(selectedDish)}
        </div>
      </div>
    </div>
  );
};
