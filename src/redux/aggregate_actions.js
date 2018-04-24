export function setGenderStats(stats) {
	return {
		type: 'SET_GENDER_STATS',
		payload: stats
	}
}

export function setStateStats(stats) {
	return {
		type: 'SET_STATE_STATS',
		payload: stats
	}
}

export function setCampusStats(stats) {
	return {
		type: 'SET_CAMPUS_STATS',
		payload: stats
	}
}

export function setScholarshipStats(stats) {
	return {
		type: 'SET_SCHOLARSHIP_STATS',
		payload: stats
	}
}

export function setUndergradMajorStats(stats) {
	return {
		type: 'SET_UNDERGRAD_MAJOR_STATS',
		payload: stats
	}
}

export function setHighestEducationStats(stats) {
	return {
		type: 'SET_HIGHEST_EDUCATION_STATS',
		payload: stats
	}
}