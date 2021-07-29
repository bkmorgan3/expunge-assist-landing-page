import React from "react";
import Header from "../components/headers";
import { Link } from "gatsby";

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
        <Header headerText="This is great." />
    <Header headerText="Another Header" />
      <p>Such wow. Very React.</p>
    </div>
  )
}