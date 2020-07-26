import React from "react";
import MessageDetails from "./MessageDetails";
import { Link, Route, Switch, Redirect } from "react-router-dom";

const Message = ({ match, history, location }) => {
  return (
    <div>
      {console.log("Match---", match)}
      {console.log("History-", history)}
      {console.log("Location-", location)}

      <ul>
        {[...Array(10).keys()].map((n) => {
          return (
            <li key={n}>
              <Link to={`${match.url}/${n + 1}`}>Message {n + 1}</Link>
            </li>
          );
        })}
      </ul>

      <Switch>
        <Route
          exact
          path={match.url}
          render={() => <h3>Please select a message</h3>}
        />
        {/* <Route
          path={`${match.url}/:id(\\d+)`}
          render={({ match }) => <h3>You have selected : {match.params.id}</h3>}
        /> */}
        <Route
          path={`${match.url}/:id(\\d+)`}
          component={({ match }) => <MessageDetails id={match.params.id} />}
        />
        <Redirect to="/message" />
      </Switch>

      <h3>Message with ID {match.params.id}</h3>
    </div>
  );
};

export default Message;
