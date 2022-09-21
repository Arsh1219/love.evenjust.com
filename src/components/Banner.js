import React from "react";

export const Banner = () => {
  return parseInt(Math.random() * 100) % 2 === 0 ? <Banner1 /> : <Banner2 />;
};

const Banner1 = () => {
  return (
    <div className="mx-1 md:mx-4 hidden">
      <div className="max-w-2xl bg-red-600 mx-auto p-2 font-bold text-white font-sans rounded-lg antialiased leading-relaxed">
        Know What your Friends Think About You!{" "}
        <a
          className="hover:text-gray-400"
          href="https://secret.cooo.me/"
          style={{ "text-decoration": "underline" }}
        >
          Click here
        </a>
      </div>
    </div>
  );
};

const Banner2 = () => {
  return (
    <div className="mx-1 md:mx-4 hidden">
      <div className="max-w-2xl bg-red-600 mx-auto p-2 font-bold text-white font-sans rounded-lg antialiased leading-relaxed">
        Know How well your friends know you? !{" "}
        <a
          className="hover:text-gray-400"
          href="https://secret.cooo.me/"
          style={{ "text-decoration": "underline" }}
        >
          Click here
        </a>
      </div>
    </div>
  );
};
