import {} from './types.js'

const INIT_STATE = {
	user: {},
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		default: return { ...state };
	}
}