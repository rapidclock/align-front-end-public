import {connect} from 'react-redux';
import AggregateDataPanel from '../components/aggregate_data_panel';

const mapStateToProps = (state) => {
	return {
		aggregated: state.aggregateData
	}
}

const AggregateDataPanelContainer = connect(mapStateToProps,)(AggregateDataPanel);
export default AggregateDataPanelContainer;