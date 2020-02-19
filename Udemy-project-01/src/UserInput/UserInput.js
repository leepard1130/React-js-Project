import React from 'react';
import './UserInput.css';

const userinput = (props) => {
	return (
		<div className = "UserInput">
			<input type ="text"
			onChange ={props.changed}
			currentName = {props.changed}/>
		</div>
	)

}

export default userinput;