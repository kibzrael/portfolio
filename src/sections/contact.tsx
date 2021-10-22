import React from "react";

export default function Contact() {
  return (
    <div className="my-4 flex flex-col space-y-2">
      <div className="space-x-4">
        <input type="text" name="" id="" placeholder="Full name" />
        <input type="email" name="" id="" placeholder="Email" />
      </div>
      <textarea placeholder="Message" rows={4} />
      <button className="bg-purple-600 rounded-full">Submit</button>
    </div>
  );
}
