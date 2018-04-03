import React from 'react';
import StudentResult from 'components/student_result.jsx';
import 'css/ResultPanel.css';

class ResultPanel extends React.Component {
	constructor(props){
		super(props);

		this.state = {
      currentPage: 1,
      resultsPerPage: 20,
    };

		this.handleChangePage = this.handleChangePage.bind(this);
	}

	getResultList(){
		//placeholder code
		var size = 2000;
		var resultArr = new Array(size);

		for(var x = 0; x < size; x++ ){
			resultArr[x] = new ResultItem(
				"name" + x,
				"coop" + x,
				"undergrad" + x,
				"location" + x,
				"year" + x
			);
		}

		return resultArr;
	}

	handleChangePage(event) {
		console.log(event.target.id);

    this.setState({
      currentPage: Number(event.target.id),
    });
  }

	getCurrentResultList(currentPage, resultsPerPage) {
		var resultArr = this.getResultList();
		const indexOfLastResult = currentPage * resultsPerPage;
	  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
	  const currentResults = resultArr.slice(indexOfFirstResult, indexOfLastResult);
		console.log(indexOfFirstResult);

		return currentResults.map(function(listValue, index){
			console.log(listValue);
			return (
				<StudentResult
					name={listValue.name}
					coop={listValue.coop}
					undergrad={listValue.undergrad}
					location={listValue.location}
					year={listValue.year}/>
			);
		})
	}

	render() {
		var resultArr = this.getResultList();
		const {isMobile} = this.props;
		const {resultsPerPage, currentPage} = this.state;
		console.log('render' + currentPage);

		const pageNumbers = [];
	  for (let i = 1; i <= Math.ceil(resultArr.length / resultsPerPage); i++) {
		  pageNumbers.push(i);
	  }

		const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleChangePage}
        >
          {number}
        </li>
      );
    });

		// const renderCurrentStudentList = this.getCurrentResultList(currentPage, resultsPerPage);

		const indexOfLastResult = currentPage * resultsPerPage;
	  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
	  const currentResults = resultArr.slice(indexOfFirstResult, indexOfLastResult);
		console.log(currentResults);
		const renderCurrentStudentList = currentResults.map(function(listValue, index){
			return (
				<StudentResult
					name={listValue.name}
					coop={listValue.coop}
					undergrad={listValue.undergrad}
					location={listValue.location}
					year={listValue.year}/>
			);
		})

		const renderStudentList = resultArr.map(function(listValue, index){
			return (
				<StudentResult
					name={listValue.name}
					coop={listValue.coop}
					undergrad={listValue.undergrad}
					location={listValue.location}
					year={listValue.year}/>
			);
		})

		return(
			<div id="result_panel_main_container">
				{isMobile ? (
					<div>
						{renderStudentList}
					</div>
				) : (
					<div>
						<div id="result_list">
							{renderStudentList}
						</div>
					</div>
				)}
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
