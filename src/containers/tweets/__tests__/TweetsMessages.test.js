import React from "react";
import { render } from "@testing-library/react";

import TweetsMessages from "../TweetsMessages";
import mockedTweets from "mocks/mockedTweets";

import { Provider } from "react-redux";
import configureStore from "store";

describe("TweetsMessages", () => {
  describe("when an empty Array is passed as the tweets prop", () => {
    const { getByTestId, getByText } = render(
      <Provider store={configureStore({ tweets: { messages: [] } })}>
        <TweetsMessages tweets={[]} />
      </Provider>
    );

    const errorContainer = getByTestId("no-tweets");
    const error = getByText("No tweets, sorry :(");

    it("renders the No Tweets div", () => {
      expect(errorContainer).toBeDefined();
    });

    it("renders the correct text in the No Tweets div", () => {
      expect(error).toBeDefined();
    });
  });

  describe("when data is passed as the tweet prop correctly", () => {
    const { getAllByTestId } = render(
      <Provider
        store={configureStore({
          tweets: { messages: mockedTweets.statuses }
        })}
      >
        <TweetsMessages tweets={[]} />
      </Provider>
    );

    const tweets = getAllByTestId("tweet-container");

    it("renders the Tweet Component correctly", () => {
      expect(tweets.length).toBe(2);
    });
  });
});
