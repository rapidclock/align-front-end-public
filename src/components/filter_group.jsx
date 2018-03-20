import React from 'react';
import Autosuggest from 'react-autosuggest';


const suggestions = ["Dell", "HP", "Reddit", "Amazon"];

// how to complete autosuggest
const getSuggestions = value => {
	const inputValue = value.trim().toLowerCase();
	const inputLength = inputValue.length;

	return inputLength === 0 ? [] : suggestions.filter(sugg =>
		sugg.toLowerCase().slice(0, inputLength) === inputValue
	);
}

// when suggestion is clicked
const getSuggestionValue = suggestion => suggestion;

const renderSuggestion = suggestion => (
	<div>
		{suggestion}
	</div>
);


class FilterGroup extends React.Component {
	constructor(props) {
		super(props);

		switch(this.props.title){
			case "Coop":
				var checked = this.props.selected.selectedCoops;
			case "Degree Subject":
				var checked = this.props.selected.selectedDegrees;
			case "Undergraduate University":
				var checked = this.props.selected.selectedUniversities;
			case "Year":
				var checked = this.props.selected.selectedYears;	
		}

		this.state = {
			title: this.props.title,
			labels: this.props.item_arr,
			checked: checked,
			searchBar: false,
			value: '',
			suggestions: suggestions
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleClick(event) {
		if(event.target.id == "addbutton"){
			this.setState({
				title: this.state.title,
				labels: this.state.labels,
				checked: this.state.checked,
				searchBar: !this.state.searchBar
			});
		}
	}

	handleChange(event) {
		var store = this.props.store;

		var checked = this.state.checked;
		var labels = this.state.labels;

		if(event.target.checked){
			checked.push(labels[event.target.name]);
		}
		else {
			var index = checked.indexOf(labels[event.target.name]);
			checked.splice(index, 1);
		}

		// updates state for React updates
		this.setState({
			title: this.state.title,
			labels: labels,
			checked: checked
		});

		var selectedItem = this.state.labels[event.target.name];

		// updates store for Redux updates
		switch(this.state.title) {
			case "Coop":
				if(event.target.checked){
					this.props.addSelectedCoop(selectedItem);
				}
				else {
					this.props.removeSelectedCoop(selectedItem);
				}
				break;
			case "Degree Subject":
				if(event.target.checked){
					this.props.addSelectedDegree(selectedItem);
				}
				else {
					this.props.removeSelectedDegree(selectedItem);
				}
				break;
			case "Undergraduate University":
				if(event.target.checked){
					this.props.addSelectedUniversity(selectedItem);
				}
				else {
					this.props.removeSelectedUniversity(selectedItem);
				}
				break;
			case "Year":
				if(event.target.checked){
					this.props.addSelectedYear(selectedItem);
				}
				else {
					this.props.removeSelectedYear(selectedItem);
				}
				break;
		}
	}

	getFilterItemList() {
		var size = this.state.labels.length;
		var itemArr = new Array(size);

		for(var x = 0; x < size; x++){
			var checked = false;

			if(this.state.checked.indexOf(this.state.labels[x]) > -1){
				checked = true;
			}

			itemArr[x] = new FilterItem(
				this.state.labels[x],
				checked);
		}

		return itemArr;
	}

	onChange = (event, { newValue }) => {
    this.setState({
    	title: this.state.title,
			labels: this.state.labels,
			checked: this.state.checked,
			value: newValue
    });
  };

	// Autosuggest will call this function every time you need to update suggestions.
	// You already implemented this logic above, so just use it.
	onSuggestionsFetchRequested = ({ value }) => {
		this.setState({
			title: this.state.title,
			labels: this.state.labels,
			checked: this.state.checked,
			suggestions: getSuggestions(value)
		});
	};

	// Autosuggest will call this function every time you need to clear suggestions.
	onSuggestionsClearRequested = () => {
		this.setState({
			title: this.state.title,
			labels: this.state.labels,
			checked: this.state.checked,
			suggestions: []
		});
	};

	onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method })  => {
		this.setState({
			title: this.state.title,
			labels: this.state.labels.push(suggestion),
			checked: this.state.checked,
			searchBar: false
		});
	}

	render() {
		var changeHandler = this.handleChange;
		var clickHandler = this.handleClick;

		var itemArr = this.getFilterItemList();

		const value = this.state.value;
		const suggestions = this.state.suggestions;

		const inputProps = {
      placeholder: 'Search',
      value,
      onChange: this.onChange
    };

		const addSection = (
			<a id="addbutton" onClick={clickHandler}>+ Add</a>
		);

		const searchBar = (
			<Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={this.onSuggestionSelected}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
		);

		return(
			<div id="filter_group_container">
				<a className="filter_group_title">{this.state.title}</a>
				<div id="filter_contents_container"> {
					itemArr.map(function(listValue, index){
						return (
						<div className="checkBoxItem" key={index}>
								<input
								name={index}
								type="checkBox"
								checked={listValue.checked}
								onChange={changeHandler}
								/>
								<label className="filter_group_label"> {
									listValue.label
								}
								</label>
						</div>
						);
					})
				}
				{this.state.searchBar ? searchBar : addSection}
				</div>
			</div>
		);
	}
}

class FilterItem {
	constructor(label, checked) {
		this.checked = checked;
		this.label = label;
	}
}

export default FilterGroup;
