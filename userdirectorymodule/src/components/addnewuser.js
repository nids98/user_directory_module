import React, { Component } from 'react';

const NewUser = () =>{
	return(
		<div className="modal" tabindex="-1" role="dialog">
			<div className="modal-header">
        	<h5 className="modal-title">Add new user</h5>
        		<div Name="modal-body">
					  <div className="container-fluid">
					    <div className="row">
					      <div className="col-md-6 ml-auto">
					      	Username:
					      	<input type="text" name = "username" placeholder="Username"/>
					      </div>
					    </div>
					    <div className="row">
					    	<div className="col-md-6 ml-auto">
					      		Address:
					      		<input type="text" name = "address" placeholder="Address"/>
					        </div>
					    </div>
					    <div className="row">
					    	<div className="col-md-6">
					      		Contact:
					      		<input type="text" name = "contact" placeholder="contact"/>
					      	</div>
					        <div className="col-md-6 ml-auto">
					      		Email:
					      		<input type="email" name = "email" placeholder="email"/>
					        </div>
					    </div>
					    <div className="row">
					    	<div className="container">
					      		<button className="btn btn-primary">Add new user</button>
					        </div>
					    </div>
					  </div>
					</div>
        	</div>
		</div>
		);
}

export default NewUser;
