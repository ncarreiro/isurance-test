// import axios from "axios";
import mockedTweets from "mocks/mockedTweets";

export const CLEAR_TWEETS = "CLEAR_TWEETS";
export const REQUEST_TWEETS = "REQUEST_TWEETS";
export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

export function clearTweets() {
  return {
    type: CLEAR_TWEETS
  };
}

export function requestTweetsByQuery(query) {
  return {
    type: REQUEST_TWEETS,
    query
  };
}

export function receiveTweetsByQuery(query, response) {
  return {
    type: RECEIVE_TWEETS,
    query,
    messages: response.statuses,
    receivedAt: Date.now()
  };
}

export function clearTweetsQuery() {
  return dispatch => dispatch(clearTweets(""));
}

export function fetchTweetsByQuery(query) {
  return dispatch => {
    // Transforming query to lower case + removing special characters (that are not @ nor #)
    const cleanQuery = query.toLowerCase().replace(/[^\w\s@#]/gi, "");

    // Dispatch of the Request Action (start)
    dispatch(requestTweetsByQuery(cleanQuery));

    // Dispatch of the Receive Action (response)
    dispatch(receiveTweetsByQuery(cleanQuery, mockedTweets));

    // Axios Request with the Twitter API (needs an OAuth Token from a Twitter Developer App to finish this)
    // return axios
    //   .get(`https://api.twitter.com/1.1/search/tweets.json?q=${cleanQuery}`)
    //   .then(response => response.json())
    //   .then(json => dispatch(receiveTweets(query, json)));
  };
}
