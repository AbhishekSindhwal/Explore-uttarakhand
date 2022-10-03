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
						<a class="navbar-brand specific-color" href="#">Explore-Uttarakhan</a>
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbar1">
							<ul class="navbar-nav">
								<li class="nav-item active">
									<a class="nav-link specific-color" href="#">Tehri</a>
								</li>
								<li class="nav-item">
									<a class="nav-link specific-color" href="#">Dehradun</a>
								</li>
								<li class="nav-item active">
									<a class="nav-link specific-color" href="#">Pauri</a>
								</li>
								<li class="nav-item active">
									<a class="nav-link specific-color" href="#">Rishikesh</a>
								</li>
								<li class="nav-item active">
									<a class="nav-link specific-color	" href="#">Uttarkashi</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>

			</div>

		</div>
	);
}
export default navbar;