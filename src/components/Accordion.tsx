import React, { useState } from 'react';
import { AccordionItem } from '../types';
import { BiLeftArrow, BiDownArrow } from 'react-icons/bi';

type Props = {
  items: AccordionItem[];
};

export default function Accordion({ items }: Props) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (idx: number) => {
    // set function with previous value
    setExpandedIndex((prev) => (prev === idx ? -1 : idx));

    // SIMPLER VERSION
    // if (expandedIndex === idx) {
    //   setExpandedIndex(-1);
    // } else {
    //   setExpandedIndex(idx);
    // }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className='text-2xl'>
        {isExpanded ? <BiDownArrow /> : <BiLeftArrow />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className='flex p-3 bg-gray-50 border-b items-center justify-between cursor-pointer'
          onClick={() => handleClick(index)}
        >
          <div>{item.label}</div>
          {icon}
        </div>
        {isExpanded && <div className='border-b p-5'>{item.content}</div>}
      </div>
    );
  });

  return <div className='border-x border-t rounded'>{renderedItems}</div>;
}
