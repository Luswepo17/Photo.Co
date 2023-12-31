import Hero from "@/components/Hero";
import React from "react";

const ContactPage = () => {
  return (
    <div className="max-w-[1240px] m-auto p-4 h-screen">
      <h1 className="text-2xl font-bold text-center p-4">
        Let's work together
      </h1>
      <form className="max-w-[600px] mx-auto">
        <div className="grid grid-cols-2 gap-2">
          <input
            className=" border shadow-lg p-3"
            type="text"
            placeholder="Name"
          ></input>

          <input
            className=" border shadow-lg p-3"
            type="text"
            placeholder="Email"
          ></input>
        </div>
        <input
          className=" border shadow-lg p-3 w-full my-2"
          type="text"
          placeholder="Subject"
        ></input>
        <textarea
          className="border shadow-lg p-3 w-full"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="border shadow-lg p-3 w-full mt-2">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
