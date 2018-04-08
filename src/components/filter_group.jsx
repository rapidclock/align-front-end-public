import React from 'react';
import Autosuggest from 'react-autosuggest';

import AutoSuggestTheme from 'css/AutoSuggestTheme.css';

/*
var suggestions = ["test"];

// how to complete autosuggest
var getSuggestions = value => {
	const inputValue = value.trim().toLowerCase();
	const inputLength = inputValue.length;

	return inputLength === 0 ? [] : suggestions.filter(sugg =>
		sugg.toLowerCase().slice(0, inputLength) === inputValue
	);
}

// when suggestion is clicked
var getSuggestionValue = suggestion => suggestion;

var renderSuggestion = suggestion => (
	<div>
		{suggestion}
	</div>
);
*/


class FilterGroup extends React.Component {
	constructor(props) {
		console.log("created");
		super(props);

		console.log(props, "props");

		let checked = [];
		let suggestions = this.props.all_items;
		let displayed = this.props.displayed;
		let title = this.props.title;

		suggestions = suggestions.filter(function(e){return this.indexOf(e)<0;},displayed);

		this.state = {
			title: this.props.title,
			labels: displayed,
			checked: checked,
			searchBar: false,
			value: '',
			suggestions: suggestions,
			all_suggestions: suggestions
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentWillReceiveProps(newProps){
		console.log(newProps, "new filters 2");
		
		let displayed = newProps.displayed;
		let suggestions = newProps.all_items;

		suggestions = suggestions.filter(function(e){return this.indexOf(e)<0;},displayed);

		if(this.props !== newProps){
			console.log(newProps, "new props - update");
			this.setState((prevState) => {
				return ({
					suggestions: suggestions,
					all_suggestions: suggestions,
					labels: displayed,
				});
			});
		}
	}

	handleClick(event) {
		if(event.target.id === "addbutton"){
			this.setState((prevState) => {
				return ({
					searchBar: !prevState.searchBar
				});
			});
		}
	}

	handleChange(event) {
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
			default:
				console.log("error");
				break;
		}
	}

	getFilterItemList() {
		var size = this.state.labels.length;
		console.log(this.state, "getting items");
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
			value: newValue
    });
  };

	// Autosuggest will call this function every time you need to update suggestions.
	// You already implemented this logic above, so just use it.
	onSuggestionsFetchRequested = ({ value }) => {
		this.setState({
			suggestions: this.getSuggestions(value)
		});
	};

	// Autosuggest will call this function every time you need to clear suggestions.
	onSuggestionsClearRequested = () => {
		this.setState({
			value: ""
		});
	};

	onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method })  => {
		this.setState((prevState) => {
			var labels = this.state.labels.slice(0);
			var checked = this.state.checked.slice(0);
			var all_suggestions = this.state.all_suggestions.slice(0);
			var index = all_suggestions.indexOf(suggestion);
			all_suggestions.splice(index, 1);
			labels.push(suggestion);
			checked.push(suggestion);

			return ({
				labels: labels,
				checked: checked,
				searchBar: false,
				suggestions: all_suggestions,
				all_suggestions: all_suggestions
			});
		});
	}

	getSuggestions(value) {
		const inputValue = value.trim().toLowerCase();
		const inputLength = inputValue.length;
		let suggestions = this.state.all_suggestions;

		console.log(inputLength, "length");

		return inputLength === 0 ? [] : suggestions.filter(sugg =>
			sugg.toLowerCase().slice(0, inputLength) === inputValue
		);
	}

	getSuggestionValue = suggestion => suggestion;

	renderSuggestion = suggestion => (
		<div>
			{suggestion}
		</div>
	);

	render() {
		console.log(this.state, "rerender");
		var changeHandler = this.handleChange;
		var clickHandler = this.handleClick;

		var itemArr = this.getFilterItemList();

		var value = this.state.value;
		var suggestions = this.state.suggestions;

		var inputProps = {
      placeholder: 'Search',
      value,
      onChange: this.onChange
    };

		var addSection = (
			<a id="addbutton" onClick={clickHandler}>+ Add</a>
		);

		console.log(this.state.suggestions, "suggestions");

		var searchBar = (
			<Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={this.onSuggestionSelected}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
        theme={AutoSuggestTheme}
      />
		);

		console.log(itemArr, "itemArr");

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
