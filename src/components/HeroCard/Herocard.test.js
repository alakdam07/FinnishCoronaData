import React from "react";
import { wait } from "@testing-library/react";
import ReactDOM from "react-dom";
import HeroCard from "./HeroCard";
import { act } from "react-dom/test-utils";
import { createRender } from "@material-ui/core/test-utils";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });

describe("HeroCard", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("render text", async () => {
    act(() => {
      ReactDOM.render(<HeroCard />, container);
    });
    const districtHeadline = container.querySelector("p");
    const date = new Date();
    await wait(() => {
      expect(districtHeadline.textContent).toBe(
        "Health care district: Unknown",
        "Infection source of country: Unknown",
        `"Date of infected: ${date}"`
      );
    });
  });
});

describe("<HeroCard />", () => {
  let render;

  beforeAll(() => {
    render = createRender();
  });

  it("should work", () => {
    render(<HeroCard />);
  });
});
