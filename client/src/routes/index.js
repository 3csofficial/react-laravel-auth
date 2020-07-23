import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../components/app';
import RequireAuth from '../components/auth/require_auth';
import Signin from '../components/auth/signin';
import Signout from '../components/auth/signout';
import Signup from '../components/auth/signup';
import Users from '../components/users';
import logo from '../style/images/404.jpg';

const Routes = () => {
    return (
        <App>
        	<Switch>
	            <Route exact path="/" component={Signin} />
	            <Route exact path="/signout" component={Signout} />
	            <Route exact path="/signup" component={Signup} />
	            <Route exact path="/users" component={RequireAuth(Users)} />
		        <Route            
		            render={() => (
		                <div><img src={logo} alt="404" height="500" width="1100" /></div>
		            )}
		        />
	          </Switch>
        </App>
    );
};

export default Routes;
