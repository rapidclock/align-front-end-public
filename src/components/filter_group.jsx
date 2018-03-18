import React from 'react';
import * as filter from 'redux/filter_actions';
import { connect } from 'react-redux';

@connect((store) => {
	return { };
})
class FilterGroup extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: this.props.title,
			labels: this.props.item_arr,
			checked: this.props.checked,
			quantity: this.props.quantity
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		var checked = this.state.checked;

		checked[event.target.name] = event.target.checked;

		// updates state for React updates
		this.setState({
			title: this.state.title,
			labels: this.state.labels,
			checked: checked,
			quantity: this.state.quantity
		});

		var selectedItem = this.state.labels[event.target.name];

		// updates store for Redux updates
		switch(this.state.title) {
			case "Coop":
				if(event.target.checked){
					this.props.dispatch(filter.addCoop(selectedItem));
				}
				else {
					this.props.dispatch(ilter.removeCoop(selectedItem));
				}
			case "Degree Subject":
				if(event.target.checked){
					this.props.dispatch(filter.addDegree(selectedItem));
				}
				else {
					this.props.dispatch(filter.removeDegree(selectedItem));
				}
			case "Undergraduate University":
				if(event.target.checked){
					this.props.dispatch(filter.addUniversity(selectedItem));
				}
				else {
					this.props.dispatch(filter.removeUniversity(selectedItem));
				}
			case "Year":
				if(event.target.checked){
					this.props.dispatch(filter.addYear(selectedItem));
				}
				else {
					this.props.dispatch(filter.removeYear(selectedItem));
				}
		}
	}

	getFilterItemList() {
		var size = this.state.labels.length;
		var itemArr = new Array(size);

		for(var x = 0; x < size; x++){
			itemArr[x] = new FilterItem(
				this.state.labels[x],
				this.state.checked[x],
				this.state.quantity[x]);
		}

		return itemArr;
	}

	componentDidChange() {

	}

	render() {
		var changeHandler = this.handleChange;
		var itemArr = this.getFilterItemList();

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
								listValue.label + " (" + listValue.quantity + ")"
							}
							</label>
					</div>
					);
				})	
					
			}
			</div>
		</div>
		);
	}
}

class FilterItem {
	constructor(label, checked, quantity) {
		this.checked = checked;
		this.label = label;
		this.quantity = quantity;
	}
}

export default FilterGroup;