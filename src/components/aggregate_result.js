import React from 'react';
import {Card, CardHeader} from 'material-ui';

class AggregateResult extends React.Component {
	render() {
		let title = this.props.title === undefined ? "" : this.props.title;

		return(
			<Card
				style={{
					width: "200px",
					maxHeight: "300px",
					overflow: "hidden",
					margin: "10px",
					paddingBottom: "10px"}}>
				<CardHeader
					title={title}
				/>
			</Card>
		);
	}
}
export default AggregateResult;