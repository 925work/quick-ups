import React from 'react';

const NavbarProfile = () => {
    return (
        <div>
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/"><img src="./images/truck.png" alt="logo"/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Post a Pickup <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Claim a Pickup</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Profile
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Edit Profile</a>
          <a class="dropdown-item" href="#">Active Jobs</a>
          <a class="dropdown-item" href="#">Your Posts</a>

          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/">Sign Out</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
    </div>
    )
}
export default NavbarProfile;