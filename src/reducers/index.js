import { combineReducers } from "redux";
import { REQUEST_TWEETS, RECEIVE_TWEETS } from "../actions";
import mockedTweets from "./mockedTweets";

function tweets(state = mockedTweets, action) {
  switch (action.type) {
    case REQUEST_TWEETS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_TWEETS:
      return Object.assign({}, state, {
        isFetching: false,
        tweets: action.tweets,
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
