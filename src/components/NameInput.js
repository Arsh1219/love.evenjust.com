import React from "react";
import { SubHeading, SmallButton, Heading } from "./";
import { getUserName, setUserName } from "./cookies";
import { createUser } from "./apis";
import { showToolTip } from "./utils.js";
import { FaKissWinkHeart } from "react-icons/fa";

export class NameInput extends React.Component {
  constructor(props) {
    super(props);

    this.updateUserName = this.updateUserName.bind(this);
    this.signUp = this.signUp.bind(this);

    this.state = {
      userName: getUserName() || ""
    };
  }

  updateUserName(evt) {
    this.setState({ userName: evt.target.value });
  }

  signUp() {
    const isValid = this.state.userName;
    if (!isValid) {
      showToolTip();
      return;
    }

    setUserName(this.state.userName);
    createUser().then(() => {
      this.props.onUserSaved();
    });
    this.setState({ submitting: true });
  }

  render() {
    if (this.state.submitting) {
      return (
        <>
          <Heading label="Creating you love calculator link" />
          <SubHeading label="Please wait" />
          <div className="mt-2 flex justify-center">
            <img src="https://i.imgur.com/fvoOJ5h.gif" alt="wait" />
          </div>
        </>
      );
    }
    return (
      <div className="mx-5 text-left">
        <SubHeading label="Your Name:" />
        <input
          type="text"
          name="fname"
          className="form-control mt-1 focus:outline-0 focus:shadow-outline h-10 border-2 border-gray-500 rounded-lg px-2 block w-full appearance-none leading-normal"
          placeholder="Full Name"
          value={this.state.userName}
          onChange={evt => this.updateUserName(evt)}
        />
        <div className="my-4" data-tooltip="Enter valid name">
          <SmallButton
            label={
              <div className="flex justify-center items-center content-center">
                <div>
                  <FaKissWinkHeart className="text-xl" />
                </div>
                <div className="mx-2 text-xl">Create Link</div>
                <div>
                  <FaKissWinkHeart className="text-xl" />
                </div>
              </div>
            }
            onClick={e => this.signUp()}
            color="rgb(252, 77, 33)"
          />
        </div>
      </div>
    );
  }
}
