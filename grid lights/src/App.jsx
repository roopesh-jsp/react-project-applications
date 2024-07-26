import React from "react";
import GridLights from "./components/GridLights";

const config = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
export default function App() {
  return <GridLights grids={config.flat()} />;
}
