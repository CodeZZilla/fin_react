// =========================================================
// * Volt React Dashboard
// =========================================================

// * Product Page: https://themesberg.com/product/dashboard/volt-react
// * Copyright 2021 Themesberg (https://www.themesberg.com)
// * Official Repository: https://github.com/themesberg/volt-react-dashboard
// * License: MIT License (https://themesberg.com/licensing)

// * Designed and coded by https://themesberg.com

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. Please contact us to request a removal.

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, HashRouter, Route} from "react-router-dom";

// core styles
import "./scss/volt.scss";

// vendor styles
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
        <HashRouter>
            {MainStore.currentToken !== null ?
                useRoutes(MainStore.currentUser.roles[0]):
                <Route path='/'>
                    <Signin/>
                </Route>
            }
        </HashRouter>
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
