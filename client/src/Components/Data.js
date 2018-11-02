import React from 'react';
import { Card } from '@material-ui/core';
import '../css/Data.css';

const Data = (props) => {
	return (
		<Card className="Data">
			<div>
				<div>id: {props.id}</div>
				<div>Name: {props.firstName} {props.lastName}</div>
				<div>Email: {props.email} </div>
				<div>Gender: {props.gender}</div>
				<div>IP Address: {props.ipAddress}</div>
			</div>
		</Card>
	)
};

export default Data;