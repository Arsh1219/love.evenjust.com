import React from "react";
import {
  getUserId,
  getSecretKey,
  getUserName,
  saveUserId,
  saveSecretKey,
  setUserName,
} from "../cookies";
import { getRequestorId, getCookies } from "../utils";
import { StartView } from "./StartView";
import { SharableView } from "./SharableView";
import { PostCrush } from "../PostCrush";
import { Timeline } from "../Timeline";
import { Banner } from "../Banner";
import { AddInTop, AddInBottom } from "../Adds";
import { Heading } from "..";

import { Nav } from "../Nav";

const TNC = () => {
  return (
    <div className="max-w-2xl mx-auto text-center md:text-left">
      <Heading label="Terms & Conditions" />
      <div className="mt-2">
        1) We will notify you about Your Friend's Name and His/Her Crush's Name
        Directly.
      </div>
      <div>
        2) You can also Check your Results via <a href="/">Home Page.</a>
      </div>
      <div>
        3) Send Link to other persons at your own risk. We are not responsible
        for any legal issues.
      </div>
      <div>
        4) We will only store Results Info and your name into our database to
        make site work properly.
      </div>
      <div>We won't share your details with any Third-Party Websites.</div>
      <div>This website use cookies to store info on your device.</div>
      <div>
        We use Third-Party Services like Google Analytics, Google Adsense on our
        Website.
      </div>
      <div>Regards, Team. https://evenjust.com/</div>
    </div>
  );
};

export class ViewHandler extends React.Component {
  constructor(props) {
    super(props);

    this.onUserSaved = this.onUserSaved.bind(this);

    this.state = {
      userId: getUserId(),
      secretKey: getSecretKey(),
      userName: getUserName(),
      requestorId: getRequestorId(),
    };
  }

  onUserSaved() {
    this.updateState();
  }

  updateCookies() {
    const cook = getCookies();
    console.log(cook);

    if (cook.status == true) {
      saveUserId(cook.userId);
      saveSecretKey(cook.secretKey);
      setUserName(cook.userName);

      return true;
    }

    return false;
  }

  refreshPage() {
    window.location.replace(`${window.location.origin}/`);
  }

  updateState() {
    this.setState({
      userId: getUserId(),
      secretKey: getSecretKey(),
      userName: getUserName(),
      requestorId: getRequestorId(),
    });
  }

  render() {
    if (window.location.href.includes("terms.html")) {
      return <TNC />;
    }

    if (this.updateCookies() == true) {
      this.refreshPage();
    }

    if (this.state.requestorId) {
      if (this.state.requestorId === this.state.userId) {
        return <ShowShareView userId={this.state.userId} />;
      } else {
        return <PostCrush requestorId={this.state.requestorId} />;
      }
    } else {
      if (this.state.userId) {
        return <ShowShareView userId={this.state.userId} />;
      } else {
        return (
          <>
            <UpperView />
            <div className="w-full max-w-3xl mx-auto px-3 p-2 mt-3 bg-white border border-gray-600 rounded-xlg">
              <StartView onUserSaved={this.onUserSaved} />
            </div>
            <AddInBottom />
          </>
        );
      }
    }
  }
}

const ShowShareView = ({ userId }) => {
  return (
    <>
      <UpperView />
      <div className="w-full max-w-3xl mx-auto px-3 p-2 mt-3 bg-white border border-gray-600 rounded-xlg">
        <SharableView userId={userId} />
      </div>
      <div className="mt-4">
        <Timeline />
      </div>
      <AddInBottom />
    </>
  );
};

const UpperView = () => {
  return (
    <>
      <Nav label="" />
      <AddInTop />
      <Banner href="https://song.cooo.me/select?ref=secret" />
    </>
  );
};
