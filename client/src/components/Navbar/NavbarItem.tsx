import React from 'react';

interface Props {
  title: string;
  classProps: string
}

export const NavbarItem: React.FC<Props> = ({title, classProps}) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {title}
    </li>
  );
};
