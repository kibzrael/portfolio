import React from "react";
import "../styles/footer.css";
import useWindowDimensions from "../windowDimensions";

export default function Contact() {
  let { width, height } = useWindowDimensions();

  return (
    <div className="my-4 w-full max-w-lg flex flex-col space-y-4">
      <div className="w-full flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <input className="input" type="text" placeholder="Full name" />
        <input className="input" type="email" placeholder="Email" />
      </div>
      <textarea className="input" placeholder="Message" rows={4} />
      <button className="bg-purple-600 py-3 rounded-full shadow-sm hover:shadow-md">
        Submit
      </button>
    </div>
  );
}
