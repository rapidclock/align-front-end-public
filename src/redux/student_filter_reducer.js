export default function studentFilterReducer( state = {
	displayedCoops: [],
	displayedDegrees: [],
	displayedUniversities: [],
	displayedYears: [],
	error: null
}, action) {
	switch (action.type) {
		case "SET_DISPLAYED_COOPS": {
			return {
				...state,
				displayedCoops: action.payload
			}
		}
		case "SET_DISPLAYED_DEGREES": {
			return {
				...state,
				displayedDegrees: action.payload
			}
		}
		case "SET_DISPLAYED_UNIVERSITIES": {
			return {
				...state,
				displayedUniversities: action.payload
			}
		}
		case "SET_DISPLAYED_YEARS": {
			return {
				...state,
				displayedYears: action.payload
			}
		}
		default: {
			return state
		}
	}
}