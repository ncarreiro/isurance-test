import React from "react";
import { render } from "@testing-library/react";

import Tweet from "../";
import mockedTweet from "./mockedTweet";

describe("when no data is passed as the tweet prop", () => {
  const { getByTestId, getByText } = render(<Tweet />);

  const container = getByTestId("tweet-container-error");
  const error = getByText("Error: Tweet prop missing.");

  it("renders the Tweet Container error div", () => {
    expect(container).toBeDefined();
  });

  it("renders the correct text in the Tweet Container error div", () => {
    expect(error).toBeDefined();
  });
});

describe("when data is passed as the tweet prop correctly", () => {
  const { getByTestId, getByText } = render(<Tweet tweet={mockedTweet} />);

  const container = getByTestId("tweet-container");
  const userContainer = getByTestId("tweet-user-container");
  const textContainer = getByTestId("tweet-text");

  it("renders the Tweet Component correctly", () => {
    expect(container).toBeDefined();
    expect(userContainer).toBeDefined();
    expect(textContainer).toBeDefined();
  });

  const queryByText = getByText(
    "Today's new update means that you can finally add Pizza Cat to your Retweet with comments! Learn more about this ne… https://t.co/Rbc9TF2s5X"
  );

  it("renders the Tweet Text correctly", () => {
    expect(queryByText).toBeDefined();
  });
});
