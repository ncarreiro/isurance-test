import { combineReducers } from "redux";
import { REQUEST_TWEETS, RECEIVE_TWEETS, CLEAR_TWEETS } from "../actions";

export const initialState = {
  isFetching: false,
  messages: [],
  query: ""
};

function tweets(state = initialState, action) {
  switch (action.type) {
    case CLEAR_TWEETS:
      return Object.assign({}, state, {
        query: ""
      });
    case REQUEST_TWEETS:
      return Object.assign({}, state, {
        isFetching: true,
        query: action.query,
        messages: []
      });
    case RECEIVE_TWEETS:
      return Object.assign({}, state, {
        isFetching: false,
        query: action.query,
        messages: action.messages,
        receivedAt: Date.now()
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  tweets
});

export default rootReducer;
