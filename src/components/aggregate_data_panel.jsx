import React from 'react';

import {Card, CardHeader, CardText} from 'material-ui';

import {Doughnut} from 'react-chartjs-2';

class AggregateDataPanel extends React.Component {

	randomColorGen(){
    	return Math.floor((Math.random() * 100) + (Math.random() * 100) + (Math.random() * 50) + 1);
	};

	render() {
		const width = window.innerWidth;
		const isMobile = width < 600;

		let genderStats = this.props.aggregated.genderStats === null ? {} : this.props.aggregated.genderStats;
		let genderKeys = Object.keys(genderStats);
		let genderValues = Object.values(genderStats);

		const genderData = {
			labels: genderKeys,
			datasets: [{
				data: genderValues,
				backgroundColor: [
					'#6699ff',
					'#ff6699'
				],
				hoverBackgroundColor: [
					'#6699ff',
					'#ff6699'
				]
			}]
		};

		let stateStats = this.props.aggregated.stateStats === null ? {} : this.props.aggregated.stateStats;
		let stateKeys = Object.keys(stateStats);
		let stateValues = Object.values(stateStats);
		let stateColors = [];

		for(let r,g,b, n = 0; n < stateKeys.length; n++){
			r = this.randomColorGen();
			g = this.randomColorGen();
			b = this.randomColorGen();
			stateColors.push("rgba("+r+","+g+","+b+",1)");
		}

		const stateData = {
			labels: stateKeys,
			datasets: [{
				data: stateValues,
				backgroundColor: stateColors,
			}]
		};

		let campusStats = this.props.aggregated.campusStats === null ? {} : this.props.aggregated.campusStats;
		let campusKeys = Object.keys(campusStats);
		let campusValues = Object.values(campusStats);
		let campusColors = [];

		for(let r,g,b, n = 0; n < campusKeys.length; n++){
			r = this.randomColorGen();
			g = this.randomColorGen();
			b = this.randomColorGen();
			campusColors.push("rgba("+r+","+g+","+b+",1)");
		}

		const campusData = {
			labels: campusKeys,
			datasets: [{
				data: campusValues,
				backgroundColor: campusColors,
			}]
		};

		let scholarshipStats = this.props.aggregated.scholarshipStats === null ? {} : this.props.aggregated.scholarshipStats;
		let scholarshipKeys = Object.keys(scholarshipStats);
		let scholarshipValues = Object.values(scholarshipStats);
		let scholarshipColors = [];

		for(let r,g,b, n = 0; n < scholarshipKeys.length; n++){
			r = this.randomColorGen();
			g = this.randomColorGen();
			b = this.randomColorGen();
			scholarshipColors.push("rgba("+r+","+g+","+b+",1)");
		}

		const scholarshipData = {
			labels: scholarshipKeys,
			datasets: [{
				data: scholarshipValues,
				backgroundColor: scholarshipColors,
			}]
		};

		let undergradMajorStats = this.props.aggregated.undergradMajorStats === null ? {} : this.props.aggregated.undergradMajorStats;
		let undergradMajorKeys = Object.keys(undergradMajorStats);
		let undergradMajorValues = Object.values(undergradMajorStats);
		let undergradMajorColors = [];

		for(let r,g,b, n = 0; n < undergradMajorKeys.length; n++){
			r = this.randomColorGen();
			g = this.randomColorGen();
			b = this.randomColorGen();
			undergradMajorColors.push("rgba("+r+","+g+","+b+",1)");
		}

		const undergradMajorData = {
			labels: undergradMajorKeys,
			datasets: [{
				data: undergradMajorValues,
				backgroundColor: undergradMajorColors,
			}]
		};

		let highestEducationStats = this.props.aggregated.highestEducationStats === null ? {} : this.props.aggregated.highestEducationStats;
		let highestEducationKeys = Object.keys(highestEducationStats);
		let highestEducationValues = Object.values(highestEducationStats);
		let highestEducationColors = [];

		for(let r,g,b, n = 0; n < highestEducationKeys.length; n++){
			r = this.randomColorGen();
			g = this.randomColorGen();
			b = this.randomColorGen();
			highestEducationColors.push("rgba("+r+","+g+","+b+",1)");
		}

		const highestEducationData = {
			labels: highestEducationKeys,
			datasets: [{
				data: highestEducationValues,
				backgroundColor: highestEducationColors,
			}]
		};

		const options = isMobile ?  {
			legend: {
				position: 'none',
			},
		} : null;

		return(
			<div style={resultListStyle}>
				<Card
					style={cardStyle} >
					<CardHeader
						title="Undergraduate Studies"
						subtitle="What did students study before coming to the Align program?"
						actAsExpander={true}
	  					showExpandableButton={true} />
					<CardText expandable={true}>
						<Doughnut data={undergradMajorData} options={options} />
					</CardText>
				</Card>
				<Card
					style={cardStyle} >
					<CardHeader
						title="Gender breakdown of our students:"
						actAsExpander={true}
      					showExpandableButton={true} />
					<CardText expandable={true}>
						<Doughnut data={genderData} options={options} />
					</CardText>
				</Card>
				<Card
					style={cardStyle}>
					<CardHeader
						title="Origin of our students"
						subtitle="Which states are our students from?"
						actAsExpander={true}
      					showExpandableButton={true} />
					<CardText expandable={true}>
						<Doughnut data={stateData} options={options} />
					</CardText>
				</Card>
				<Card
					style={cardStyle} >
					<CardHeader
						title="Multiple choices at multiple campuses"
						subtitle="Where are students enrolled?"
						actAsExpander={true}
      					showExpandableButton={true} />
					<CardText expandable={true}>
						<Doughnut data={campusData} options={options} />
					</CardText>
				</Card>
				<Card
					style={cardStyle}>
					<CardHeader
						title="Academic reward"
						subtitle="How many students havescholarships?"
						actAsExpander={true}
      					showExpandableButton={true} />
					<CardText expandable={true}>
						<Doughnut data={scholarshipData} options={options} />
					</CardText>
				</Card>
				<Card
					style={cardStyle}>
					<CardHeader
						title="Do I need to have a masters already?"
						subtitle="Highest education level of current students in the Align program"
						actAsExpander={true}
      					showExpandableButton={true} />
					<CardText expandable={true}>
						<Doughnut data={highestEducationData} options={options} />
					</CardText>
				</Card>
			</div>
		);
	}
}

const resultListStyle = {
	minHeight: "100vh",
	minWidth: "100vw",
	justifyContent: "center",
	display: "flex",
	flexWrap: "wrap",
	webKitFlexWrap: "wrap",
}

const cardStyle = 
{
	width:"100%",
	maxWidth:"800px",
	maxHeight:"500px",
	margin: "10px",
	paddingBottom: "10px"
};

export default AggregateDataPanel; 