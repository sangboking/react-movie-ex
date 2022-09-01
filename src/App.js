import React from "react";
import { Reset } from "styled-reset";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div style={{ height: "100rem" }}>
      <Reset />

      <Nav />
      <Banner />
    </div>
  );
}
