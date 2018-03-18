export function addCoop(coop) {
	return {
		type: 'ADD_COOP',
		payload: coop
	}
}

export function removeCoop(coop) {
	return {
		type: 'REMOVE_COOP',
		payload: coop
	}
}

export function addDegree(degree) {
	return {
		type: 'ADD_DEGREE',
		payload: degree
	}
}

export function removeDegree(degree) {
	return {
		type: 'REMOVE_DEGREE',
		payload: degree
	}
}

export function addUniversity(university) {
	return {
		type: 'ADD_UNIVERSITY',
		payload: university
	}
}

export function removeUniversity(university) {
	return {
		type: 'REMOVE_UNIVERSITY',
		payload: university
	}
}

export function addYear(year) {
	return {
		type: 'ADD_YEAR',
		payload: year
	}
}

export function removeYear(year) {
	return {
		type: 'REMOVE_YEAR',
		payload: year
	}
}