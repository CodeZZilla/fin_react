
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, HashRouter, Route} from "react-router-dom";

import "./scss/volt.scss";


import "react-datetime/css/react-datetime.css";
import Signin from "./pages/Signin";
import HomePage from "./HomePage";

import MainStore from "./store/MainStore";
import {useRoutes} from "./accessRoutes";
import {observer} from "mobx-react-lite";
/*import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";*/

const App = observer(() => {
    return (
        <Router>
            {MainStore.currentToken !== null ?
                useRoutes(MainStore.currentUser.roles[0]):
                <Route path='/'>
                    <Signin/>
                </Route>
            }
        </Router>
    );
})


ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    // <HashRouter>
    //
    //  {/* <Signin/>*/}
    //  {/*   <HomePage/>*/}
    //   {/*<ScrollToTop />
    //   <HomePage />*/}
    // </HashRouter>,
    document.getElementById("root")
);
