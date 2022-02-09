import {Route, Switch} from "react-router-dom";
import HomePage from "./HomePage";
import React from "react";


export const useRoutes = (role) => {
    switch (role) {
        case "admin":
            return (
                <div className="App">
                    <HomePage/>
                </div>
            );
        case "ROLE_USER":
            return (
                <div className="App">
                    <HomePage/>
                </div>
            )
        default:
            return (
                <h1>Error user role</h1>
            )
    }
}
