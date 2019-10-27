import axios from "axios";

export const REQUEST_TWEETS = "REQUEST_TWEETS";
export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

function requestTweets(query) {
  return {
    type: REQUEST_TWEETS,
    query
  };
}

function receiveTweets(query, json) {
  return {
    type: RECEIVE_TWEETS,
    query,
    tweets: json.data,
    receivedAt: Date.now()
  };
}

export function fetchTweets(query) {
  return dispatch => {
    console.log("FETCHING TWEETS!");
    dispatch(requestTweets(query));
    return axios
      .get(`https://api.twitter.com/1.1/search/tweets.json?q=test`)
      .then(response => response.json())
      .then(json => dispatch(receiveTweets(query, json)));
  };
}
