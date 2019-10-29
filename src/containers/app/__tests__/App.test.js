import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";

import { Provider } from "react-redux";
import configureStore from "store";

import App from "../App";

const store = configureStore();

describe("App", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const container = getByTestId("main-container");
  const header = getByTestId("header");
  const tweets = getByTestId("tweets");

  it("renders the Main Container", () => {
    expect(container).toBeDefined();
  });
  it("renders the Header", () => {
    expect(header).toBeDefined();
  });
  it("renders the Tweets", () => {
    expect(tweets).toBeDefined();
  });
});
