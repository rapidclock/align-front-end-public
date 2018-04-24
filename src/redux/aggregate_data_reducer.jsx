export default function aggregateDataReducer( state = {
	genderStats: null,
	stateStats: null,
	campusStats: null,
	scholarshipStats: null,
	undergradMajorStats: null,
	highestEducationStats: null,
	error: null
}, action) {
	switch (action.type) {
		case "SET_GENDER_STATS": {
			return {
				...state,
				genderStats: action.payload
			}
		}
		case "SET_STATE_STATS": {
			return {
				...state,
				stateStats: action.payload
			}
		}
		case "SET_CAMPUS_STATS": {
			return {
				...state,
				campusStats: action.payload
			}
		}
		case "SET_SCHOLARSHIP_STATS": {
			return {
				...state,
				scholarshipStats: action.payload
			}
		}
		case "SET_UNDERGRAD_MAJOR_STATS": {
			return {
				...state,
				undergradMajorStats: action.payload
			}
		}
		case "SET_HIGHEST_EDUCATION_STATS": {
			return {
				...state,
				highestEducationStats: action.payload
			}
		}
		default: {
			return state
		}
	}
}