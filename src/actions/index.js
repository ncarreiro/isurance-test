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
    // Transforming query to lower case + removing special characters (that are not @ nor #)
    const cleanQuery = query.toLowerCase().replace(/[^\w\s@#]/gi, "");

    // Dispatch of the Request Action (start)
    dispatch(requestTweets(cleanQuery));

    // Dispatch of the Receive Action (response)
    dispatch(receiveTweets(cleanQuery, mockedTweets));

    // Axios Request with the Twitter API (needs an OAuth Token from a Twitter Developer App to finish this)
    // return axios
    //   .get(`https://api.twitter.com/1.1/search/tweets.json?q=${cleanQuery}`)
    //   .then(response => response.json())
    //   .then(json => dispatch(receiveTweets(query, json)));
  };
}
