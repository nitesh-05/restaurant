import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";

const CardMenu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-3 m-auto">
        <Card>
          <Link to={`/menu/${dish.id}`}>
            <CardImg
              width="100%"
              src={process.env.PUBLIC_URL + dish.image}
              alt={dish.name}
            />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Link>
        </Card>
      </div>
    );
  });
  return (
    <div className="container-fluid">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row">{menu}</div>
    </div>
  );
};

export default CardMenu;
