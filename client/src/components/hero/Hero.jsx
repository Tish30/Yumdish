import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import { Button } from "..";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="box h-[82vh] flex flex-col-reverse md:flex-row justify-between gap-8 md:gap-16">
      <div className="flex flex-col items-center md:items-start justify-center basis-1/2 gap-4">
        {/* <span className="text-primary text-sm px-4 py-1 rounded-full border-2 border-primary max-w-max">
          Feast. Share. Connect.
        </span> */}
        <h2 className="font-bold text-3xl md:text-5xl text-center md:text-start">
          Welcome to <span className="text-primary">Yumdish</span>
        </h2>
        <p className="text-black text-center md:text-start">
        Ready to elevate your cooking experience? Discover endless culinary possibilities with YumDish's intuitive recipe search and seamless recipe sharing. Unleash your creativity and indulge in a world of taste sensations!
        </p>
        <Link to={"/recipe"}>
          <Button
            content={"Explore Recipes"}
            customCss={
              "mt-4 md:mt-8 md:py-3 md:px-9 md:text-lg max-w-max rounded-full"
            }
            icon={<GiKnifeFork />}
          />
        </Link>
      </div>
      <div className="basis-1/2 bg-hero bg-no-repeat bg-cover bg-center rounded-xl"></div>
    </section>
  );
};

export default Hero;
