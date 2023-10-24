import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { Logo } from "..";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-b-4 border-primary bg-light violate pt-12 mt-24">
      {/* Footer top */}
      <div className="box flex flex-col md:flex-row  justify-between border-b-2 border-light violate pb-10 gap-8">
        {/* Footer top left */}
        <div className="basis-1/2 flex flex-col gap-6 items-center md:items-start text-center md:text-start">
          <Logo />
          <p>
          Unleash your inner chef with YumDish's seamless recipe search and sharing. Dive into a world of flavors, where every dish tells a story waiting to be shared and savored!
          </p>
        </div>
       
      </div>
      {/* Footer bottom */}
   
    </footer>
  );
};

export default Footer;
