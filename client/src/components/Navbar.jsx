import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import "./Navbar.css"

function navbar() {
	return (
		<div>
			<div>
				<video
					autoPlay muted
					src={require("./vid1.mp4")}
				/>
			</div>
			<div className='navbar'>
				<nav class="navbar navbar-expand-sm fixed-top navbar-light">
					<div class="container">
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbar1">
							<ul class="navbar-nav">
								<li class="nav-item active">
									<a class="nav-link custom-color" href="#">Tehri Garhwal</a>
								</li>
								<li class="nav-item">
									<a class="nav-link custom-color" href="#">Dehradun</a>
								</li>
								<li class="nav-item active">
									<a class="nav-link custom-color" href="#">Pauri Garhwal</a>
								</li>
								<li class="nav-item active">
									<a class="nav-link custom-color" href="#">Rudraprayag</a>
								</li>
								<li class="nav-item active">
									<a class="nav-link custom-color	" href="#">Uttarkashi</a>
								</li>
								<li class="nav-item active">
									<a class="nav-link custom-color" href="#">Chamoli</a>
								</li>
								<li class="nav-item active">
									<a class="nav-link custom-color" href="#">Haridwar</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
			<div className='Title'>
				<h1>Explore Gharwal</h1>
			</div>
		</div>
	);
}
export default navbar;