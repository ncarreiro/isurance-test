import React from "react";
import { render } from "@testing-library/react";

import App from "../App";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
const mockStore = configureStore();

describe("App", () => {
  let store;
  const initialState = { tweets: { messages: [] } };
  store = mockStore(initialState);

  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const container = getByTestId("main-container");
  const header = getByTestId("header-container");
  const tweets = getByTestId("tweets-container");

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
