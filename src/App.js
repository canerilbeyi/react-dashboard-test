import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  Error,
  Users,
  AuthWrapper,
  Login,
  PrivateRoute,
} from "./pages/index";
import Products from "./pages/Products";
function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/users">
            <Users />
          </PrivateRoute>
          <PrivateRoute exact path="/products">
            <Products />
          </PrivateRoute>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  );
}

export default App;
