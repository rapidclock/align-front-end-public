import React, { Component } from 'react';
import Footer from  'components/footer.jsx';
import StudentResult from 'components/student_result.jsx';
import StudentFilter from 'components/student_filter.jsx';
import ResultPanel from 'components/result_panel.jsx';
import Header from 'components/header.jsx';

import 'css/SearchPage.css';

const MOBILE_VIEW_WIDTH = 600;

class SearchPage extends Component {
  constructor() {
	  super();
	  this.state = {
	    width: window.innerWidth,
	  };
	}

	componentWillMount() {
	  window.addEventListener('resize', this.handleWindowSizeChange);
	}

	componentWillUnmount() {
	  window.removeEventListener('resize', this.handleWindowSizeChange);
	}

	handleWindowSizeChange = () => {
	  this.setState({ width: window.innerWidth });
	};

  render() {
    const {width} = this.state;
    const isMobile = width < MOBILE_VIEW_WIDTH;

    const mobileView = (
      <div>
	      <div id="main_container">
          <div id="filter_panel_mobile">
	      		<StudentFilter isMobile={isMobile}/>
	      	</div>
	      	<div id="result_panel_mobile">
	      		<ResultPanel/>
	      	</div>
	      </div>
	      <div>
	      	<Footer/>
	      </div>
      </div>
    )

    const desktopView = (
    	<div>
	    	<div>
	    	</div>
	      <div id="main_container">
	      	<div id="filter_panel">
	      		<StudentFilter isMobile={isMobile}/>
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

    return isMobile ? mobileView : desktopView;
  }
}

export default SearchPage;
