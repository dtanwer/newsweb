import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className=" navbar navbar-expand-lg navbar-light bg-light mb-4 ps-2 pe-2">
  <a className="navbar-brand h1 text-danger font-weight-bold " href="/">NEWS TODAY</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" href="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/business">Business</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/sports">Sports</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/entertainment">Entertainment</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/technology">Technology</Link>
      </li>
    </ul>
  </div>
</nav>

  )
}
