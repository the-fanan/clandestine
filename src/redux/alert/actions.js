import {SHOW_ALERT, HIDE_ALERT} from './types.js'

export const showAlert = (data) => async (dispatch) => {
	dispatch({
		type: SHOW_ALERT,
		payload: data,
	}) 
	
  setTimeout(() => {
		dispatch({
			type: HIDE_ALERT,
		})
	}, 5000);
}