import React from 'react';
import './UserOutput.css';

const useroutput = (props) => {
	return (
		<div className = "UserOutput">
			<p>This is created by {props.name}</p>
			<p>in {new Date().toLocaleTimeString()}.</p>
		</div>
	)
	
}

export default useroutput;