import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  placeholder: string;
  name: string;
}

export const Input: React.FC<Props> = ({ ...props}) => {
  return (
    <input
      className='my-2 w-full rounded-sm p-2 outline-none
      text-white border-none text-sm white-glassmorphism
      bg-transparent'
      {...props}
    />
  );
};
