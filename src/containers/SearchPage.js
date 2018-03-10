import React, { Component } from 'react';
import Footer from  'components/footer.jsx';
import StudentResult from 'components/student_result.jsx';
import StudentFilter from 'components/student_filter.jsx';
import ResultPanel from 'components/result_panel.jsx';
import Header from 'components/header.jsx';

import 'css/SearchPage.css';

class SearchPage extends Component {
  render() {
    return (
    	<div>
	    	<div>
	    	</div>
	      <div id="main_container">
	      	<div id="filter_panel">
	      		<StudentFilter/>
	      	</div>
	      	<div id="result_panel">
	      		<ResultPanel/>
	      	</div>
	      </div>
	      <div>
	      	<Footer/>
	      </div>
      </div>
    );
  }
}

export default SearchPage;

