import React from "react";
import Hero from "../../components/Hero";
import ContactPage from "@/components/contacts";

const Contact = () => {
  return (
    <div>
      <Hero
        heading="Contact"
        messages="Submit the form for more work and quotes"
      />
      <ContactPage />
    </div>
  );
};

export default Contact;
