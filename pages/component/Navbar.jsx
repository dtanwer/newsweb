import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav class=" navbar navbar-expand-lg navbar-light bg-light mb-4 ps-2 pe-2">
  <a class="navbar-brand h1 text-danger font-weight-bold " href="/">NEWS TODAY</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" href="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" href="/business">Business</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" href="/sports">Sports</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" href="/entertainment">Entertainment</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" href="/technology">Technology</Link>
      </li>
    </ul>
  </div>
</nav>

  )
}
