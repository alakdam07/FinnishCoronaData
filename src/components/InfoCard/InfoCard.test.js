import React from "react";
import renderer from "react-test-renderer";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import InfoCard from "./InfoCard";
import { createRender } from "@material-ui/core/test-utils";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });

describe("InfoCard", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("Snapshot", () => {
    const tree = renderer.create(<InfoCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("render text", async () => {
    act(() => {
      ReactDOM.render(<InfoCard />, container);
    });
    const infoHeadText = container.querySelector("h3");
    expect(infoHeadText.textContent).toBe(
      "Coronavirus data in Finland:",
      "Recovered",
      "Confirmed",
      "Death"
    );
  });
});

describe("<InfoCard />", () => {
  let render;

  beforeAll(() => {
    render = createRender();
  });

  it("should work", () => {
    render(<InfoCard />);
  });
});
