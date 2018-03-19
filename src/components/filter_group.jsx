import React from 'react';

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
			checked: checked
		};

		this.handleChange = this.handleChange.bind(this);
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
								listValue.label
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
	constructor(label, checked) {
		this.checked = checked;
		this.label = label;
	}
}

export default FilterGroup;
