import React from 'react';
import ProfilePlaceholder from 'images/profile_placeholder.png';
import 'css/StudentResult.css';

class StudentResult extends React.Component {
	constructor(props){
		super(props);

		// this.state = {
		// 	name:this.props.name,
		// 	image:ProfilePlaceholder,
		// 	coop:this.props.coop,
		// 	undergrad:this.props.undergrad,
		// 	location:this.props.location,
		// 	year:this.props.year
		// };
	}

	render() {
		const {name, coop, undergrad, location, year} = this.props;
		const defalutImage = ProfilePlaceholder;
		const image = this.props.image ? this.props.image : defalutImage;

		return(
			<div id="student_result_container">
				<div id="student_above_fold">
					<img className="profile_picture" alt="" src={image}></img>
					<br/>
					<a className="student_name"> {name}
					</a>
				</div>
				<hr/>
				<div id="student_below_fold">
					<br/>
					<a className="student_label"> Coop
					</a>
					<br/>
					<a className="student_field"> {coop}
					</a>
					<br/>
					<a className="student_label"> Undergrad Degree
					</a>
					<br/>
					<a className="student_field"> {undergrad}
					</a>
					<br/>
					<a className="student_label"> Location
					</a>
					<br/>
					<a className="student_field"> {location}
					</a>
					<br/>
					<a className="student_label"> Year
					</a>
					<br/>
					<a className="student_field"> {year}
					</a>
				</div>
			</div>
		);
	}
}

export default StudentResult;
