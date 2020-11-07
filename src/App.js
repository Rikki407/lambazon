import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Components/Payment/Payment';

const App = () => {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log('THE USER IS  >>>', authUser);
            if (authUser) {
                // the user just logged in / the user was logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                });
            } else {
                // the user is logged out
                dispatch({
                    type: 'SET_USER',
                    user: null,
                });
            }
        });
    }, []);
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/payment">
                        <Header />
                        <Payment />
                    </Route>
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
