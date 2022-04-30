import React from 'react';
import { FieldRenderProps } from 'react-final-form';

interface AdditionalProps {
  placeholder: string
}

interface Props
  extends FieldRenderProps<string, HTMLElement>, AdditionalProps {}

export const Input: React.FC<Props> = ({ input, meta, placeholder}) => {
  return (
    <React.Fragment>
      <input
        className='my-2 w-full rounded-sm p-2 outline-none
      text-white border-none text-sm white-glassmorphism
      bg-transparent'
        placeholder={placeholder}
        {...input}
      />
      {meta.error && meta.touched && (
        <span className="text-sm text-white">{meta.error}</span>
      )}
    </React.Fragment>
  );
};
