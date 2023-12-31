import React from "react";

import IgImg1 from "../public/assets/social/1.jpg";
import IgImg2 from "../public/assets/social/2.jpg";
import IgImg3 from "../public/assets/social/3.jpg";
import IgImg4 from "../public/assets/social/4.jpg";
import IgImg5 from "../public/assets/social/5.jpg";
import IgImg6 from "../public/assets/social/6.jpg";

import Instagramimg from "./Instagramimg";

const Instagram = () => {
  return (
    <div className=" max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Follow me on Instagram</p>
      <p className=" pb-4">Photo co.</p>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <Instagramimg socialImg={IgImg1} />
        <Instagramimg socialImg={IgImg2} />
        <Instagramimg socialImg={IgImg3} />
        <Instagramimg socialImg={IgImg4} />
        <Instagramimg socialImg={IgImg5} />
        <Instagramimg socialImg={IgImg6} />
      </div>
    </div>
  );
};

export default Instagram;
