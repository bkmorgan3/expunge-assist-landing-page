import React from "react"
import Header from "../components/headers";
import Nav from "../components/Nav"

export default function Contact() {
  return (
    <div style={{ color: `teal` }}>
      <Nav />
      <Header headerText="Contact" />
      <p>Send us a message!</p>
    </div>
  )
}