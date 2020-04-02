import React from "react";
import renderer from "react-test-renderer";
import Nav from "./Nav";
import { createRender } from "@material-ui/core/test-utils";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });

describe("Nav", () => {
  it("Snapshot", () => {
    const tree = renderer.create(<Nav />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("<Nav/>", () => {
  let render;

  beforeAll(() => {
    render = createRender();
  });

  it("should work", () => {
    render(<Nav />);
  });
});
