import React from "react";
import { render } from "@testing-library/react";

import Tweets from "../";

import { Provider } from "react-redux";
import configureStore from "store";

describe("Tweets", () => {
  const { getByTestId } = render(
    <Provider store={configureStore({ tweets: { messages: [] } })}>
      <Tweets />
    </Provider>
  );

  const container = getByTestId("tweets-container");

  it("renders the Tweets container", () => {
    expect(container).toBeDefined();
  });
});
