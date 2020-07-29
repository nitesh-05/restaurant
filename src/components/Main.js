import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import MainContainer from "./MainContainer";
import CardMenu from "./CardMenu";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import MenuDishDetail from "./MenuDishDetail";

import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const Main = (props) => {
  const HomePage = () => {
    return (
      <Home
        dish={props.dishes.filter((dish) => dish.featured)[0]}
        promotion={props.promotions.filter((promo) => promo.featured)[0]}
        leader={props.leaders.filter((leader) => leader.featured)[0]}
      />
    );
  };
  const Menu = () => {
    return <CardMenu dishes={props.dishes} />;
  };
  const DishWithId = ({ match }) => {
    // console.log(match.params.dishId);
    if (match.params.dishId < props.dishes.length) {
      return (
        <MenuDishDetail
          dish={
            props.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={props.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
        />
      );
    } else {
      return <Redirect to="/menu" />;
    }
  };

  const Aboutus = () => {
    return <About leaders={props.leaders} />;
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

export default withRouter(connect(mapStateToProps)(Main));
