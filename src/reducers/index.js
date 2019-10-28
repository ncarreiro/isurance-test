import { combineReducers } from "redux";
import { REQUEST_TWEETS, RECEIVE_TWEETS } from "../actions";

function tweets(
  state = {
    isFetching: false,
    messages: []
  },
  action
) {
  switch (action.type) {
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
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  tweets
});

export default rootReducer;
