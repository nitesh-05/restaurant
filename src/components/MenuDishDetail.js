import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  CardBody,
  CardSubtitle,
} from "reactstrap";
import { Link, Redirect } from "react-router-dom";

const RenderDish = (dish) => {
  return (
    <Card>
      <CardImg
        width="100%"
        src={process.env.PUBLIC_URL + dish.dish.image}
        alt={dish.dish.name}
      />
      <CardImgOverlay>
        <CardTitle>{dish.dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};

const RenderComments = (comments) => {
  return (
    <>
      {comments.comments.map((comment) => {
        return (
          <div key={comment.id} style={{ fontWeight: "bold" }}>
            <CardBody>
              <CardTitle>
                <h5>Author :- {comment.author}</h5>
              </CardTitle>
              <CardText>Comment :- {comment.comment}</CardText>
              <CardSubtitle>
                date :-&nbsp;
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </CardSubtitle>
            </CardBody>
            <hr />
          </div>
        );
      })}
    </>
  );
};

const MenuDishDetails = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row" style={{ justifyContent: "center" }}>
        <div className="col-12 col-md-4">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-8">
          <Card>
            <RenderComments comments={props.comments} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MenuDishDetails;
