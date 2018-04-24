import React from 'react';
import {Card, CardHeader, Avatar} from 'material-ui';

class StudentResult extends React.Component {
	render() {
		let graduationyear = this.props.graduationyear === undefined ? "" : this.props.graduationyear;
		let undergraddegree = this.props.undergraddegree === undefined ? "" : this.props.undergraddegree;
		let undergradschool = this.props.undergradschool === undefined ? "" : this.props.undergradschool;
		let coop = this.props.coop === undefined ? "" : this.props.coop;
		let isMobile = this.props.mobile === undefined ? false : this.props.mobile;

		let firstletter = undergradschool.substring(0,1) === null ? "*" : undergradschool.substring(0,1);
		let avatar = (
		<Avatar>
			{firstletter}
		</Avatar>);

		return(
			<Card
				style={isMobile ? mobileCardStyle : cardStyle}>
				<CardHeader
					title={"University:"}
					subtitle={undergradschool}
					avatar={avatar}
				/>
				<CardHeader
					title={"Coop:"}
					subtitle={coop}
					style={dataFieldStyle}
				/>
				<CardHeader
					title={"Undergraduate Degree:"}
					subtitle={undergraddegree}
					style={dataFieldStyle}
				/>
				<CardHeader
					title={"Graduation Year:"}
					subtitle={graduationyear}
					style={dataFieldStyle}
				/>
			</Card>
		);
	}
}

const mobileCardStyle={
	width: "100%",
	maxHeight: "300px",
	overflow: "hidden",
	margin: "10px",
	paddingBottom: "10px",
	paddingLeft:"20px"
}


const cardStyle={
	width: "200px",
	maxHeight: "300px",
	overflow: "hidden",
	margin: "10px",
	paddingBottom: "10px"
}

const dataFieldStyle = {padding:"0px", marginRight:"16px", marginLeft:"16px"};

export default StudentResult;