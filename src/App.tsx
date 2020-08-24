import React from 'react';
import {InitPage} from './components/pages/init'
import {SignInPage} from "./components/pages/sign-in";
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import {RouteProps} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {DefaultState} from "./redux/reducers";
import * as AppActions from "./redux/actions/app";

interface PrivateRouteProps extends RouteProps {
  isLogged: boolean;
}

export function PrivateRoute(props: PrivateRouteProps) {
  let { isLogged, component: Component, ...rest }: any = props;
  return <Route {...rest} render={(props) => (
    isLogged
      ? <Component {...props}/>
      : <Redirect to={"/sign-in"} />
  )} />;
}

function MainPage() {
  return (
    <div style={{
      width: '100%',
      height: '100vh',
      background: 'red'
    }}/>
  )
}

function App() {
  const dispatch = useDispatch();
  dispatch(AppActions.start());
  const authorized = useSelector<DefaultState, boolean>(state => state.app.authorized);
  return (
    <Router>
      <div>
        <PrivateRoute
          isLogged={authorized}
          path='/'
          component={!authorized ? InitPage : MainPage}
        />
        <Route
          exact
          path='/sign-in'
          component={SignInPage}
        />
      </div>
    </Router>
  );
}

export default App;
