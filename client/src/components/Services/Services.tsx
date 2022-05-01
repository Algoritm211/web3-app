import React from 'react';
import {ServiceCard} from "./ServiceCard";
import {BiHeart, BiSearchAlt, BsShieldCheck, BsShieldFillCheck} from "react-icons/all";

const Services: React.FC = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-center
      md:p-20 py-20 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
            Services than we
            <br/>
            continue to improve
          </h1>
        </div>
      </div>
      {/* Services cards */}
      <div className="flex flex-1 flex-col justify-start items-center">
        <ServiceCard
          color="bg-blue-500"
          title="Security Guaranteed"
          subtitle="Security is guaranteed. We always maintain privacy and maintain quality of products"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
        />
        <ServiceCard
          color="bg-purple-500"
          title="Best exchange rates"
          subtitle="Our platform has the best exchange rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
        />
        <ServiceCard
          color="bg-red-400"
          title="Fastest transactions"
          subtitle="Only here you can afford fastest transactions ever"
          icon={<BiHeart fontSize={21} className="text-white" />}
        />
      </div>
    </div>
  );
};

export default Services;
