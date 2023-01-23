import { lazy } from "react";

// Make all pages rendered when go to it
export const Home = lazy(() => import("./Home"));
export const About = lazy(() => import("./About"));
export const Service = lazy(() => import("./Service"));
export const Work = lazy(() => import("./Work"));
