import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import MainContainer from "./MainContainer";
import CardMenu from "./CardMenu";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import MenuDishDetail from "./MenuDishDetail";

import { DISHES } from "./shared/dishes";
import { COMMENTS } from "./shared/comments";
import { PROMOTIONS } from "./shared/promotions";
import { LEADERS } from "./shared/leaders";

import { Route, Switch, Redirect } from "react-router-dom";

const Main = () => {
  const dishes = DISHES;
  const comments = COMMENTS;
  const promotions = PROMOTIONS;
  const leaders = LEADERS;

  // console.log(dishes.length);

  const HomePage = () => {
    return (
      <Home
        dish={dishes.filter((dish) => dish.featured)[0]}
        promotion={promotions.filter((promo) => promo.featured)[0]}
        leader={leaders.filter((leader) => leader.featured)[0]}
      />
    );
  };
  const Menu = () => {
    return <CardMenu dishes={dishes} />;
  };
  const DishWithId = ({ match }) => {
    // console.log(match.params.dishId);
    if (match.params.dishId < dishes.length) {
      return (
        <MenuDishDetail
          dish={
            dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
        />
      );
    } else {
      return <Redirect to="/menu" />;
    }
  };

  const Aboutus = () => {
    return <About leaders={leaders} />;
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <Switch>
        <Route exact path="/menu" component={Menu} />

        <Route path="/menu/:dishId" component={DishWithId} />

        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={Aboutus} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
};

export default Main;
