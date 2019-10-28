import React from "react";
import { render } from "@testing-library/react";

import Tweet from "../";
import mockedTweet from "./mockedTweet";

describe("when no data is passed as the tweet prop", () => {
  it("renders the Tweet Container error div", () => {
    const { getByTestId } = render(<Tweet />);
    const container = getByTestId("tweet-container-error");
    expect(container).toBeDefined();
  });

  it("renders the correct text in the Tweet Container error div", () => {
    const { getByText } = render(<Tweet />);
    const error = getByText("Error: Tweet prop not available.");
    expect(error).toBeDefined();
  });
});

describe("when data is passed as the tweet prop correctly", () => {
  it("renders the Tweet Component correctly", () => {
    const { getByTestId } = render(<Tweet tweet={mockedTweet} />);
    const container = getByTestId("tweet-container");
    const user = getByTestId("tweet-user-container");
    const text = getByTestId("tweet-text");

    expect(container).toBeDefined();
    expect(user).toBeDefined();
    expect(text).toBeDefined();
  });

  it("renders the Tweet Text correctly", () => {
    const { getByText } = render(<Tweet tweet={mockedTweet} />);
    const text = getByText(
      "Today's new update means that you can finally add Pizza Cat to your Retweet with comments! Learn more about this ne… https://t.co/Rbc9TF2s5X"
    );
    expect(text).toBeDefined();
  });
});
