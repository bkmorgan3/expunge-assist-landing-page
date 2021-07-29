import React from "react";
import Header from "../components/headers";
import Nav from "../components/Nav"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Nav />
      <Header headerText="This is great." />
      <Header headerText="Another Header" />
      <p>Such wow. Very React.</p>
    </div>
  )
}