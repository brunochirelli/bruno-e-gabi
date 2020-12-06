import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, destination, ...rest }) => {
  const family = useSelector((state) => state.guests.family.name);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (family) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/portal", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};

export default PrivateRoute;
