import { combineReducers } from "redux";
import { REQUEST_TWEETS, RECEIVE_TWEETS } from "../actions";

function tweets(
  state = {
    isFetching: true,
    messages: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_TWEETS:
      return Object.assign({}, state, {
        isFetching: true,
        messages: []
      });
    case RECEIVE_TWEETS:
      return Object.assign({}, state, {
        isFetching: false,
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
