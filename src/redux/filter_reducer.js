export default function filters( state = {
	selectedCoops: [],
	selectedDegrees: [],
	selectedUniversities: [],
	selectedYears: [],
	error: null
}, action) {
	switch (action.type) {
		case "ADD_COOP": {
			return {
				...state,
				selectedCoops: [...state.selectedCoops, action.payload]
			}
		}
		case "REMOVE_COOP": {
			return {
				...state,
				selectedCoops: state.selectedCoops.filter(coop => coop != action.payload)
			}
		}
		case "ADD_DEGREE": {
			return {
				...state,
				selectedDegrees: [...state.selectedDegrees, action.payload]
			}
		}
		case "REMOVE_DEGREE": {
			return {
				...state,
				selectedDegrees: state.selectedDegrees.filter(degree => degree != action.payload)
			}
		}
		case "ADD_UNIVERSITY": {
			return {
				...state,
				selectedUniversities: [...state.selectedUniversities, action.payload]
			}
		}
		case "REMOVE_UNIVERSITY": {
			return {
				...state,
				selectedUniversities: state.selectedUniversities.filter(university => university != action.payload)
			}
		}
		case "ADD_YEAR": {
			return {
				...state,
				selectedYears: [...state.selectedYears, action.payload]
			}
		}
		case "REMOVE_YEAR": {
			return {
				...state,
				selectedYears: state.selectedYears.filter(year => year != action.payload)
			}
		}
		default: {
			return state
		}
	}
}