import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Head from "next/head";
import Image from "next/image";
import { SliderData } from "@/components/SliderData";
import Instagram from "@/components/Instagram";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Head>
        <title>Next APP</title>
      </Head>
      <Hero
        heading="Photo Co."
        messages="We capture moments and keep them alive."
      />
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  );
}
