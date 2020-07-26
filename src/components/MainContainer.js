import React, { useState } from "react";
import { Menu } from "./Menu_test";
import DishDetails from "./DishDetails";
import { DISHES } from "./data";

function MainContainer() {
  const dishes = DISHES;

  const [selectedDish, setSelectedDish] = useState(null);
  const onDishSelect = (dish) => {
    setSelectedDish(dish);
  };
  // console.log(selectedDish);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9 col-12">
          <Menu dishes={dishes} onClick={(dishId) => onDishSelect(dishId)} />
        </div>
        <div className="col-md-3 col-12">
          <DishDetails
            dish={dishes.filter((dish) => dish.id === selectedDish)[0]}
          />
          {console.log(dishes.filter((dish) => dish.id === selectedDish)[0])}
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
