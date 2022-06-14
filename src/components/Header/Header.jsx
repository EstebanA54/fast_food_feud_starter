import * as React from "react"
import "./Header.css"

export function Header(props) {
  return (
    <header className="header">
      <h1 className="title"> {props.header.title}</h1>
      <h4 className="tagline">{props.header.tagline}</h4>
      <p className="description">{props.header.description}</p>
    </header>
  )
}

export default Header
