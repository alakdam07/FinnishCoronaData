import React from "react";
import { render, wait, cleanup } from "@testing-library/react";
import Hero from "./Hero";
import Victim from "./../VictimCard/Victim";
import HeroCard from "./../HeroCard/HeroCard";
import { createRender } from "@material-ui/core/test-utils";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
configure({ adapter: new Adapter() });
describe("Hero", () => {
  afterEach(cleanup);

  it("Render loading", () => {
    const { getByText } = render(<Hero />);
    const linkElement = getByText("loading.....");
    wait(() => {
      expect(linkElement).toBeInTheDocument();
    });
  });

  it("renders text headline", () => {
    const { getByText } = render(<Hero />);
    const text = getByText("Confirmed Coronavirus cases in Finland:");
    const victimText = getByText("Deceased:");
    wait(() => {
      expect(text).toBeInTheDocument();
      expect(victimText).toBeInTheDocument();
    });
  });

  let dummyData = [
    {
      confiremd: [
        {
          id: 1,
          date: "2020-01-29T11:00:00.000Z",
          healthCareDistrict: "Lappi",
          infectionSourceCountry: "CHN",
          infectionSource: "unknown"
        },
        {
          id: 2,
          date: "2020-01-29T11:00:00.000Z",
          healthCareDistrict: "Lappi",
          infectionSourceCountry: "CHN",
          infectionSource: "unknown"
        }
      ],
      deaths: [
        { id: 1, date: "2020-01-29T11:00:00.000Z", healthCareDistrict: "HUS" }
      ],
      recovered: [
        {
          id: 1,
          date: "2020-01-29T11:00:00.000Z",
          healthCareDistrict: "Lappi"
        },
        {
          id: 2,
          date: "2020-01-29T11:00:00.000Z",
          healthCareDistrict: "Lappi"
        }
      ]
    }
  ];

  it("it fetch data and pass the props to Victim component", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve(
            dummyData.deaths.map(list => {
              return (
                <div key={list.id}>
                  <Victim
                    districts={list.healthCareDistrict}
                    date={list.date}
                  />
                </div>
              );
            })
          )
      })
    );
  });
  it("it fetch data and pass the props to Victim component", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve(
            dummyData.confiremd.map(list => {
              return (
                <div key={list.id}>
                  <HeroCard
                    districts={list.healthCareDistrict}
                    source={list.infectionSourceCountry}
                    date={list.date}
                  />
                </div>
              );
            })
          )
      })
    );
  });
});

describe("<HeroCard />", () => {
  let render;

  beforeAll(() => {
    render = createRender();
  });

  it("should work", () => {
    render(<Hero />);
  });
});
