import React, { Fragment } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
// import {  useState } from 'react';
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import { CSSTransition } from "react-transition-group";
import Register from "../../pages/Register";
import Test from "../../pages/Test";
import { fadeIn } from "./Motion";

import "./Motion.css";
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group";
const TIMEOUT = 200;

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/login/*", name: "About", Component: Login },
  { path: "/Register/*", name: "Contact", Component: Register },
  { path: "/test", name: "test", Component: Test },
];

export default function AnimatedRoute() {
  const location = useLocation();
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route
          key={path}
          exact
          path={path}
          element={
            <Transition location={location.pathname}>
              <Component />
            </Transition>
          }
        />
      ))}
    </Routes>
  );
}

const Transition = ({ children, location }) => {
  console.log("transiotn rendered");
  return (
    <TransitionGroup style={{ position: "relative" }}>
      <ReactTransition
        key={location}
        timeout={{
          enter: TIMEOUT,
          exit: TIMEOUT,
        }}
      >
        {(status) => (
          <div
            style={{
              ...fadeIn[status],
            }}
          >
            {children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  );
};
