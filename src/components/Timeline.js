import React from "react";
import ReactDOM from "react-dom";

import { SubHeading } from "../components";
import { getUserName } from "./cookies";
import { getCrushes } from "./apis";

export class Timeline extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: getUserName() || ""
    };
    getCrushes().then(m => {
      this.setState({ crushes: m.friendCrushes, userName: m.name });
    });
  }

  componentDidUpdate() {
    if (window.location.href.includes("view=friendCrush")) {
      setTimeout(() => {
        var containerDomNode = ReactDOM.findDOMNode(this);
        containerDomNode.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start"
        });
      }, 1000);
    }
  }

  render() {
    if (this.state.crushes === undefined) {
      return false;
    }
    return (
      <>
        <div className="w-full max-w-3xl mx-auto px-3 p-2 my-5 bg-gray-300 border border-gray-600 rounded-xlg">
          <SubHeading label="Friends' Crushes" />
          <div className="mt-2 text-yellow-800">
            Important:- Once your Friend Enter name of Lover, Results will be
            shown here. Please reload the page to see latest results
          </div>
          <div className="w-full max-w-3xl mx-auto p-1 border-gray-600 rounded-lg">
            {this.state.crushes.length > 0 ? (
              <ShowCrushData crushes={this.state.crushes} />
            ) : (
              <NoCrushesFound />
            )}
          </div>
        </div>
      </>
    );
  }
}

const NoCrushesFound = () => {
  return (
    <>
      <table className="table-bordered table bg-white mt-3 rounded ">
        <thead className="">
          <tr>
            <th>Name</th>
            <th>Crush Name</th>
          </tr>
        </thead>
        <tbody />
      </table>
      No Friend has tried the love calculator yet. Share link to receive updates
    </>
  );
};

const ShowCrushData = ({ crushes }) => {
  return (
    <div className="rounded">
      <table className="table-bordered table bg-white mt-3 rounded ">
        <thead className="">
          <tr>
            <th>Name</th>
            <th>Crush Name</th>
          </tr>
        </thead>
        <tbody>
          {crushes.reverse().map((c, i) => (
            <tr kry={i}>
              <td>{c.f}</td>
              <td>{c.c}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
