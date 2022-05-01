import React from 'react';
import {BsShieldFillCheck} from "react-icons/all";

interface Props {
  color: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode
}

export const ServiceCard: React.FC<Props> = ({color, icon, title, subtitle}) => {
  return (
    <div className="flex w-full flex-row justify-start items-center white-glassmorphism
    p-3 m-2 cursor-pointer shadow-xl">
      <div className={`flex w-10 h-10 rounded-full justify-center items-center ${color}`}>
        {icon}
      </div>
      <div className="ml-5 flex flex-col flex-1">
        <h1 className="text-white text-lg">{title}</h1>
        <p className="mt-2 text-white text-sm md:w-9/12">{subtitle}</p>
      </div>
    </div>
  );
};
