import React from "react";
import { NameInput } from "../../components/NameInput";
import { Heading, SubHeading } from "../../components";

export class StartView extends React.Component {
  render() {
    return (
      <>
        <h1 className="text-2xl my-3 text-red-700 font-semibold">2022 Love Calculator</h1>
        <Heading label="Want to know who He/She really likes? " />
        <div className="mt-2">
          <SubHeading label="Trick them into telling you" />
        </div>
        <div className="my-4 mx-2 md:mx-5 text-gray-700">
          <div className="bullets">
            <ol
              className="text-left list-disc text-base font-semibold list-outside"
              style={{ listStylePosition: "inside" }}
            >
              <li>Enter Your Name and click create link button.</li>
              <li>
                Share your Link via Whatsapp /Facebook or Anywhere else with
                your Friends, Families, Co-Workers.
              </li>
              <li>
                Tell them it's a Real love calculator, When they open Link it
                looks like Real love Calculator Website.
              </li>
              <li>
                Once Your Friend Enter Crush's Name to Calculate Love, we will
                share them with you.
              </li>
            </ol>
          </div>
        </div>
        <NameInput onUserSaved={this.props.onUserSaved} />
      </>
    );
  }
}
