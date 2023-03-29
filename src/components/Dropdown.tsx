import { useState } from 'react';
import { DropdownOption } from '../types';
import { GoChevronDown } from 'react-icons/go';

type Props = {
  options: DropdownOption[];
  onChange: (option: DropdownOption) => void;
  value: DropdownOption | null;
};

export default function Dropdown({ options, onChange, value }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: DropdownOption) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className='cursor-pointer hover:bg-sky-100 rounded p-1'
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className='w-48 relative'>
      <div
        className='cursor-pointer flex justify-between items-center border rounded p-3 shadow bg-white w-full'
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        <GoChevronDown className='text-lg' />
      </div>
      {isOpen && (
        <div className='absolute top-full border rounded p-3 shadow bg-white w-full'>
          {renderedOptions}
        </div>
      )}
    </div>
  );
}
