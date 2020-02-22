import React from 'react';

const validationcomponent = (props) => {
	let message = "text long enough";
	if(props.inputLength <= 5){
		message = "text is too short";
	} else {
		message = "text is long enough.";
	}
	return (
		<div>
			<p>{message}</p>
		</div>
	)
}
export default validationcomponent;