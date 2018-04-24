import React from 'react';

import { Checkbox, FlatButton, AutoComplete } from 'material-ui';

import { Label, Form } from 'reactstrap';


class FilterGroup extends React.Component {
	constructor(props) {
		super(props);

		let checked = [];
		let suggestions = this.props.all_items;
		let displayed = this.props.displayed;
		let title = this.props.title;

		suggestions = suggestions.filter(function(e){return this.indexOf(e)<0;},displayed);

		this.state = {
			title: title,
			labels: displayed,
			checked: checked,
			searchBar: false,
			searchText: '',
			suggestions: suggestions
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleCheck = this.handleCheck.bind(this);
	}

	componentWillReceiveProps(newProps){
		let displayed = newProps.displayed;
		let suggestions = newProps.all_items;

		suggestions = suggestions.filter(function(e){return this.indexOf(e)<0;},displayed);

		if(this.props !== newProps){
			this.setState((prevState) => {
				return ({
					suggestions: suggestions,
					labels: displayed,
				});
			});
		}
	}

	handleUpdateInput = (searchText) => {
		this.setState({
			searchText: searchText,
		});
	};

	handleNewRequest = (suggestion) => {
		let labels = this.state.labels.slice(0);
		let checked = this.state.checked.slice(0);
		let suggestions = this.state.suggestions.slice(0);
		let index = suggestions.indexOf(suggestion);

		suggestions.splice(index, 1);

		labels.push(suggestion);
		checked.push(suggestions);

		this.setState({
			searchText: '',
			labels: labels,
			checked: checked,
			searchBar: false,
			suggestions: suggestions,
		});
	};

	handleClick(event) {
		this.setState((prevState) => {
			return ({
				searchBar: !prevState.searchBar
			});
		});
	}

	handleCheck(event, isInputChecked) {
		let checked = this.state.checked;
		let labels = this.state.labels;

		if(isInputChecked && checked.indexOf(labels[event.target.name]) < 0){
			checked.push(labels[event.target.name]);
		}
		else {
			let index = checked.indexOf(labels[event.target.name]);
			checked.splice(index, 1);
		}

		// updates state for React updates
		this.setState({
			checked: checked
		});

		let selectedItem = this.state.labels[event.target.name];

		this.toggleState(selectedItem, isInputChecked);
	}

	toggleState(selectedItem, checked){
		switch(this.state.title) {
			case "Coop":
				if(checked){
					this.props.addSelectedCoop(selectedItem);
				}
				else {
					this.props.removeSelectedCoop(selectedItem);
				}
				break;
			case "Degree Subject":
				if(checked){
					this.props.addSelectedDegree(selectedItem);
				}
				else {
					this.props.removeSelectedDegree(selectedItem);
				}
				break;
			case "Undergraduate University":
				if(checked){
					this.props.addSelectedUniversity(selectedItem);
				}
				else {
					this.props.removeSelectedUniversity(selectedItem);
				}
				break;
			case "Year":
				if(checked){
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

	render() {
		let checkHandler = this.handleCheck;
		let clickHandler = this.handleClick;

		let itemArr = this.getFilterItemList();
		
		let suggestions = this.state.suggestions;

		let addSection = (
			<FlatButton 
				label="Add More"
				onClick={clickHandler} 
				style={addLabelStyle} >
			</FlatButton>
		);

		let searchBar = (
		<AutoComplete
			hintText="Search for more"
			searchText={this.state.searchText}
			onUpdateInput={this.handleUpdateInput}
			onNewRequest={this.handleNewRequest}
			dataSource={suggestions.sort()}
			filter={AutoComplete.fuzzyFilter}
			openOnFocus={true}
			underlineStyle={autosuggestStyle}
			underlineFocusStyle={autosuggestStyle}
		/>
		);

		let displayedOptions = 
		itemArr.map(function(listValue, index){
			return (
			<Checkbox
				key={index}
				name={ index.toString() }
				checked={listValue.checked}
				onCheck={checkHandler}
				label={listValue.label}
				iconStyle={checkboxIconStyle}
				labelStyle={checkboxLabelStyle}
			/>
			);
		});

		let addComponent = this.state.searchBar ? searchBar : addSection;
		if(this.state.suggestions.length === 0){
			addComponent = null;
		}

		return(
			<Form style={formStyle}>
				<Label style={titleLabelStyle}>{this.state.title}</Label>
				{displayedOptions}
				<div className="checkBoxItem">
					{addComponent}
				</div>
			</Form>
		);
	}
}

const autosuggestStyle = {
	color: '#e11a2c',
	borderColor: '#e11a2c'
}

const addLabelStyle = {
	color: '#e11a2c',
	fontFamily: '"HelveticaNeueW01-67MdCn 692710", "HelveticaNeueW01-45Ligh", "Helvetica Neue", HelveticaNeue, Helvetica, sans-serif'
}

const titleLabelStyle = {
	textDecoration: "underline",
	fontWeight: "100"
}

const checkboxIconStyle = {
	fill: '#e11a2c'
}

const checkboxLabelStyle = {
	fontWeight: "100",
	fontFamily: '"HelveticaNeueW01-67MdCn 692710", "HelveticaNeueW01-45Ligh", "Helvetica Neue", HelveticaNeue, Helvetica, sans-serif'
}

const formStyle = {
	marginTop: "10px",
	marginBottom: "10px"
}

class FilterItem {
	constructor(label, checked) {
		this.checked = checked;
		this.label = label;
	}
}

export default FilterGroup;
