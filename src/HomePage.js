import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "./routes";

// pages
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import DashboardOverview from "./components/DashboardOverview";
import Footer from "./components/Footer";
import {CounterWidget} from "./components/Widgets";

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => (props) } />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    const localStorageIsSettingsVisible = () => {
        return false
    }

    const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

    const toggleSettings = () => {
        setShowSettings(!showSettings);
        localStorage.setItem('settingsVisible', !showSettings);
    }

    return (
        <Route {...rest} render={props => (
            <>
                <Sidebar />
                <main className="content">
                    <Navbar />
                    <Component {...props}/>
                </main>
            </>
        )}
        />
    );
};

export default () => (
    <Switch>
        <RouteWithSidebar path={Routes.Navbars.path} component={DashboardOverview}/>
        <RouteWithSidebar path={Routes.DashboardOverview.path} component={CounterWidget}/>
    </Switch>
);
