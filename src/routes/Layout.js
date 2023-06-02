import React from "react";
import { Navigation } from "../components/Navigation"
import { Outlet } from "react-router-dom";

export function Layout() {
    return(
        <div data-testid='app'>
        <Navigation />
        <Outlet />
</div>
    );
}