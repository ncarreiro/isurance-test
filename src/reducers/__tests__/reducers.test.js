import reducers from "../";
import { CLEAR_TWEETS, REQUEST_TWEETS, RECEIVE_TWEETS } from "../../actions";

describe("tweets reducers", () => {
  it("should return the initial state", () => {
    expect(reducers(undefined, {})).toEqual({
      tweets: {
        isFetching: false,
        messages: [],
        query: ""
      }
    });
  });

  it("should handle CLEAR_TWEETS", () => {
    const startAction = {
      type: CLEAR_TWEETS
    };

    expect(reducers({}, startAction)).toEqual({
      tweets: {
        isFetching: false,
        messages: [],
        query: ""
      }
    });
  });

  it("should handle REQUEST_TWEETS", () => {
    const startAction = {
      type: REQUEST_TWEETS,
      query: "test"
    };

    expect(reducers({}, startAction)).toEqual({
      tweets: {
        isFetching: true,
        messages: [],
        query: "test"
      }
    });
  });

  it("should handle RECEIVE_TWEETS", () => {
    const startAction = {
      type: RECEIVE_TWEETS,
      query: "test",
      messages: [{ id: 1, text: "mocked text" }],
      receivedAt: Date.now()
    };

    expect(reducers({}, startAction)).toEqual({
      tweets: {
        isFetching: false,
        messages: [{ id: 1, text: "mocked text" }],
        query: "test",
        receivedAt: Date.now()
      }
    });
  });
});
