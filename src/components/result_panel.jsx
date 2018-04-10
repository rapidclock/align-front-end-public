import React from 'react';
import { Table } from 'reactstrap';

import 'css/ResultPanel.css';

class ResultPanel extends React.Component {

	render() {
		let students = this.props.results.students;

		let isMobile = this.props.isMobile;

		students = students !== undefined ? students : [];

		console.log(students, "all the data");

		return(
			<div id="result_panel_main_container">
				{isMobile ? (
					<div>
						<Table>
			        <thead>
			          <tr>
			            <th>Coop</th>
			            <th>Undergrad Degree Subject</th>
			            <th>Undergraduate University</th>
			            <th>Graduation Year at NEU</th>
			          </tr>
			        </thead>
			        <tbody> 
			        		
			        		{
			        		students.map(function(student){
										return (
											<tr>
												<th>{student.coop}</th>
												<th>{student.undergraddegree}</th>
												<th>{student.undergradschool}</th>
												<th>{student.graduationyear}</th>
											</tr>
										);
									})
			        	}
			        </tbody>
			      </Table>
					</div>
				) : (
					<div>
						<div id="result_header">
							<a className="result_header_title">
								Students Like Me <br />Search Results
							</a>
							<hr />
						</div>
						<div id="result_list">
							<Table dark>
				        <thead>
				          <tr>
				            <th>Coop</th>
				            <th>Undergrad Degree Subject</th>
				            <th>Undergraduate University</th>
				            <th>Graduation Year at NEU</th>
				          </tr>
				        </thead>
				        <tbody> 
				        		
				        		{
				        		students.map(function(student){
											return (
												<tr>
													<th>{student.coop}</th>
													<th>{student.undergraddegree}</th>
													<th>{student.undergradschool}</th>
													<th>{student.graduationyear}</th>
												</tr>
											);
										})
				        	}
				        </tbody>
				      </Table>
						</div>
					</div>
				)}
			</div>
		);
	}
}


export default ResultPanel;
