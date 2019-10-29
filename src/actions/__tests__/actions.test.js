import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";
import {
  clearTweetsQuery,
  fetchTweetsByQuery,
  CLEAR_TWEETS,
  REQUEST_TWEETS,
  RECEIVE_TWEETS
} from "../";
import { initialState } from "../../reducers";
import mockedTweets from "../../mocks/mockedTweets";

const createStore = configureMockStore([thunkMiddleware]);
const store = createStore(initialState);

describe("actions", () => {
  describe("tweets actions", () => {
    beforeEach(() => {
      store.clearActions();
    });
    it("dispatches CLEAR_TWEETS after clearTweetsQuery action", () => {
      const expectedActions = [{ type: CLEAR_TWEETS }];
      store.dispatch(clearTweetsQuery());
      expect(store.getActions()).toEqual(expectedActions);
    });
    it("dispatches REQUEST_TWEETS and RECEIVE_TWEETS after fetchTweetsByQuery action", () => {
      const expectedActions = [
        { type: REQUEST_TWEETS, query: "test" },
        {
          type: RECEIVE_TWEETS,
          query: "test",
          messages: mockedTweets.statuses,
          receivedAt: Date.now()
        }
      ];
      store.dispatch(fetchTweetsByQuery("test"));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
