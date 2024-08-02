import React from "react";
import hero1 from "../assets/hero1.png";
import Card1 from "./Card1";

const Hero = () => {
  return (
    <>
      <div className="bg-hero1bg h-full w-full flex flex-wrap justify-between p-4 md:p-8 relative">
        <div className="w-full md:w-2/5 mt-4 ">
          <div className="font-semibold text-2xl md:text-4xl">
            LawSikho occupies the leadership space in online legal education.
          </div>
          <div className="mt-2 text-sm md:text-base">
            We offer the most advanced legal courses you can find anywhere,
            helping you to acquire skills and knowledge you can bank on to bag
            the best legal jobs, crack difficult competitive exams, serve your
            own clients, build a law practice, or outperform others in
            internships. <br />
            <br /> Maybe you are just looking to learn more about a cutting edge
            area of law practice, or aiming at an international legal career -
            LawSikho can help you all the way.
          </div>
        </div>
        <div className="w-full md:w-auto mt-4 md:mt-0 flex justify-center ">
          <img
            src={hero1}
            alt="Hero"
            className="h-52 md:h-72 w-full md:w-auto"
          />
        </div>
      </div>
      <div
        className="md:h-[250px] h-[800px] w-[95%] md:ml-[30px] ml-[]15px  bg-white grid md:grid-cols-5 md:divide-x mt-2"
        style={{ outline: "1px solid #ccc" }}
      >
        <Card1
          firsttext="#1 Legal Edtech In The World:"
          secondtext="1st Out Of 104 Competitors (Tracxn)"
        />
        <Card1
          firsttext="2,500,000+"
          secondtext="One Of The Largest Legal Blogs In The World
With 2.5M+ Average Monthly Users)"
        />
        <Card1
          firsttext="6 Out Of 30"
          secondtext="SENSEX Companies Have Been Our Client
For Legal Or Compliance Training"
        />
        <Card1
          firsttext="36,000+"
          secondtext="We run India’s #1 legal job board with 36000+ applicants per month (started in March 2023)"
        />
        <Card1 firsttext="1400+" secondtext="Success stories every month" />
      </div>
    </>
  );
};

export default Hero;
