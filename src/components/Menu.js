import React, { useState } from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardText } from "reactstrap";
const Menu = ({ dishes }) => {
  const [selectedDish, setSelectedDish] = useState(null);

  const onDishSelect = (dish) => {
    setSelectedDish(dish);
  };

  const renderSelectedDish = (dish) => {
    if (selectedDish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt="Selected dish image" />
          <CardBody>
            <CardText>{dish.description}</CardText>
            <CardText>${dish.price}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return null;
    }
  };

  const menu = dishes.map((dish) => {
    return (
      <div className="col-12 col-md-3 mt-2" key={dish.id}>
        <Card onClick={() => onDishSelect(dish)}>
          <CardImg width="100%" src={dish.image} alt="Dish image" />
          <CardImgOverlay style={{ fontSize: "1.5em" }}>
            {dish.name}
          </CardImgOverlay>
        </Card>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row mt-2">{menu}</div>
      <div className="row mt-2">
        <div className="col-12 col-md-5 m-auto">
          {renderSelectedDish(selectedDish)}
        </div>
      </div>
    </div>
  );
};

export default Menu;
