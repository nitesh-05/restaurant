import React, { useState } from "react";
import { Media } from "reactstrap";
const Menu = ({ dishes }) => {
  const [selectedDish, setSelectedDish] = useState(null);
  const onDishSelect = (dish) => {
    setSelectedDish(dish);
    alert({ selectedDish });
  };

  const renderSelectedDish = (dish) => {
    if (selectedDish != null) {
      return (
        <Media>
          <Media left href="#">
            <Media object src={dish.image} alt="Generic placeholder image" />
          </Media>
          <Media body className="ml-5">
            <Media heading>{dish.name}</Media>
            <Media>{dish.description}</Media>
            <Media>{dish.price}</Media>
          </Media>
        </Media>
      );
    } else {
      return <div></div>;
    }
  };

  const menu = dishes.map((dish) => {
    return (
      <div className="col-12  mt-5" key={dish.id}>
        <Media onClick={() => onDishSelect(dish)}>
          <Media left href="#">
            <Media object src={dish.image} alt="Generic placeholder image" />
          </Media>
          <Media body className="ml-5">
            <Media heading>{dish.name}</Media>
            {/* <Media>{dish.description}</Media>
            <Media>{dish.price}</Media> */}
          </Media>
        </Media>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row mt-2">
        <Media list>{menu}</Media>
        <Media list>{renderSelectedDish(selectedDish)}</Media>
      </div>
    </div>
  );
};

export default Menu;
