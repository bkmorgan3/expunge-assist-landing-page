import React from "react"
import { Link } from "gatsby"
import Header from "../components/headers"

export default function Contact() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Header headerText="Contact" />
      <p>Send us a message!</p>
    </div>
  )
}