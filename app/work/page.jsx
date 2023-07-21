import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import React from "react";

const work = () => {
  return (
    <div>
      <Hero
        heading="Our Work"
        messages="Some of our recent work around the globe"
      />
      <Portfolio />
    </div>
  );
};

export default work;
