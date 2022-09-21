import React from "react";
import { getUserId } from "../components/cookies";
import { Logout } from "./Logout";
import MobileMenu from "./views/menu";

export const Nav = () => (
  <div className="relative">
    {/* <MobileMenu /> */}

    <div className="justify-center text-white flex bg-red-600">
      <div className="flex flex-1 justify-center items-center">
        <div className="flex-1 flex justify-end items-center content-center">
          <img
            onClick={() =>
              (window.location.href = "https://love.evenjust.com/")
            }
            className="h-8 my-2 cursor-pointer"
            src="/cooo4.svg"
          />
        </div>
        <div className="flex-1 text-right">{getUserId() && <Logout />}</div>
      </div>
    </div>
  </div>
);

const FriendshipIcon = () => (
  <span className="px-2 md:px-5 text-xl md:text-2xl">
    <img
      className="w-8 md:w-16"
      alt="Love Calculator prank"
      src="https://lovecalczone.com/images/devil7.png"
    />
  </span>
);
