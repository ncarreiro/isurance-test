// import axios from "axios";
import mockedTweets from "./mockedTweets";

export const REQUEST_TWEETS = "REQUEST_TWEETS";
export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

function requestTweets(query) {
  return {
    type: REQUEST_TWEETS,
    query
  };
}

function receiveTweets(query, response) {
  return {
    type: RECEIVE_TWEETS,
    query,
    messages: response.statuses,
    receivedAt: Date.now()
  };
}

export function fetchTweets(query) {
  return dispatch => {
    dispatch(requestTweets(query));
    dispatch(receiveTweets(query, mockedTweets));

    // Axios Request with the Twitter API
    // return axios
    //   .get(`https://api.twitter.com/1.1/search/tweets.json?q=${query}`)
    //   .then(response => response.json())
    //   .then(json => dispatch(receiveTweets(query, json)));
  };
}
