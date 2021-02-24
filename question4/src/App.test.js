import React from 'react';
import App from "./App";
import EnzymeAdapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import * as enzyme from "enzyme";
import { render } from "@testing-library/react";

enzyme.configure({ adapter: new EnzymeAdapter() });

it('renders without crashing: Enzyme', () => {
  const wrapper = enzyme.mount(
    <App items={[{ name: "one" }]} />,
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});


test("Given CanEdit is false then edit button is not shown", () => {
  const { container, unmount } = render(<App items={[{ name: "one" }]} />);
  expect(container).toMatchSnapshot();
  unmount();
});

// use either enzyme or react testing library