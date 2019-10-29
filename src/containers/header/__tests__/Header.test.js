import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";

import Header from "..";

import configureStore from "redux-mock-store";
const mockStore = configureStore();

describe("Header", () => {
  let store;
  const initialState = { tweets: { messages: [] } };

  it("renders the Header container and input", () => {
    store = mockStore(initialState);

    const { getByTestId } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const container = getByTestId("header-container");
    expect(container).toBeDefined();
  });

  it("input value changes", () => {
    store = mockStore(initialState);

    const { getByTestId } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const input = getByTestId("header-search-input");
    expect(input).toBeDefined();

    fireEvent.change(input, { target: { value: "testvalue" } });
    expect(input.value).toBe("testvalue");
  });
});
