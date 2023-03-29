import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';

import Panel from './Panel';
import { DropdownOption } from '../types';

type Props = {
  options: DropdownOption[];
  onChange: (option: DropdownOption) => void;
  value: DropdownOption | null;
};

export default function Dropdown({ options, onChange, value }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const divEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (event: any) => {
      if (!divEl.current) return;

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

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
    <div ref={divEl} className='w-48 relative'>
      <Panel
        className='cursor-pointer flex justify-between items-center'
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        <GoChevronDown className='text-lg' />
      </Panel>
      {isOpen && (
        <Panel className='absolute top-full border rounded p-3 shadow bg-white'>
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
}
