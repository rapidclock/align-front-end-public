import React from 'react';

import '../containers/css/ResultPanel.css';
import StudentResult from './student_result';

class ResultPanel extends React.Component {

	render() {
		const width = window.innerWidth;
		const isMobile = width < 600;

		const mobileResultListStyle = {
			justifyContent: "flex-start",
			display: "flex",
			flexWrap: "wrap",
			webKitFlexWrap: "wrap",
			minHeight: "100vh",
			midWidth: width
		}

		const resultListStyle = {
			justifyContent: "flex-start",
			display: "flex",
			flexWrap: "wrap",
			webKitFlexWrap: "wrap",
			minHeight: "100vh",
		}

	    let students = this.props.results.students === undefined ? [] : this.props.results.students;

		let isLoading = students !== undefined ? (students.length < 1) : true;
		let mainDiv;

		if(isLoading){
			mainDiv = (
			<div 
				style={isMobile ? mobileResultListStyle : resultListStyle}>
				<StudentResult
					key={0}
					mobile={isMobile}
					coop="N/A"
					undergradschool="No results"
					graduationyear="N/A"
					undergraddegree="N/A" />
			</div>
			);
		}
		else{
			mainDiv = (
			<div 
				style={isMobile ? mobileResultListStyle : resultListStyle}>
				{students.map(function(student, index){
					return (
					<StudentResult
						key={index}
						mobile={isMobile}
						coop={student.coop}
						undergradschool={student.undergradschool}
						graduationyear={student.graduationyear}
						undergraddegree={student.undergraddegree} />
					);
				})}
			</div>
			);
		}

	    return(
	      <div id="result_panel_main_container">
	      	{
	      		mainDiv
	      	}
	  		</div>
	  	);
	}
}


export default ResultPanel;