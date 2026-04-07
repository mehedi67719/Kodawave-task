import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Root from "./Root";
import Service from "../Pages/Service";
import About from "../Pages/About";
import Blog from "../Pages/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:'/service',
        Component:Service
      },
      {
        path:"/about",
        Component:About
      },
      {
        path:"/blog",
        Component:Blog
      }
    ]
  },
]);