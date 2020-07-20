import React from "react";

const DishDetails = ({ dish }) => {
  console.log(dish);
  const renderSelectedDish = (dish) => {
    if (dish != null) {
      return (
        <div className="row mt-2">
          <div className="col-12 col-md-12" style={{ textAlign: "center" }}>
            <img
              src={process.env.PUBLIC_URL + dish.image}
              alt="Food img"
              width="150"
            />

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
                      <br />
                      <strong>
                        {new Intl.DateTimeFormat("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        }).format(new Date(Date.parse(comment.date)))}
                      </strong>
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
  return <div>{renderSelectedDish(dish)}</div>;
};

export default DishDetails;
