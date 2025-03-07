import React, { useState } from 'react';
// import { RenderIf } from '';
import { cn } from '@/lib/utils';
import { RenderIf } from '../shared';

interface IProps extends React.HTMLProps<HTMLInputElement> {
  type?: React.HTMLInputTypeAttribute;
  errors?: any;
  touched?: any;
  className?: string;
}

const InputField = (props: IProps) => {
  const {
    name = 'name',
    id,
    errors = {},
    touched = {},
    className,
    label,
    ...restProps
  } = props;

  const hasError = (errors[name] && touched[name]) || false;

  const [show, setShow] = useState(false);

  return (
    <div className={cn(`font-karla`, className)}>
      <div className='flex flex-col gap-[8px] '>
        <RenderIf condition={!!label}>
          <label
            htmlFor={id}
            className=' font-medium -tracking-[2%] text-[14px]'
          >
            {label}
          </label>
        </RenderIf>

        <div className='relative'>
          <input
            {...{
              ...restProps,
              type: show ? 'text' : restProps.type,
              id,
              name,
            }}
            className={cn(
              ` w-full h-[48px] rounded-[4px] p-[17.8px] text-[14px] border border-gray-100`,
              {
                'border border-status-red-text': hasError,
              },
              className
            )}
          />

          {restProps.type === 'password' && (
            <p
              onClick={() => setShow((prev) => !prev)}
              className='cursor-pointer absolute top-[12px] right-3 text-[14px] font-bold text-nav-active'
            >
              {show ? 'Hide' : 'Show'}
            </p>
          )}
        </div>
      </div>
      <RenderIf condition={hasError}>
        <div>
          <p className='text-status-red-text text-[14px]'>{errors[name]}</p>
        </div>
      </RenderIf>
    </div>
  );
};

export default InputField;
