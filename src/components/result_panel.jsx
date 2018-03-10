import React from 'react';
import StudentResult from 'components/student_result.jsx';
import 'css/ResultPanel.css';

class ResultPanel extends React.Component {
	constructor(props){
		super(props);

		

	}

	getResultList(){
		//placeholder code
		var size = 2000;
		var resultArr = new Array(size);


		for(var x = 0; x < size; x++ ){
			resultArr[x] = new ResultItem("name" + x,
				                            "coop" + x,
				                            "undergrad" + x,
				                            "location" + x,
				                            "year" + x);
		}

		return resultArr;
	}

	render() {
		var resultArr = this.getResultList();

		return(
			<div id="result_panel_main_container">
				{
					resultArr.map(function(listValue, index){
						return (<StudentResult name={listValue.name}
							                     coop={listValue.coop}
							                     undergrad={listValue.undergrad}
							                     location={listValue.location}
							                     year={listValue.year}/>)
					})
				}
			</div>
		);
	}
}

class ResultItem {
	constructor(name, coop, undergrad, location, year) {
		this.name = name;
		this.coop = coop;
		this.undergrad = undergrad;
		this.location = location;
		this.year = year;
	}
}

export default ResultPanel;