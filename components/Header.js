import React, { Component } from 'react'
import Link from "next/link"

const linkStyle = {
  marginRight: 15
}

export default class Header extends Component {
  render() {
    return (
      <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
      </div>
    )
  }
}
