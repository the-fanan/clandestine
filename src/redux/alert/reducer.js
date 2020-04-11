import {SHOW_ALERT, HIDE_ALERT} from './types.js'

const INIT_STATE = {
	show: false,
	heading: '',
	message: '',
	type: '',
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case SHOW_ALERT:
			return {...state, show: true, heading: action.payload.heading, message: action.payload.message, type: action.payload.type};
		case HIDE_ALERT:
			return {...state, show: false, heading: '', message: ''};
		default: return {...state };
	}
}