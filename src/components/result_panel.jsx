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
    this.setState({
      currentPage: Number(event.target.id),
    });
  }

	getCurrentResultList(currentPage, resultsPerPage) {
		const resultArr = this.getResultList();
		const indexOfLastResult = currentPage * resultsPerPage;
	  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
	  const currentResults = resultArr.slice(indexOfFirstResult, indexOfLastResult);

		return currentResults.map(function(listValue, index){
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

	getPageNumbers(currentPage, pageNumbers, totalPages) {
		const PREV_ID = -1;
		const NEXT_ID = -2;
		const PAGE_COUNT = 9;
		const prev = (
			<li
				key={PREV_ID}
				id={Math.max(1, Number(currentPage) - 1)}
				onClick={this.handleChangePage}>
				Prev
			</li>
		);
		const next = (
			<li
				key={NEXT_ID}
				id={Math.min(Number(currentPage) + 1, totalPages)}
				onClick={this.handleChangePage}>
				Next
			</li>
		);
		const pageBefore = Math.max(1, currentPage - 4);
		const pageAfter = Math.min(totalPages, PAGE_COUNT + pageBefore);
		const selectedNumbers = pageNumbers.slice(pageBefore-1, pageAfter-1);
		const numbers = (selectedNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleChangePage}
        >
          {number}
        </li>
      );
    }));
		const shownPagination = (
			<div id='page-numbers'>
				{prev}
				{numbers}
				{next}
			</div>
		);
		return shownPagination;
	}

	render() {
		var resultArr = this.getResultList();
		const {isMobile} = this.props;
		const {resultsPerPage, currentPage} = this.state;

		const pageNumbers = [];
		const totalPages = Math.ceil(resultArr.length / resultsPerPage);
	  for (let i = 1; i <= totalPages; i++) {
		  pageNumbers.push(i);
	  }

		const renderPageNumbers = this.getPageNumbers(currentPage, pageNumbers, totalPages);

		const renderCurrentStudentList = this.getCurrentResultList(currentPage, resultsPerPage);

		return(
			<div id="result_panel_main_container">
				{isMobile ? (
					<div>
						{renderCurrentStudentList}
					</div>
				) : (
					<div>
						<div id="result_list">
							{renderCurrentStudentList}
						</div>
					</div>
				)}
				{renderPageNumbers}
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
