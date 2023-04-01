import React, { useState } from 'react';
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import { TableColConfig } from '../types';
import Table from './Table';

type Props = {
  data: any[];
  config: TableColConfig[];
  keyFn: (key: any) => any;
};

export default function SortableTable(props: Props) {
  const [sortOrder, setSortOrder] = useState<null | 'asc' | 'desc'>(null);
  const [sortBy, setSortBy] = useState(null);

  const { config, data } = props;

  const handleClick = (label: any) => {
    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className='cursor-pointer hover:bg-gray-100'
          onClick={() => handleClick(column.label)}
        >
          <div className='flex items-center'>
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  // Only sort data if sortOrder && sortBy are not null
  // Make a copy of the 'data' prop
  // Find the correct sortValue func and use it to sort
  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find(
      (column) => column.label === sortBy
    ) as TableColConfig;

    if (typeof sortValue === 'function') {
      sortedData = [...data].sort((a, b) => {
        const valueA = sortValue(a);
        const valueB = sortValue(b);

        const reverseOrder = sortOrder === 'asc' ? 1 : -1;

        if (typeof valueA === 'string') {
          return valueA.localeCompare(valueB) * reverseOrder;
        } else {
          return (valueA - valueB) * reverseOrder;
        }
      });
    } else {
      sortedData = data;
    }
  }

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label: any, sortBy: any, sortOrder: any) {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  } else if (sortOrder === 'asc') {
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
  } else if (sortOrder === 'desc') {
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    );
  }
}
