import React from "react";
import { Reset } from "styled-reset";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div style={{ height: "100rem" }}>
      <Reset />

      <Nav />
    </div>
  );
}
