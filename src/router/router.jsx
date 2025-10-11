import { Component } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../components/Home/Home";


export const router = createBrowserRouter([
    {
      path: "/",
      Component:RootLayout,
      children:[
        {
            index:true,
            Component:Home
        }
      ]
    },
  ]);