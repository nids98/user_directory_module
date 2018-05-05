import React, { Component } from 'react';
import './addnewuser';

const Header = () =>{
	return(
		<div>
			<nav className="navbar navbar-light bg-light" id ="f">
				<div className="container">
  					<span className="navbar-brand mb-0 h1">User Directory</span>
  					<button className="btn btn-primary my-2 my-sm-0" type="add"><i className="fas fa-plus-circle"></i>Add new user</button>
  				</div>
			</nav>
		</div>
		);
}

export default Header;
