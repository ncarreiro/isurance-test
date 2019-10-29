import React from "react";
import { render } from "@testing-library/react";

import TweetsLoading from "../TweetsLoading";

describe("TweetsLoading", () => {
  const { getByTestId, getByText } = render(<TweetsLoading />);

  const container = getByTestId("tweets-loading-container");

  it("renders the TweetsLoading container", () => {
    expect(container).toBeDefined();
  });

  const text = getByText("Loading new Tweets...");

  it("shows the correct loading text", () => {
    expect(text).toBeDefined();
  });
});
